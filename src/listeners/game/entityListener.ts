import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';

export class EntityListener {
    private children: Array<(entity: IMultiplayerEntity) => any> = [];

    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        simplify.registerUpdate(() => {
            this.onUpdate(); // Added a lambda to avoid context weirdness
        });
    }

    public addChild(child: (entity: IMultiplayerEntity) => any) {
        this.children.push(child);
    }

    public onUpdate(): void {
        const entities = ig.game.entities;
        for (let i = 0; i < entities.length; i++) {
            const entity = ig.game.entities[i];
            if (!(entity as IMultiplayerEntity).multiplayerId || !(entity instanceof (ig.ENTITY.Enemy as any))) {
                continue;
            }

            const mEntity = entity as IMultiplayerEntity;
            for (const child of this.children) {
                child(mEntity);
            }
        }
    }
}