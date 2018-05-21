import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityPositionListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateEntityPosition(this.onUpdateEntityPosition);
    }

    public onUpdateEntityPosition(id: number, pos: ig.Vector3): void {
         // TODO
    }
}