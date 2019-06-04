import { Multiplayer } from '../../multiplayer';

export class OnEntityKilledListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        const self = this;
        const originalKill = ig.Entity.prototype.kill;
        ig.Entity.prototype.kill = function(this: ig.Entity, ...args: any) {
            if (this.multiplayerId) {
                self.onEntityKilled(this.multiplayerId);
                this.multiplayerId = undefined;
                delete this.multiplayerId;
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