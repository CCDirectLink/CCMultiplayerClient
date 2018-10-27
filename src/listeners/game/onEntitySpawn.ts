import { IBallInfo } from '../../ballInfo';
import { Multiplayer } from '../../multiplayer';

export class OnEntitySpawnListener {
    private unknownEntities: Array<string | ig.EntityType> = [];
    private recursiveEntities: Array<string | ig.EntityType> = [];

    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        const self = this;

        cc.ig.gameMain[cc.ig.varNames.gameMainSpawnEntity] = (type: string | ig.EntityType,
                                                              x: number,
                                                              y: number,
                                                              z: number,
                                                              settings: any,
                                                              showAppearEffects: boolean) => {
            return this.onEntitySpawned(type, x, y, z, settings, showAppearEffects);
        };
    }

    public onEntitySpawned(type: string | ig.EntityType,
                           x: number,
                           y: number,
                           z: number,
                           settings: any,
                           showAppearEffects?: boolean): ig.Entity {
        const blacklist: Array<string | ig.EntityType> = [
            'Marker',
            'HiddenBlock',
            cc.ig.entityList.Player,
            cc.ig.entityList.Crosshair,
            cc.ig.entityList.CrosshairDot,
            cc.ig.entityList.OffsetParticle,
            cc.ig.entityList.RhombusParticle,
            cc.ig.entityList.HiddenSkyBlock,
            cc.ig.entityList.Effect,
            cc.ig.entityList.Particle,
            cc.ig.entityList.CopyParticle,
        ];  // Static objects that never change or objects that should never be synced

        if (blacklist.indexOf(type) >= 0) {
            return cc.ig.gameMain.spawnEntity(type, x, y, z, settings, showAppearEffects);
        }

        if (type === cc.ig.entityList.Ball) {
            const ballSettings = this.filterBall(settings);
            if (ballSettings) {
                if (typeof ballSettings.combatant !== 'string'
                    && settings.combatant.name === null) { // Don't resend other player's balls
                    this.main.connection.throwBall(ballSettings);
                }
            } else {
                console.warn('Could not find type of ball. Maybe something else threw the ball?');
            }
            return cc.ig.gameMain.spawnEntity(type, x, y, z, settings, showAppearEffects);
        }

        const entity = cc.ig.gameMain.spawnEntity(type, x, y, z, settings, showAppearEffects);

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
        dir: ig.Vector2,
        party: number,
    }): IBallInfo | null {
        const player = cc.ig.playerInstance();
        const proxies = simplify.getEntityProxies(player);

        for (const name in proxies) {
            if (proxies.hasOwnProperty(name)) {
                const proxy = proxies[name];
                if (proxy !== undefined && proxy.data === settings.ballInfo) {
                    return {
                        ballInfo: name,
                        combatant: settings.combatant === null ? null : settings.combatant.multiplayerId,
                        dir: settings.dir,
                        party: settings.party,
                    };
                }
            }
        }

        return null;
    }

    private findEntityType(type: string | ig.EntityType): string | undefined {
        if (typeof type === 'string') {
            return type;
        }

        for (const t in cc.ig.entityList) {
            if (cc.ig.entityList[t] === type) {
                return t;
            }
        }
    }
}