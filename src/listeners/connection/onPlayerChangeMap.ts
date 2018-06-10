import { Multiplayer } from '../../multiplayer';
import { IPlayer } from '../../player';

export class OnPlayerChangeMapListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onPlayerChangeMap(this.onPlayerChangeMap.bind(this));
    }

    public onPlayerChangeMap(player: string,
                             enters: boolean,
                             position: ig.Vector3,
                             map: string,
                             marker: string | null): void {
        if (enters) {
            const interv = setInterval(() => {
                if (cc.ig.gameMain.entities.length > 0 &&
                    (typeof cc.ig.gameMain.getLoadingState() !== 'string' ||
                    cc.ig.gameMain.getLoadingState().indexOf('LOADING MAP: ') === -1)) {
                    new cc.sc.EnemyType('multiplayer').load(() => { // Make sure entity is loaded
                        const entity = cc.ig.gameMain.spawnEntity('Enemy', position.x, position.y, position.z, {
                            name: player,
                            enemyInfo: {
                                type: 'multiplayer',
                                group: '',
                                party: 'PLAYER',
                            },
                            mapId: 233,
                        });
                        entity[cc.ig.varNames.proxies] = simplify.getEntityProxies(cc.ig.playerInstance());
                        this.main.players[player] = {name: player,
                                                    position: {x: position.x, y: position.y, z: position.z},
                                                    entity} as IPlayer;
                        console.log(this.main.players[player]);
                    });
                    clearInterval(interv);
                }
            });
        } else {
            this.main.players[player] = undefined;
            delete this.main.players[player];

            cc.ig.gameMain.teleport(map, cc.ig.TeleportPosition.createFromJson({marker}));
            this.main.connection.changeMap(map, marker);
        }
    }
}