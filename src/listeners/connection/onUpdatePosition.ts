import { Multiplayer } from '../../multiplayer';

export class OnUpdatePositionListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdatePostion(this.onUpdatePostion);
    }

    public onUpdatePostion(player: string, position: ig.Vector3): void {
        const pl = this.main.players[player];
        if (pl && pl.entity) {
            cc.ig.gameMain.setEntityPosition(pl.entity, position);
            pl.position = position;
        }
    }
}