import { IMultiplayerEntity } from '../../mpEntity';
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
                if (ig.game.entities.length > 0 &&
                    (typeof ig.game.currentLoadingResource !== 'string' ||
                    ig.game.currentLoadingResource.indexOf('LOADING MAP: ') === -1)) {
                    new sc.EnemyType('multiplayer').load(() => { // Make sure entity is loaded
                        const entity: IMultiplayerEntity
                        = ig.game.spawnEntity('Enemy', position.x, position.y, position.z, {
                            name: player,
                            enemyInfo: {
                                type: 'multiplayer',
                                group: '',
                                party: 'PLAYER',
                            },
                            mapId: 233,
                        });
                        entity.proxies = ig.game.playerEntity.proxies;
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

            ig.game.teleport(map, ig.TeleportPosition.createFromJson({marker}));
            this.main.connection.changeMap(map, marker);
        }
    }
}