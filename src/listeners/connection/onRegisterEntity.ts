import { Multiplayer } from '../../multiplayer';

export class OnRegisterEntityListener {
    constructor(
        private main: Multiplayer,
    ) { }

    public register(): void {
        this.main.connection.onRegisterEntity(this.onRegisterEntity.bind(this));
    }

    public onRegisterEntity(id: number, type: string, pos: Vec3, settings: object): void {
        if (this.main.host || this.main.entities[id]) {
            return;
        }

        const e = {id, type, pos, settings};

        if (this.main.loadingMap || !ig.ready) {
            this.main.futureEntities.push(e);
        } else {
            this.main.spawnMultiplayerEntity(e);
        }
    }
}