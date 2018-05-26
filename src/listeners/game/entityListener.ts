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
        const entities = cc.ig.gameMain.entities;
        for (let i = 0; i < entities.length; i++) {
            const entity = cc.ig.gameMain.entities[i];
            if (!entity.multiplayerId || !(entity instanceof (cc.ig.entityList.Enemy as any))) {
                continue;
            }

            const mEntity = entity as IMultiplayerEntity;
            for (const child of this.children) {
                child(mEntity);
            }
        }
    }
}