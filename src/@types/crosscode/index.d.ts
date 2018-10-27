declare const ig: ig;
declare const sc: sc;

declare let LOAD_LEVEL_ON_GAME_START: string;

interface ig {
    ready: boolean;
    system: ig.System;
    platform: number;
}

interface sc {
    version: sc.Version;
}

declare namespace ig {
    // Please note that some of these are not reflected in the original source. They are just here for convinience.
    interface GameMain {
        [key: string]: any;

        entities: ig.Entity[];

        teleport(map: string, teleportPosition: ig.TeleportPosition, hint?: string): void;
        getLoadingState(): string;
        spawnEntity(type: string | ig.EntityType, x: number, y: number, z: number, settings: any, showAppearEffects?: boolean): ig.Entity;
        getEntityPosition(entity: ig.Entity): ig.Vector3;
    }
    interface System {
        [key: string]: any;
        regainFocus(): void;
        setFocusLost(): void;
        addFocusListener(listener: () => void): void;
    }

    interface Bgm {
        clear(type: string): void;
    }

    interface Interact {
        removeEntry(entry: any): void;
        addEntry(entry: any): void;
    }

    interface EntityType {

    }

    interface Entity {
        [key: string]: any;
        prototype: Entity;

        type: string;
        settings: any;
        face: ig.Vector2;
    }
    interface EntityList {
        [key: string]: ig.EntityType | undefined;

        Ball: ig.EntityType;
        Player: ig.EntityType;
        Crosshair: ig.EntityType;
        CrosshairDot: ig.EntityType;
        OffsetParticle: ig.EntityType;
        RhombusParticle: ig.EntityType;
        HiddenSkyBlock: ig.EntityType;
        Enemy: ig.EntityType;
        Effect: ig.EntityType;
        Particle: ig.EntityType;
        CopyParticle: ig.EntityType;
    }
    interface TargetableEntity extends Entity {

    }
    interface Enemy extends TargetableEntity {

    }
    interface Player extends TargetableEntity {

    }

    interface Event {
        start(...args: any[]): any;
    }
    interface EventList {
        SWITCH_PLAYER_CONFIG: Events.SWITCH_PLAYER_CONFIG;
        CLEAR_ANIMATION: Events.CLEAR_ANIMATION;
        DO_ACTION: Events.DO_ACTION;
        SET_ENEMY_STATE: Events.SET_ENEMY_STATE;
    }
    interface CombatActions {
        SHOOT_PROXY: Actions.SHOOT_PROXY;
    }

    interface ActionStep {

    }
    interface Proxy {
        data: ProxyData;
    }
    interface ProxyData {

    }
    interface Gui {
        [key: string]: any;

        menues: any[];

        renameTextButton: string;
        callbackFunction: string;
    }
    interface Params {

    }
    interface BaseParams {

    }
    type Font = (path: string, charHeigt: number, firstChar: number) => Font;
    interface Vector2 {
        [key: string]: number | undefined;

        x: number;
        y: number;
    }
    interface Vector3 {
        [key: string]: number | undefined;

        x: number;
        y: number;
        z: number;
    }

    interface Map {
        entities: Entity[];
    }

    interface TeleportPosition {
        createFromJson(json: any): ig.TeleportPosition;
    }

    namespace Events {
        interface SWITCH_PLAYER_CONFIG extends Event {
            new (settings: {name: string}): SWITCH_PLAYER_CONFIG;
        }
        interface CLEAR_ANIMATION extends Event {
            new (settings: {entity: ig.Entity}): CLEAR_ANIMATION;
        }
        interface DO_ACTION extends Event {
            new (settings: {
                entity: ig.Entity,
                keepState: boolean,
                action: any[],
            }): DO_ACTION;
        }
        interface SET_ENEMY_STATE extends Event {
            new (settings: {enemy: ig.Enemy, enemyState: string}): SET_ENEMY_STATE;
        }
    }
    namespace Actions {
        interface SHOOT_PROXY extends ActionStep {
            new (settings: {proxy: ProxyData, offset?: number, align?: string, dir: Vector2, posType?: string}): SHOOT_PROXY;
        }
    }
}

declare namespace sc {
	interface Version {
		toString(): string;
	}

 interface EnemyType {
        load(callback?: () => void): void;
    }

 interface SaveSlotButton {
        [key: string]: any;

        new (save?: any, index?: number): SaveSlotButton;
    }
 interface ButtonListBox {
        [key: string]: any;

        clear(): void;
    }
}