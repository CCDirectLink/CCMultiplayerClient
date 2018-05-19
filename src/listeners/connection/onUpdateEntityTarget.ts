import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityTargetListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onPlayerChangeMap(this.onPlayerChangeMap); // TODO
    }

    public onPlayerChangeMap(player: string, enters: boolean, position: ig.Vector3, map: string, marker: string): void {
        // TODO
    }
}