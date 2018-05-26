import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';
import { EntityListener } from './entityListener';

export class OnEntityHealthChangeListener {

    private last = 0;

    constructor(
        private main: Multiplayer,
    ) { }

    public register(entityListener: EntityListener): void {
        const instance = this;
        entityListener.addChild((entity: IMultiplayerEntity) => {
            instance.onUpdate(entity);
        });
    }

    public onEntityHealthChanged(entity: IMultiplayerEntity, health: number): void {
        this.main.connection.updateEntityHealth(entity.multiplayerId, health);
    }

    private onUpdate(entity: IMultiplayerEntity): void {
        const health = simplify.getCurrentHp(entity);

        if (health !== this.last) {
            this.onEntityHealthChanged(entity, health);
            this.last = health;
        }
    }
}