import { MultiplayerConfig } from './config';
import { IEntityDefinition } from './entityDefinition';
import { OnKillEntityListener } from './listeners/connection/onKillEntity';
import { OnPlayerChangeMapListener } from './listeners/connection/onPlayerChangeMap';
import { OnRegisterEntityListener } from './listeners/connection/onRegisterEntity';
import { OnUpdateAnimationListener } from './listeners/connection/onUpdateAnimation';
import { OnUpdateAnimationTimerListener } from './listeners/connection/onUpdateAnimationTimer';
import { OnUpdateEntityAnimationListener } from './listeners/connection/onUpdateEntityAnimation';
import { OnUpdateEntityHealthListener } from './listeners/connection/onUpdateEntityHealth';
import { OnUpdateEntityPositionListener } from './listeners/connection/onUpdateEntityPosition';
import { OnUpdateEntityStateListener } from './listeners/connection/onUpdateEntityState';
import { OnUpdateEntityTargetListener } from './listeners/connection/onUpdateEntityTarget';
import { OnUpdatePositionListener } from './listeners/connection/onUpdatePosition';
import { OnEntitySpawnListener } from './listeners/game/onEntitySpawn';
import { OnEntityKilledListener } from './listeners/game/onKill';
import { OnMapEnterListener } from './listeners/game/onMapEnter';
import { OnTeleportListener } from './listeners/game/onTeleport';
import { IMultiplayerEntity } from './mpEntity';
import { IPlayer } from './player';

export class Multiplayer {
    public futureEntities: IEntityDefinition[] = [];
    public players: {[name: string]: IPlayer | undefined} = {};
    public config: MultiplayerConfig;
    public connection!: IConnection;
    public name?: string;
    public host = false;
    public loadingMap = false;

    public entities: IMultiplayerEntity[] = [];

    private startGame!: () => void;
    private connecting = false;
    private nextEID = 1;
    private entitySpawnListener!: OnEntitySpawnListener;

    constructor(config?: MultiplayerConfig) {
        if (config) {
            this.config = config;
        } else {
            this.config = new MultiplayerConfig();
        }
    }

    public async load(): Promise<void> {
        await this.config.load();
        this.connection = this.config.getConnection(this);
        await this.connection.load();
    }

    public initialize(): void {
        this.initializeGUI();
    }

    public async connect(): Promise<void> {
        if (this.connecting) {
            throw new Error('[multiplayer] Already connecting');
        }

        this.connecting = true;

        if (!this.connection.isOpen()) {
            console.log('[multiplayer] Connecting..');
            await this.connection.open(this.config.hostname, this.config.port, this.config.type);
        }

        this.connecting = false;

        if (!this.connection.isOpen()) {
            throw new Error('[multiplyer] The connector lied about beeing connected :(');
        }

        const username = await this.showLogin();
        console.log('[multiplayer] Logging in as ' + username);
        const result = await this.connection.identify(username);

        if (!result.success) {
            throw new Error('[multiplayer] Could not login! Is the user already logged in?');
        }

        if (result.host) {
            console.log('[multiplayer] This user is the host');
            this.host = true;
        }
    }

    public registerEntity(entity: ig.Entity): number {
        entity.multiplayerId = this.nextEID;
        const converted = this.entities[this.nextEID] = entity as IMultiplayerEntity;
        this.nextEID++;

        return converted.multiplayerId;
    }

    public spawnMultiplayerEntity(e: IEntityDefinition): any {
        new cc.sc.EnemyType(e.settings.enemyInfo.type).load(() => {
            const entity = this.entitySpawnListener.onEntitySpawned(e.type, e.pos.x, e.pos.y, e.pos.z, e.settings);

            this.entities[e.id] = entity as IMultiplayerEntity;
            entity.multiplayerId = e.id;

            const protectedPos = {xProtected: e.pos.x, yProtected: e.pos.y, zProtected: e.pos.z};
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
        });
    }

    public copyPosition(from: ig.Vector3, to: ig.Vector3) {
        to.x = from.x;
        to.y = from.y;
        to.z = from.z;
    }
    public copyEntityPosition(from: ig.Vector3, to: any) {
        if (!to.xProtected) {
            return this.copyPosition(from, to);
        }

        to.xProtected = from.x;
        to.yProtected = from.y;
        to.zProtected = from.z;
    }

    private initializeGUI(): void {
        const buttons = simplify.getInnerGui(cc.ig.GUI.menues[15].children[2])[cc.ig.varNames.titleScreenButtons];
        // buttons.splice(2, 2);
        // buttons[2].a.g.y = 80;
        buttons[2][cc.ig.GUI.renameTextButton]('Connect', true);
        this.startGame = buttons[2][cc.ig.GUI.callbackFunction];
        buttons[2][cc.ig.GUI.callbackFunction] = this.startConnect.bind(this);
    }

    private initializeListeners(): void {
        const mapEnter = new OnMapEnterListener(this);
        const teleport = new OnTeleportListener(this);
        const killed = new OnEntityKilledListener(this);
        const spawn = new OnEntitySpawnListener(this);

        mapEnter.register();
        teleport.register();
        killed.register();
        spawn.register();

        this.entitySpawnListener = spawn;

        const playerChange = new OnPlayerChangeMapListener(this);
        const updatePosition = new OnUpdatePositionListener(this);
        const updateAnim = new OnUpdateAnimationListener(this);
        const updateAnimTimer = new OnUpdateAnimationTimerListener(this);
        const registerEntity = new OnRegisterEntityListener(this);
        const killEntity = new OnKillEntityListener(this);
        const entityPosition = new OnUpdateEntityPositionListener(this);
        const entityAnim = new OnUpdateEntityAnimationListener(this);
        const entityState = new OnUpdateEntityStateListener(this);
        const entityTarget = new OnUpdateEntityTargetListener(this);
        const entityHealth = new OnUpdateEntityHealthListener(this);

        playerChange.register();
        updatePosition.register();
        updateAnim.register();
        updateAnimTimer.register();
        registerEntity.register();
        killEntity.register();
        entityPosition.register();
        entityAnim.register();
        entityState.register();
        entityTarget.register();
        entityHealth.register();
    }

    private startConnect(): void {
        this.connect()
            .then(() => {
                console.log('[multiplayer] Connected');
                this.startGame();
            })
            .catch((err: any) => {
                console.error(err);
                this.connecting = false;
            });
    }

    private showLogin(): Promise<string> {
        return new Promise((resolve, reject) => {
            const box = $('<div class="gameOverlayBox gamecodeMessage" ><h3>Multiplayer Login</h3></div>');
            const form = $('<form><input type="text" name="username" placeholder="Username" /> \
                            <input type="submit" name="send" value="Submit" /><form>');
            box.append(form);

            form.submit(() => {
                const userInput = form[0].firstElementChild as HTMLInputElement;

                const name = userInput.value;
                if (!name || name === '') {
                    reject(name);
                }

                ig.system.regainFocus();
                resolve(name);

                return false;
            });

            $(document.body).append(box);
            box.addClass('shown');
            ig.system.setFocusLost();

            ig.system.addFocusListener(() => {
                box.remove();
            });

            form.find('input[type=text]').focus();
        });
    }
}