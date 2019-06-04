import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';
import { EntityListener } from './entityListener';

export class OnEntityStateChangeListener {

    private last = '';

    constructor(
        private main: Multiplayer,
    ) { }

    public register(entityListener: EntityListener): void {
        const instance = this;
        entityListener.addChild((entity: IMultiplayerEntity) => {
            instance.onUpdate(entity);
        });
    }

    public onEntityStateChanged(entity: IMultiplayerEntity, state: string): void {
        this.main.connection.updateEntityState(entity.multiplayerId, state);
    }

    private onUpdate(entity: IMultiplayerEntity): void {
        const state = entity.currentState;

        if (state !== this.last) {
            this.onEntityStateChanged(entity, state);
            this.last = status;
        }
    }
}