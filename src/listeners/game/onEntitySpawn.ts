import { IBallInfo } from '../../ballInfo';
import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';

export class OnEntitySpawnListener {
    private unknownEntities: Array<string | typeof ig.Entity> = [];
    private recursiveEntities: Array<string | typeof ig.Entity> = [];
    private original!: <T extends ig.Entity>(type: string | (new(...args: any[]) => T),
                                             x: number,
                                             y: number,
                                             z: number,
                                             settings: any,
                                             showAppearEffects?: boolean) => T;

    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.original = ig.game.spawnEntity;
        ig.game.spawnEntity = <T extends ig.Entity>(type: string | (new(...args: any[]) => T),
                                                    x: number,
                                                    y: number,
                                                    z: number,
                                                    settings: any,
                                                    showAppearEffects?: boolean) => {
            if (settings && settings.skipHook) {
                return this.original.call(ig.game, type, x, y, z, settings, showAppearEffects) as T;
            }
            return this.onEntitySpawned(type as string | typeof ig.Entity, x, y, z, settings, showAppearEffects) as T;
        };
    }

    public onEntitySpawned(type: string | typeof ig.Entity,
                           x: number,
                           y: number,
                           z: number,
                           settings: any,
                           showAppearEffects?: boolean): ig.Entity {
        const blacklist: Array<string | typeof ig.Entity> = [
            'Marker',
            'HiddenBlock',
            ig.ENTITY.Player,
            ig.ENTITY.Crosshair,
            ig.ENTITY.CrosshairDot,
            ig.ENTITY.OffsetParticle,
            ig.ENTITY.RhombusParticle,
            ig.ENTITY.HiddenSkyBlock,
            ig.ENTITY.Effect,
            ig.ENTITY.Particle,
            ig.ENTITY.CopyParticle,
        ];  // Static objects that never change or objects that should never be synced

        if (blacklist.indexOf(type) >= 0) {
            return this.original.call(ig.game, type, x, y, z, settings, showAppearEffects);
        }

        if (typeof type !== 'string' && type.prototype === ig.ENTITY.Ball.prototype) {
            const ballSettings = this.filterBall(settings);
            if (ballSettings) {
                if (typeof ballSettings.combatant !== 'string'
                    && settings.combatant.name === null) { // Don't resend other player's balls
                    this.main.connection.throwBall(ballSettings);
                }
            } else {
                console.warn('Could not find type of ball. Maybe something else threw the ball?');
            }
            return this.original.call(ig.game, type, x, y, z, settings, showAppearEffects);
        }

        const entity = this.original.call(ig.game, type, x, y, z, settings, showAppearEffects) as IMultiplayerEntity;

        const realType = this.findEntityType(type);
        if (realType === undefined) {
            if (this.unknownEntities.indexOf(type) === -1) {
                console.log('Unknown entity type spawned');
                this.unknownEntities.push(type);

                for (const key in sc) {
                    if ((sc as any)[key] === type) {
                        console.log(`Unkown entity is of type sc.${key}`);
                    }
                }
            }

            return entity;
        }

        if (entity && !entity.multiplayerId) {
            entity.settings = settings;

            if (this.main.host) {
                const mid = this.main.registerEntity(entity);

                // TODO: improve this (Maybe with a white/blacklist?)
                let isRecursive = false;

                if (this.recursiveEntities.includes(type)) {
                    isRecursive = true;
                } else {
                    try {
                        JSON.stringify(settings);
                    } catch (e) {
                        if (e.name === 'TypeError') {
                            isRecursive = true;
                            this.recursiveEntities.push(type);
                            console.log('Added type to recursive blacklist: ', this.findEntityType(type), type);
                        } else {
                            throw e;
                        }
                    }
                }

                this.main.connection.registerEntity(mid,
                                                    realType,
                                                    {x, y, z},
                                                    isRecursive ? {} : settings);
            }

            entity.lastPosition = {x, y, z};
        }

        return entity;
    }

    private filterBall(settings: {
        ballInfo: any
        combatant: ig.Entity,
        dir: Vec2,
        party: number,
    }): IBallInfo | null {
        const player = ig.game.playerEntity;
        const proxies = player.proxies;

        for (const name in proxies) {
            if (proxies.hasOwnProperty(name)) {
                const proxy = proxies[name];
                if (proxy !== undefined && proxy.data === settings.ballInfo) {
                    return {
                        ballInfo: name,
                        combatant:
                            settings.combatant === null
                                ? null
                                : (settings.combatant as IMultiplayerEntity).multiplayerId,
                        dir: settings.dir,
                        party: settings.party,
                    };
                }
            }
        }

        return null;
    }

    private findEntityType(type: string | typeof ig.Entity): string | undefined {
        if (typeof type === 'string') {
            return type;
        }

        for (const t in ig.ENTITY) {
            if ((ig.ENTITY as any)[t] === type) {
                return t;
            }
        }
    }
}