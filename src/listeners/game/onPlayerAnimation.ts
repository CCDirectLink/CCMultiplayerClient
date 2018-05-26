import { Multiplayer } from '../../multiplayer';
import { PlayerListener } from './playerListener';

export class OnPlayerAnimationListener {

    private lastAnim = '';
    private lastFace: ig.Vector2 = {x: 0, y: 0};

    constructor(
        private main: Multiplayer,
    ) { }

    public register(playerListener: PlayerListener): void {
        const instance = this;
        playerListener.addChild((player: ig.Player) => {
            instance.onUpdate(player);
        });
    }

    public onPlayerAnimation(player: ig.Player, animation: string, face: ig.Vector2): void {
        this.main.connection.updateAnimation(face, animation);
    }

    private onUpdate(player: ig.Player): void {
        const animation = simplify.getAnimation(player);
        const face = player.face;

        if (animation !== this.lastAnim || !this.compareFace(face, this.lastFace)) {
            this.onPlayerAnimation(player, animation, face);
            this.lastAnim = animation;
            this.copyFace(face, this.lastFace);
        }
    }

    private compareFace(left: ig.Vector2, right: ig.Vector2): boolean {
        return left.x === right.x &&
            left.y === right.y;
    }

    private copyFace(from: ig.Vector2, to: ig.Vector2): void {
        to.x = from.x;
        to.y = from.y;
    }
}