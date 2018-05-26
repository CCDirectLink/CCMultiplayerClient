import { Multiplayer } from '../../multiplayer';
import { PlayerListener } from './playerListener';

export class OnPlayerMoveListener {

    private last: ig.Vector3 = {x: -1, y: -1, z: -1};

    constructor(
        private main: Multiplayer,
    ) { }

    public register(playerListener: PlayerListener): void {
        const instance = this;
        playerListener.addChild((player: ig.Player) => {
            instance.onUpdate(player);
        });
    }

    public onPlayerMoved(player: ig.Player, position: ig.Vector3): void {
        this.main.connection.updatePersition(position);
    }

    private onUpdate(player: ig.Player): void {
        const pos = cc.ig.gameMain.getEntityPosition(player);

        if (!this.comparePosition(pos, this.last)) {
            this.onPlayerMoved(player, pos);
            this.copyPosition(pos, this.last);
        }
    }

    private comparePosition(left: ig.Vector3, right: ig.Vector3): boolean {
        return left.x === right.x &&
            left.y === right.y &&
            left.z === right.z;
    }

    private copyPosition(from: ig.Vector3, to: ig.Vector3): void {
        to.x = from.x;
        to.y = from.y;
        to.z = from.z;
    }
}