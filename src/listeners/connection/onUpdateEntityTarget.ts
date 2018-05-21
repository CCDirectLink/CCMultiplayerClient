import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityTargetListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateEntityTarget(this.onUpdateEntityTarget);
    }

    public onUpdateEntityTarget(id: number, target: string | number | null): void {
        let entity: ig.Enemy | null | undefined;

        if (target === null) {
            entity = null;
        } else if (typeof target === 'string') {
            if (this.main.players[target]) {
                entity = this.main.players[target]!.entity;
            }
        } else if (typeof target === 'number') {
            entity = this.main.entities[target];
        }

        if (entity === undefined ) {
            return console.warn('Could not find entity ' + target);
        }

        simplify.setEntityTarget(this.main.entities[id], entity);
        this.main.entities[id].lastTarget = this.main.entities[id].target; // In order to avoid sending an target update
    }
}