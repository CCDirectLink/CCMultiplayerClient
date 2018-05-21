import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityHealthListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateEntityHealth(this.onUpdateEntityHealth);
    }

    public onUpdateEntityHealth(id: number, health: number): void {
        if (!this.main.entities[id]) {
            return;
        }

        console.log('[multiplayer] Set ' + id + '\'s health to ' + health);

        simplify.setCurrentHp(this.main.entities[id], health);
    }
}