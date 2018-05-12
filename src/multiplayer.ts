import { MultiplayerConfig } from './config';
import { OnMapEnterListener } from './listeners/game/onMapEnter';

export class Multiplayer {
    public config: MultiplayerConfig;
    public name?: string;
    public host = false;
    public loadingMap = false;

    private connection!: IConnection;
    private startGame!: () => void;
    private connecting = false;

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

        mapEnter.register();
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