import { Multiplayer } from '../multiplayer';

export class SocketIoConnector implements IConnection {
    private readonly PATH = 'socket.io/socket.io.js';

    private main: Multiplayer;
    private address: string;
    private socket!: SocketIOClient.Socket;

    constructor(main: Multiplayer) {
        this.main = main;
        this.address = this.main.config.type + '://' + this.main.config.hostname + ':' + this.main.config.port + '/';
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

    public onPlayerChangeMap(callback:
        (player: string, enters: boolean, position: ig.Vector3, map: string, marker: string | null) => void): void {
        this.socket.on('onPlayerChangeMap', (data: any) => {
            callback(data.player, data.enters, data.position, data.map, data.market);
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