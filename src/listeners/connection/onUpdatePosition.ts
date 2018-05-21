import { Multiplayer } from '../../multiplayer';

export class OnUpdatePositionListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdatePostion(this.onUpdatePostion);
    }

    public onUpdatePostion(player: string, position: ig.Vector3): void {
        // TODO
    }
}