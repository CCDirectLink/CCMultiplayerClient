import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityAnimationListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateEntityAnimation(this.onUpdateEntityAnimation.bind(this));
    }

    public onUpdateEntityAnimation(id: number, face: Vec2, anim: string): void {
        if (this.main.host || !this.main.entities[id]) {
            return;
        }

        this.setEntityAnimation({face, anim}, this.main.entities[id]);
    }

    private setEntityAnimation(from: {face: Vec2, anim: string}, to: ig.ActorEntity) {
        (to.face as any).xProtected = from.face.x;
        (to.face as any).yProtected = from.face.y;
        to.currentAnim = {protected: from.anim} as unknown as string;
    }
}