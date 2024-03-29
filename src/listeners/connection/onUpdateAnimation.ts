import { Multiplayer } from '../../multiplayer';

export class OnUpdateAnimationListener {
	constructor(
        private main: Multiplayer,
	) { }

	public register(): void {
		this.main.connection.onUpdateAnimation(this.onUpdateAnimation.bind(this));
	}

	public onUpdateAnimation(player: string, face: Vec2, anim: string): void {
		const pl = this.main.players[player];
		if (pl && pl.entity) {
			pl.entity.face.x = face.x;
			pl.entity.face.y = face.y;
			pl.entity.currentAnim = anim;
			this.clearAnimation(pl.entity);
			this.playAnimation(pl.entity, anim);
		}
	}

	private clearAnimation(entity: ig.Entity): void {
		new ig.EVENT_STEP.CLEAR_ANIMATION({entity}).start();
	}

	private playAnimation(entity: ig.Entity, anim: string): void {
		new ig.EVENT_STEP.DO_ACTION({
			entity,
			keepState: false,
			action: [{
				type: 'SHOW_ANIMATION',
				anim,
			}, {
				type: 'WAIT',
				time: -1,
			}],
		}).start({} as ig.EVENT_STEP.DO_ACTION);
	}
}