import { Multiplayer } from '../../multiplayer';

export class OnEntitySpawnListener {
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
        ];  // Static objects that never change or objects that should never be synced

        if (blacklist.indexOf(type) >= 0) {
            return cc.ig.gameMain.spawnEntity(type, x, y, z, settings, showAppearEffects);
        }

        /*if (type === cc.ig.entityList.Ball) {
            console.log(settings);
        }*/

        let realType: string | undefined;
        if (typeof type === 'string') {
            // console.log("onEntitySpawn: ", type);
            realType = type;
            this.main.connection.spawnEntity(type, x, y, z, settings, showAppearEffects);
        } else {
            for (const t in cc.ig.entityList) {
                if (cc.ig.entityList[t] === type) {
                    // console.log("onEntitySpawn (type): ", t);
                    realType = t;
                    break;
                }
            }
        }

        if (realType === undefined) {
            throw new Error('Could not resolve entity type');
        }

        const entity = cc.ig.gameMain.spawnEntity(type, x, y, z, settings, showAppearEffects);

        if (entity && !entity.multiplayerId) {
            entity.settings = settings;

            if (this.main.host) {
                const mid = this.main.registerEntity(entity);

                // TODO: improve this (Maybe with a white/blacklist?)
                let isRecursive = false;
                try {
                    JSON.stringify(settings);
                } catch (e) {
                    if (e.name === 'TypeError') {
                        isRecursive = true;
                    } else {
                        throw e;
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
}