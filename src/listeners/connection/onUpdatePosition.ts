import { Multiplayer } from '../../multiplayer';

export class OnUpdatePositionListener {
	constructor(
        private main: Multiplayer,
	) { }

	public register(): void {
		this.main.connection.onUpdatePostion(this.onUpdatePostion.bind(this));
	}

	public onUpdatePostion(player: string, position: Vec3): void {
		const pl = this.main.players[player];
		if (pl && pl.entity) {
			pl.entity.coll.pos = position;
			pl.position = position;
		}
	}
}