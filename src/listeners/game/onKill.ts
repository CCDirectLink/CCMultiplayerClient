import { Multiplayer } from '../../multiplayer';

export class OnEntityKilledListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        const self = this;
        const originalKill = cc.ig.baseEntity.prototype[cc.ig.varNames.entityKill];
        cc.ig.baseEntity.prototype[cc.ig.varNames.entityKill] = function(this: ig.Entity) {
            if (this.multiplayerId) {
                self.onEntityKilled(this.multiplayerId);
                this.multiplayerId = undefined;
                delete this.multiplayerId;
            }

            return originalKill.apply(this, arguments);
        };
    }

    public onEntityKilled(id: number): void {
        this.main.connection.killEntity(id);

        if (this.main.entities[id]) {
            delete this.main.entities[id];
        }
    }
}