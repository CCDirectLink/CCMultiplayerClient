import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityHealthListener {
	constructor(
        private main: Multiplayer,
	) { }

	public register(): void {
		this.main.connection.onUpdateEntityHealth(this.onUpdateEntityHealth.bind(this));
	}

	public onUpdateEntityHealth(id: number | string, health: number): void {
		const entity = this.getEntity(id);

		if (!entity) {
			return;
		}

		console.log('[multiplayer] Set ' + id + '\'s health to ' + health);

		entity.params.currentHp = health;
	}

	private getEntity(id: number | string): IMultiplayerEntity | null {
		if (typeof id === 'number') {
			return this.main.entities[id];
		}

		const player = this.main.players[id];
		if (player) {
			return player.entity;
		}

		return null;
	}
}