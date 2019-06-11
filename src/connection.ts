import { IBallInfo } from './ballInfo';

export interface IConnection {
    load(): Promise<void>;

    open(hostname: string, port: number, type?: string): Promise<void>;
    isOpen(): boolean;

    identify(username: string): Promise<IIdentifyResult>;
    changeMap(name: string, marker: string | null): void;

    updatePersition(position: Vec3): void;
    updateAnimation(face: Vec2, anim: string): void;
    updateTimer(timer: number): void;

    spawnEntity(type: string, x: number, y: number, z: number, settings?: object, showAppearEffects?: boolean): void;
    registerEntity(id: number, type: string, pos: Vec3, settings: object): void;
    killEntity(id: number): void;

    throwBall(ballInfo: IBallInfo): void;

    updateEntityPosition(id: number, pos: Vec3): void;
    updateEntityAnimation(id: number, face: Vec2, anim: string): void;
    updateEntityHealth(id: number | null, health: number): void;
    updateEntityState(id: number, state: string): void;
    updateEntityTarget(id: number, target: string | number | null): void;

    onSetHost(callback:
        (isHost: boolean) => void): void;

    onPlayerChangeMap(callback:
        (player: string, enters: boolean, position: Vec3, map: string, marker: string | null) => void): void;
    onUpdatePostion(callback:
        (player: string, pos: Vec3) => void): void;
    onUpdateAnimation(callback:
        (player: string, face: Vec2, anim: string) => void): void;
    onUpdateAnimationTimer(callback:
        (player: string, timer: number) => void): void;

    onThrowBall(callback:
        (ballInfo: IBallInfo) => void): void;

    onRegisterEntity(callback:
        (id: number, type: string, pos: Vec3, settings: object) => void): void;
    onKillEntity(callback:
        (id: number) => void): void;
    onUpdateEntityPosition(callback:
        (id: number, pos: Vec3) => void): void;
    onUpdateEntityAnimation(callback:
        (id: number, face: Vec2, anim: string) => void): void;
    onUpdateEntityState(callback:
        (id: number, state: string) => void): void;
    onUpdateEntityTarget(callback:
        (id: number, target: string | number | null) => void): void;
    onUpdateEntityHealth(callback:
        (id: number | string, health: number) => void): void;
}