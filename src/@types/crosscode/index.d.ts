declare const ig: ig;
declare const sc: sc;

interface ig {
    ready: boolean;
    system: ig.System;
}

interface sc {
}

declare namespace ig {
    // Please note that some of these are not reflected in the original source. They are just here for convinience.
    interface GameMain {
        [key: string]: any;
        teleport(map: string, teleportPosition: ig.TeleportPosition, hint?: string): void;
        getLoadingState(): string;
        spawnEntity(type: string | ig.EntityType, x: number, y: number, z: number, settings: any, showAppearEffects?: boolean): ig.Entity;
    }
    interface System {
        regainFocus(): void;
        setFocusLost(): void;
        addFocusListener(listener: () => void): void;
    }

    interface EntityType {
        
    }

    interface Entity {
        [key: string]: any;
        prototype: Entity;

        type: string;
        settings: any;
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
    }
    interface Enemy extends Entity {

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


    interface ActionStep {

    }
    interface Proxy {

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
    interface TargetableEntity extends Entity {

    }
    interface Font {
        (path: string, charHeigt: number, firstChar: number): Font;
    }
    interface Vector2 {
        x: number;
        y: number;
    }
    interface Vector3 {
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
}

declare namespace sc {
    interface EnemyType {
        load(callback?: () => void): void;
    }
}