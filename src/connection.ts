interface IConnection {
    load(): Promise<void>;

    open(hostname: string, port: number, type?: string): Promise<void>;
    isOpen(): boolean;

    identify(username: string): Promise<IIdentifyResult>;
    changeMap(name: string, marker: string): void;

    updatePersition(position: ig.Vector3): void;
    updateAnimation(face: ig.Vector2, anim: string): void;
    updateTimer(timer: number): void;

    spawnEntity(type: string, x: number, y: number, z: number, settings?: object, showAppearEffects?: boolean): void;
    registerEntity(id: number, type: string, pos: ig.Vector3, settings: object): void;
    killEntity(id: number): void;

    updateEntityPosition(id: number, pos: ig.Vector3): void;
    updateEntityAnimation(id: number, face: ig.Vector2, anim: string): void;
    updateEntityHealth(id: number, health: number): void;
    updateEntityState(id: number, state: string): void;
    updateEntityTarget(id: number, target: string | number | null): void;

    onPlayerChangeMap(callback:
        (player: string, enters: boolean, position: ig.Vector3, map: string, marker: string) => void): void;
    onUpdatePostion(callback:
        (player: string, pos: ig.Vector3) => void): void;
    onUpdateAnimation(callback:
        (player: string, face: ig.Vector2, anim: string) => void): void;
    onUpdateAnimationTimer(callback:
        (player: string, timer: number) => void): void;

    onRegisterEntity(callback:
        (id: number, type: string, pos: ig.Vector3, settings: object) => void): void;
    onKillEntity(callback:
        (id: number) => void): void;
    onUpdateEntityPosition(callback:
        (id: number, pos: ig.Vector3) => void): void;
    onUpdateEntityAnimation(callback:
        (id: number, face: ig.Vector2, anim: string) => void): void;
    onUpdateEntityState(callback:
        (id: number, state: string) => void): void;
    onUpdateEntityTarget(callback:
        (id: number, target: string | number | null) => void): void;
    onUpdateEntityHealth(callback:
        (id: number, health: number) => void): void;
}