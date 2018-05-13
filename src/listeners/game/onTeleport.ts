import { Multiplayer } from '../../multiplayer';

export class OnTeleportListener {

    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        cc.ig.gameMain[cc.ig.varNames.gameMainTeleport] = (map: string, teleportPosition: any, hint: string) => {
            this.onTeleport(map, teleportPosition, hint);
            return cc.ig.gameMain.teleport.call(cc.ig.gameMain, map, teleportPosition, hint);
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
    }
}