import { Multiplayer } from '../../multiplayer';

export class OnMapLoadedListener {

    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        const originalUpdate = cc.ig.gameMain.update;
        cc.ig.gameMain.update = () => {
                const result = originalUpdate.call(cc.ig.gameMain);
                this.afterUpdate();
                return result;
            };
    }

    public afterUpdate(): void {
        if (!this.main.loadingMap && ig.ready) {
            while (this.main.futureEntities.length > 0) {
                this.main.spawnMultiplayerEntity(this.main.futureEntities[0]);
                this.main.futureEntities.shift();
            }
        }
    }
}