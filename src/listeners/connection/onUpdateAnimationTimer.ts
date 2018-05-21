import { Multiplayer } from '../../multiplayer';

export class OnUpdateAnimationTimerListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateAnimationTimer(this.onUpdateAnimationTimer);
    }

    public onUpdateAnimationTimer(player: string, time: number): void {
        // TODO
    }
}