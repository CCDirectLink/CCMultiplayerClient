import { Multiplayer } from '../../multiplayer';

export class OnUpdateEntityAnimationListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onUpdateEntityAnimation(this.onUpdateEntityAnimation);
    }

    public onUpdateEntityAnimation(id: number, face: ig.Vector2, anim: string): void {
        // TODO
    }
}