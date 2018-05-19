import { Multiplayer } from '../../multiplayer';

export class OnKillEntityListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onKillEntity(this.onKillEntity);
    }

    public onKillEntity(id: number): void {
        if (!this.main.entities[id]) {
            return;
        }

        simplify.killEntity(this.main.entities[id]);
        delete this.main.entities[id];
    }
}