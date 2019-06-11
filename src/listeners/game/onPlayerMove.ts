import { Multiplayer } from '../../multiplayer';
import { PlayerListener } from './playerListener';

export class OnPlayerMoveListener {

    private last: Vec3 = {x: -1, y: -1, z: -1};

    constructor(
        private main: Multiplayer,
    ) { }

    public register(playerListener: PlayerListener): void {
        const instance = this;
        playerListener.addChild((player: ig.ENTITY.Player) => {
            instance.onUpdate(player);
        });
    }

    public onPlayerMoved(player: ig.ENTITY.Player, position: Vec3): void {
        this.main.connection.updatePersition(position);
    }

    private onUpdate(player: ig.ENTITY.Player): void {
        const pos = player.coll.pos;

        if (!this.comparePosition(pos, this.last)) {
            this.onPlayerMoved(player, pos);
            this.copyPosition(pos, this.last);
        }
    }

    private comparePosition(left: Vec3, right: Vec3): boolean {
        return left.x === right.x &&
            left.y === right.y &&
            left.z === right.z;
    }

    private copyPosition(from: Vec3, to: Vec3): void {
        to.x = from.x;
        to.y = from.y;
        to.z = from.z;
    }
}