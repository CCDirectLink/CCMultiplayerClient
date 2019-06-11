import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';
import { EntityListener } from './entityListener';

export class OnEntityAnimationListener {

    private lastAnim = '';
    private lastFace: Vec2 = {x: 0, y: 0};

    constructor(
        private main: Multiplayer,
    ) { }

    public register(entityListener: EntityListener): void {
        const instance = this;
        entityListener.addChild((entity: IMultiplayerEntity) => {
            instance.onUpdate(entity);
        });
    }

    public onEntityAnimation(entity: IMultiplayerEntity, animation: string, face: Vec2): void {
        this.main.connection.updateEntityAnimation(entity.multiplayerId, face, animation);
    }

    private onUpdate(entity: IMultiplayerEntity): void {
        const animation = entity.currentAnim;
        const face = entity.face;

        if (animation !== this.lastAnim || !this.compareFace(face, this.lastFace)) {
            this.onEntityAnimation(entity, animation, face);
            this.lastAnim = animation;
            this.copyFace(face, this.lastFace);
        }
    }

    private compareFace(left: Vec2, right: Vec2): boolean {
        return left.x === right.x &&
            left.y === right.y;
    }

    private copyFace(from: Vec2, to: Vec2): void {
        to.x = from.x;
        to.y = from.y;
    }
}