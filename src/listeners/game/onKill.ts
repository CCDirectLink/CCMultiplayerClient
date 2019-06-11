import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';

export class OnEntityKilledListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        const self = this;
        const originalKill = ig.Entity.prototype.kill;
        ig.Entity.prototype.kill = function(this: ig.Entity, ...args: any) {
            const converted = this as IMultiplayerEntity;
            if (converted.multiplayerId) {
                self.onEntityKilled(converted.multiplayerId);
                delete converted.multiplayerId;
            }

            return originalKill.apply(this, args);
        };
    }

    public onEntityKilled(id: number): void {
        this.main.connection.killEntity(id);

        if (this.main.entities[id]) {
            delete this.main.entities[id];
        }
    }
}