import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';
import { IPlayer } from '../../player';

export class OnPlayerChangeMapListener {
	private cb?: () => void;

	constructor(
        private main: Multiplayer,
	) { }

	public register(): void {
		this.main.connection.onPlayerChangeMap(this.onPlayerChangeMap.bind(this));
		this.registerLoadCompleteHandler();
	}

	public async onPlayerChangeMap(player: string,
		enters: boolean,
		position: Vec3,
		map: string,
		marker: string | null): Promise<void> {
		if (enters) {
			await this.deferr();
			await this.loadMpEntity();

			const entity: IMultiplayerEntity = ig.game.spawnEntity('Enemy', position.x, position.y, position.z, {
				name: player,
				enemyInfo: {
					type: 'multiplayer',
					group: '',
					party: 'PLAYER',
				},
				mapId: 233,
				skipHook: true,
			});
			entity.proxies = ig.game.playerEntity.proxies;
			this.main.players[player] = {name: player,
				position: {x: position.x, y: position.y, z: position.z},
				entity} as IPlayer;
			console.log(this.main.players[player]);
		} else {
			this.main.players[player] = undefined;
			delete this.main.players[player];

			ig.game.teleport(map, ig.TeleportPosition.createFromJson({marker: marker as string}));
			this.main.connection.changeMap(map, marker);
		}
	}

	private deferr(): Promise<void> {
		if (!ig.game.isTeleporting() && ig.game.entities.length !== 0) { // If not loading map and not in title menu
			return Promise.resolve();
		}
		return new Promise((resolve) => {
			this.cb = resolve;
		});
	}

	private registerLoadCompleteHandler(): void {
		const instance = this;
		ig.Game.inject({
			loadingComplete(this: any): void {
				this.parent();
				if (instance.cb) {
					instance.cb.call(instance);
					instance.cb = undefined;
				}
			},
		});
	}

	private loadMpEntity(): Promise<void> {
		return new Promise((resolve) => new sc.EnemyType('multiplayer').load(() => resolve()));
	}
}