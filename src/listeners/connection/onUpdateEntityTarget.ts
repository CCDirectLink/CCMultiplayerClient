import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityTargetListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateEntityTarget(this.onUpdateEntityTarget);
    }

    public onUpdateEntityTarget(id: number, target: string | number | null): void {
        // TODO
    }
}