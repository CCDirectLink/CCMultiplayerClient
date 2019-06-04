import { Multiplayer } from '../../multiplayer';

export class OnTeleportListener {

    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        const instance = this;
        const original = ig.game.teleport;
        ig.game.teleport = function(this: ig.Game, map: string, teleportPosition: any, hint: string) {
            instance.onTeleport(map, teleportPosition, hint);
            return original.call(this, map, teleportPosition, hint);
        };
    }

    public onTeleport(map: string, teleportPosition: any, hint: string): void {
        this.main.loadingMap = true;

        for (const key in teleportPosition) {
            if (teleportPosition[key] && teleportPosition[key].constructor === String) {
                const marker: string = teleportPosition[key];
                this.main.connection.changeMap(map, marker);
                return;
            }
        }
        this.main.connection.changeMap(map, null);
    }
}