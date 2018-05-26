import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';
import { EntityListener } from './entityListener';

export class OnEntityMoveListener {

    private last: ig.Vector3 = {x: -1, y: -1, z: -1};

    constructor(
        private main: Multiplayer,
    ) { }

    public register(entityListener: EntityListener): void {
        const instance = this;
        entityListener.addChild((entity: IMultiplayerEntity) => {
            instance.onUpdate(entity);
        });
    }

    public onEntityMoved(entity: IMultiplayerEntity, position: ig.Vector3): void {
        this.main.connection.updateEntityPosition(entity.multiplayerId, position);
    }

    private onUpdate(entity: IMultiplayerEntity): void {
        const pos = cc.ig.gameMain.getEntityPosition(entity);

        if (!this.comparePosition(pos, this.last)) {
            this.onEntityMoved(entity, pos);
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