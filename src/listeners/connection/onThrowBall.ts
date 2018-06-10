import { IBallInfo } from '../../ballInfo';
import { Multiplayer } from '../../multiplayer';

export class OnThrownBallListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onThrowBall(this.onThrowBall.bind(this));
    }

    public onThrowBall(ballInfo: IBallInfo): void {
        if (ballInfo.combatant === null) {
            return;
        }

        const entity = this.resolveEntity(ballInfo.combatant);
        if (!entity) {
            return;
        }

        const proxy = this.resolveProxy(entity, ballInfo.ballInfo)
                        || this.resolveProxy(cc.ig.playerInstance(), ballInfo.ballInfo);
        if (!proxy) {
            return;
        }

        const actonStep = new cc.ig.combatActions.SHOOT_PROXY({ proxy: proxy.data, dir: ballInfo.dir });
        simplify.runAction(actonStep, entity);
    }

    private resolveEntity(combatant: number | string | undefined): ig.Entity | undefined {
        if (combatant === undefined) {
            return cc.ig.playerInstance();
        }

        if (typeof combatant === 'string') {
            const player = this.main.players[combatant];
            if (!player) {
                return;
            }

            return player.entity;
        }

        if (typeof combatant === 'number') {
            return this.main.entities[combatant];
        }

        throw new Error('Malformed data in ballInfo.combatant received!');
    }

    private resolveProxy(entity: ig.Entity, name: string): ig.Proxy | undefined {
        return simplify.getEntityProxies(entity)[name];
    }
}