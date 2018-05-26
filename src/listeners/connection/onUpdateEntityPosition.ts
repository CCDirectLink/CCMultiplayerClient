import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityPositionListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateEntityPosition(this.onUpdateEntityPosition.bind(this));
    }

    public onUpdateEntityPosition(id: number, pos: ig.Vector3): void {
        if (this.main.host || !this.main.entities[id]) {
            return;
        }

        this.main.copyEntityPosition(pos, cc.ig.gameMain.getEntityPosition(this.main.entities[id]));
    }
}