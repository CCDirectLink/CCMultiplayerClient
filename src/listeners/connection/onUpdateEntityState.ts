import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityStateListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateEntityState(this.onUpdateEntityState);
    }

    public onUpdateEntityState(id: number, state: string): void {
        // TODO
    }
}