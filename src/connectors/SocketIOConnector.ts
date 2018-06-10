import { IBallInfo } from '../ballInfo';
import { IConnection } from '../connection';
import { Multiplayer } from '../multiplayer';
import { IServer } from '../server';

export class SocketIoConnector implements IConnection {
    private readonly PATH = 'socket.io/socket.io.js';

    private main: Multiplayer;
    private address: string;
    private socket!: SocketIOClient.Socket;

    private username?: string;
    private map?: string;
    private marker?: string | null;
    private setHost?: (isHost: boolean) => void;

    constructor(main: Multiplayer, server: IServer) {
        this.main = main;
        this.address = server.type + '://' + server.hostname + ':' + server.port + '/';
    }

    public async load(): Promise<void> {
        await new Promise((resolve, reject) => {
            simplify.loadScript(this.address + this.PATH, () => {
                resolve();
            });
        });
    }

    public async open(hostname: string, port: number, type?: string): Promise<void> {
        this.socket = io(type + '://' + hostname + ':' + port + '/');

        this.socket.on('reconnect', async () => {
            if (this.username && this.setHost) {
                const result = await this.identify(this.username);
                if (result.success) {
                    this.setHost(result.host);

                    if (this.map && this.marker) {
                        this.changeMap(this.map, this.marker);
                    }
                }
            }
        });

        await new Promise((resolve, reject) => {
            if (!this.socket) {
                return reject();
            }

            if (this.socket.connected) {
                return resolve();
            }

            this.socket.once('connect', () => {
                resolve();
            });

            this.socket.once('connect_error', () => {
                reject();
            });
        });
    }

    public isOpen(): boolean {
        if (!this.socket) {
            return false;
        }

        return this.socket.connected;
    }

    public identify(username: string): Promise<IIdentifyResult> {
        return new Promise<IIdentifyResult>((resolve, reject) => {
            this.socket.once('identified', (data: {success: boolean, isHost: boolean}) => {
                this.username = username;

                if (data.success) {
                    resolve({success: data.success, host: data.isHost});
                } else {
                    reject(data);
                }
            });

            this.socket.emit('identify', username);
        });
    }
    public changeMap(name: string, marker: string | null): void {
        this.map = name;
        this.marker = marker;
        this.socket.emit('changeMap', {name, marker});
    }
    public updatePersition(position: ig.Vector3): void {
        this.socket.emit('updatePosition', position);
    }
    public updateAnimation(face: ig.Vector2, anim: string): void {
        this.socket.emit('updateAnimation', {face, anim});
    }
    public updateTimer(timer: number): void {
        this.socket.emit('updateTimer', timer);
    }

    public spawnEntity(type: string, x: number, y: number, z: number, settings?: object, showEffects?: boolean): void {
        this.socket.emit('spawnEntity', {type, x, y, z, settings, showAppearEffects: showEffects});
    }
    public registerEntity(id: number, type: string, pos: ig.Vector3, settings: object): void {
        this.socket.emit('registerEntity', {id, type, pos, settings});
    }
    public killEntity(id: number): void {
        this.socket.emit('killEntity', {id});
    }

    public throwBall(ballInfo: IBallInfo): void {
        this.socket.emit('throwBall', ballInfo);
    }

    public updateEntityPosition(id: number, pos: ig.Vector3): void {
        this.socket.emit('updateEntityPosition', {id, pos});
    }
    public updateEntityAnimation(id: number, face: ig.Vector2, anim: string): void {
        this.socket.emit('updateEntityAnimation', {id, face, anim});
    }
    public updateEntityHealth(id: number, health: number): void {
        this.socket.emit('updateEntityHealth', {id, hp: health});
    }
    public updateEntityState(id: number, state: string): void {
        this.socket.emit('updateEntityState', {id, state});
    }
    public updateEntityTarget(id: number, target: string | number | null): void {
        this.socket.emit('updateEntityTarget', {id, target});
    }

    public onSetHost(callback: (isHost: boolean) => void): void {
        this.setHost = callback;
        this.socket.on('setHost', (isHost: boolean) => {
            callback(isHost);
        });
    }

    public onPlayerChangeMap(callback:
        (player: string, enters: boolean, position: ig.Vector3, map: string, marker: string | null) => void): void {
        this.socket.on('onPlayerChangeMap', (data: any) => {
            callback(data.player, data.enters, data.position, data.map, data.marker);
        });
    }
    public onUpdatePostion(callback: (player: string, pos: ig.Vector3) => void): void {
        this.socket.on('updatePosition', (data: any) => {
            callback(data.player, data.pos);
        });
    }
    public onUpdateAnimation(callback: (player: string, face: ig.Vector2, anim: string) => void): void {
        this.socket.on('updateAnimation', (data: any) => {
            callback(data.player, data.face, data.anim);
        });
    }
    public onUpdateAnimationTimer(callback: (player: string, timer: number) => void): void {
        this.socket.on('updateAnimationTimer', (data: any) => {
            callback(data.player, data.timer);
        });
    }
    public onThrowBall(callback: (ballInfo: IBallInfo) => void): void {
        this.socket.on('throwBall', (data: IBallInfo) => {
            callback(data);
        });
    }
    public onRegisterEntity(callback: (id: number, type: string, pos: ig.Vector3, settings: object) => void): void {
        this.socket.on('registerEntity', (data: any) => {
            callback(data.id, data.type, data.pos, data.settings);
        });
    }
    public onKillEntity(callback: (id: number) => void): void {
        this.socket.on('killEntity', (data: any) => {
            callback(data.id);
        });
    }
    public onUpdateEntityPosition(callback: (id: number, pos: ig.Vector3) => void): void {
        this.socket.on('updateEntityPosition', (data: any) => {
            callback(data.id, data.pos);
        });
    }
    public onUpdateEntityAnimation(callback: (id: number, face: ig.Vector2, anim: string) => void): void {
        this.socket.on('updateEntityAnimation', (data: any) => {
            callback(data.id, data.face, data.anim);
        });
    }
    public onUpdateEntityState(callback: (id: number, state: string) => void): void {
        this.socket.on('updateEntityState', (data: any) => {
            callback(data.id, data.state);
        });
    }
    public onUpdateEntityTarget(callback: (id: number, target: string | number | null) => void): void {
        this.socket.on('updateEntityTarget', (data: any) => {
            callback(data.id, data.target);
        });
    }
    public onUpdateEntityHealth(callback: (id: number, health: number) => void): void {
        this.socket.on('updateEntityHealth', (data: any) => {
            callback(data.id, data.hp);
        });
    }
}