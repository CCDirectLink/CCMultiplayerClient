///<reference path="connectors/SocketIOConnector.ts"/>

class MultiplayerConfig {
    public modPath: string;
    public hostname = 'localhost';
    public port = 1423;
    public type = 'http';

    private readonly CONNECTORS: {[type: string]: any} = {
        http: SocketIoConnector,
        https: SocketIoConnector,
    };

    private configPath = 'config/config.json';

    constructor(configPath?: string) {
        this.modPath = simplify.getMod('multiplayer').getBaseDirectory();

        if (configPath) {
            this.configPath = configPath;
        }
    }

    public async load(): Promise<void> {
        return new Promise<void>((resolve, rejected) => {
            simplify.resources.loadJSON(this.configPath, (data: IConfigFile) => {
                this.hostname = data.server.hostname;
                this.port = data.server.port;
                this.type = data.server.type;

                resolve();
            });
        });
    }

    public getConnection(main: Multiplayer): IConnection {
        for (const type in this.CONNECTORS) {
            if (type === this.type) {
                return new this.CONNECTORS[type](main);
            }
        }
        throw new Error('No connector found');
    }
}