import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';
import { EntityListener } from './entityListener';

export class OnEntityTargetChangeListener {

    private last: ig.Entity | null = null;

    constructor(
        private main: Multiplayer,
    ) { }

    public register(entityListener: EntityListener): void {
        const instance = this;
        entityListener.addChild((entity: IMultiplayerEntity) => {
            instance.onUpdate(entity);
        });
    }

    public onEntityTargetChanged(entity: IMultiplayerEntity, t: ig.Entity | null): void {
        const target = entity.target ? ((entity.target as IMultiplayerEntity).multiplayerId || 0) : null;

        this.main.connection.updateEntityTarget(entity.multiplayerId, target);
    }

    private onUpdate(entity: IMultiplayerEntity): void {
        const target: ig.Entity | null = entity.target;
        if (target !== this.last) {
            this.onEntityTargetChanged(entity, target);
            this.last = target;
        }
    }
}