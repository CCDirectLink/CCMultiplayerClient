import { IMultiplayerEntity } from '../../mpEntity';
import { Multiplayer } from '../../multiplayer';
import { EntityListener } from './entityListener';
import { PlayerListener } from './playerListener';

export class OnPlayerHealthChangeListener {
    private last = 0;

    constructor(
        private main: Multiplayer,
    ) { }

    public register(playerListener: PlayerListener): void {
        const instance = this;
        playerListener.addChild((player: ig.Player) => {
            instance.onUpdate(player);
        });
    }

    public onPlayerHealthChanged(health: number): void {
        this.main.connection.updateEntityHealth(null, health);
    }

    private onUpdate(player: ig.Player): void {
        const health = player.params.getStat("hp");

        if (health !== this.last) {
            this.onPlayerHealthChanged(health);
            this.last = health;
        }
    }
}