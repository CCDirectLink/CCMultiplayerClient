import { Multiplayer } from '../../multiplayer';

export class OnMapLoadedListener {

	constructor(
        private main: Multiplayer,
	) { }

	public register(): void {
		const originalUpdate = ig.game.update;
		ig.game.update = () => {
			const result = originalUpdate.call(ig.game);
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