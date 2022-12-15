import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';

export class OnSetHostListener {
	constructor(
        private main: Multiplayer,
	) { }

	public register(): void {
		this.main.connection.onSetHost(this.onSetHost.bind(this));
	}

	public onSetHost(isHost: boolean): void {
		if (this.main.host === isHost) {
			return;
		}

		this.main.host = isHost;

		if (isHost) {
			this.unlockEntities();
			console.log('[multiplayer] This user is now the host!');
		} else {
			this.lockEntities();
			console.log('[multiplayer] This user no longer the host!');
		}
	}

	private unlockEntities(): void {
		for (const entity of this.main.entities) {
			if (entity) {
				this.unlockEntity(entity);
			}
		}
	}

	private unlockEntity(entity: IMultiplayerEntity): void {
		const startPos = entity.coll.pos;
		let pos: Vec3 = {x: startPos.x, y: startPos.y, z: startPos.z};
		Object.defineProperty(entity.coll, 'pos', {
			get() { return pos; },
			set(value: Vec3) { pos = value; },
		});

		let anim = entity.currentAnim;
		Object.defineProperty(entity, 'currentAnim', {
			get() { return anim; },
			set(value) { anim = value; },
		});

		let face: Vec2 = {x: entity.face.x, y: entity.face.y};
		Object.defineProperty(entity, 'face', {
			get() { return face; },
			set(value: Vec2) { face = value; },
		});

		let state = entity.currentState;
		Object.defineProperty(entity, 'currentState', {
			get() { return state; },
			set(value: string) { state = value; },
		});
	}

	private lockEntities(): void {
		for (const entity of this.main.entities) {
			if (entity) {
				this.lockEntity(entity);
			}
		}
	}

	private lockEntity(entity: IMultiplayerEntity): void {
		const pos = entity.coll.pos;

		const protectedPos = {xProtected: pos.x, yProtected: pos.y, zProtected: pos.z};
		Object.defineProperty(protectedPos, 'x', { get() { return protectedPos.xProtected; }, set() { return; } });
		Object.defineProperty(protectedPos, 'y', { get() { return protectedPos.yProtected; }, set() { return; } });
		Object.defineProperty(protectedPos, 'z', { get() { return protectedPos.zProtected; }, set() { return; } });
		Object.defineProperty(entity.coll, 'pos',
			{ get() { return protectedPos; }, set() {console.log('tried to maniplulate pos'); } });

		let protectedAnim = entity.coll;

		Object.defineProperty(entity, 'currentAnim', {
			get() { return protectedAnim; },
			set(data) { if (data.protected) { protectedAnim = data.protected; } },
		});

		const protectedFace = entity.face ? {xProtected: entity.face.x, yProtected: entity.face.y}
			: {xProtected: 0, yProtected: 0};
		Object.defineProperty(protectedFace, 'x', {get() { return protectedFace.xProtected; }, set() { return; } });
		Object.defineProperty(protectedFace, 'y', {get() { return protectedFace.yProtected; }, set() { return; } });
		Object.defineProperty(entity, 'face',
			{ get() { return protectedFace; }, set() {console.log('tried to maniplulate face'); } });

		let protectedState = entity.currentState;
		Object.defineProperty(entity, 'currentState', {
			get() { return protectedState; },
			set(data) { if (data.protected) { protectedState = data.protected; } },
		});
	}
}