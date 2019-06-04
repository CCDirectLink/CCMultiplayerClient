export interface IMultiplayerEntity extends ig.Entity {
    multiplayerId: number;
    target: ig.Entity | null;
    face: ig.Vector2;
    lastTarget: ig.Entity | null;
    lastPosition: ig.Vector3 | null;
    currentState: any;
    currentAnim: string;
    proxies: sc.CombatProxyEntity[];
    params: sc.CombatParams;
}