import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityHealthListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateEntityHealth(this.onUpdateEntityHealth);
    }

    public onUpdateEntityHealth(id: number, health: number): void {
        // TODO
    }
}