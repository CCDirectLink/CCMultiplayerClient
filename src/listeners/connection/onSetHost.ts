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

    private unlockEntity(entity: ig.Entity): void {
        const startPos = cc.ig.gameMain.getEntityPosition(entity);
        let pos: ig.Vector3 = {x: startPos.x, y: startPos.y, z: startPos.z};
        Object.defineProperty(entity[cc.ig.varNames.entityData], cc.ig.varNames.entityPosition, {
            get() { return pos; },
            set(value: ig.Vector3) { pos = value; },
        });

        let anim = entity[cc.ig.varNames.currentAnimation];
        Object.defineProperty(entity, cc.ig.varNames.currentAnimation, {
            get() { return anim; },
            set(value) { anim = value; },
        });

        let face: ig.Vector2 = {x: entity.face.x, y: entity.face.y};
        Object.defineProperty(entity, 'face', {
            get() { return face; },
            set(value: ig.Vector2) { face = value; },
        });

        let state = simplify.getCurrentState(entity);
        Object.defineProperty(entity, cc.ig.varNames.currentState, {
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

    private lockEntity(entity: ig.Entity): void {
        const pos = cc.ig.gameMain.getEntityPosition(entity);

        const protectedPos = {xProtected: pos.x, yProtected: pos.y, zProtected: pos.z};
        Object.defineProperty(protectedPos, 'x', { get() { return protectedPos.xProtected; }, set() { return; } });
        Object.defineProperty(protectedPos, 'y', { get() { return protectedPos.yProtected; }, set() { return; } });
        Object.defineProperty(protectedPos, 'z', { get() { return protectedPos.zProtected; }, set() { return; } });
        Object.defineProperty(entity[cc.ig.varNames.entityData], cc.ig.varNames.entityPosition,
            { get() { return protectedPos; }, set() {console.log('tried to maniplulate pos'); } });

        let protectedAnim = entity[cc.ig.varNames.currentAnimation];

        Object.defineProperty(entity, cc.ig.varNames.currentAnimation, {
            get() { return protectedAnim; },
            set(data) { if (data.protected) { protectedAnim = data.protected; } },
        });

        const protectedFace = !!entity.face ? {xProtected: entity.face.x, yProtected: entity.face.y}
                                            : {xProtected: 0, yProtected: 0};
        Object.defineProperty(protectedFace, 'x', {get() { return protectedFace.xProtected; }, set() { return; } });
        Object.defineProperty(protectedFace, 'y', {get() { return protectedFace.yProtected; }, set() { return; } });
        Object.defineProperty(entity, 'face',
            { get() { return protectedFace; }, set() {console.log('tried to maniplulate face'); } });

        let protectedState = simplify.getCurrentState(entity);
        Object.defineProperty(entity, cc.ig.varNames.currentState, {
            get() { return protectedState; },
            set(data) { if (data.protected) { protectedState = data.protected; } },
        });
    }
}