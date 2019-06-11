export interface IMultiplayerEntity extends ig.ENTITY.Enemy {
    multiplayerId: number;
    target: ig.Entity | null;
    lastTarget: ig.Entity | null;
    lastPosition: Vec3 | null;
    proxies: {[name: string]: sc.ProxySpawnerBase} | null;
}