import { IConfigFile } from './configFile';
import { IConnection } from './connection';
import { SocketIoConnector } from './connectors/SocketIOConnector';
import { Multiplayer } from './multiplayer';
import { IServer } from './server';

export class MultiplayerConfig {
    public modPath: string;
    public servers: IServer[] = [];

    private readonly CONNECTORS: {[type: string]: any} = {
        http: SocketIoConnector,
        https: SocketIoConnector,
    };

    private configPath = 'config/config.json';

    constructor(configPath?: string) {
        this.modPath = simplify.getMod('multiplayer').baseDirectory;
        this.configPath = this.modPath + (configPath || this.configPath);
    }

    public async load(): Promise<void> {
        await new Promise<void>((resolve, rejected) => {
            simplify.resources.loadJSON(this.configPath, (data: IConfigFile) => {
                this.servers = data.servers;

                resolve();
            });
        });
    }

    public getConnection(main: Multiplayer, index: number): IConnection {
        const server = this.servers[index];
        for (const type in this.CONNECTORS) {
            if (type === server.type) {
                return new this.CONNECTORS[type](main, server);
            }
        }
        throw new Error('No connector found');
    }
}