import { Multiplayer } from '../../multiplayer';

export class OnUpdateAnimationTimerListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateAnimationTimer(this.onUpdateAnimationTimer);
    }

    public onUpdateAnimationTimer(player: string, time: number): void {
        const pl = this.main.players[player];
        if (pl && pl.entity) {
            simplify.setAnimationTimer(pl.entity, time);
        }
    }
}