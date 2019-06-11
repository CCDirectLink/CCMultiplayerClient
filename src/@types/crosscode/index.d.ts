declare interface Vec2 {
    x: number;
    y: number;
}

declare interface Vec3 {
    x: number;
    y: number;
    z: number;
}

declare interface SaveData {

}

declare interface MapData {
    entities: Array<{
        type: string;
        settings: any;
    }>;
}

declare namespace ActionData {
    interface SHOW_ANIMATION {
        type: 'SHOW_ANIMATION';
        anim: string;
        followUp?: string;
        wait?: boolean;
        viaWalkConfig?: boolean;
    }
    interface WAIT {
        type: 'WAIT';
        time: number;
        assistSlow?: boolean;
    }
}
declare type ActionData = {type: string} | ActionData.SHOW_ANIMATION | ActionData.WAIT;

declare namespace ProxyData {

}
declare interface ProxyData {type: string; }

declare namespace sc {
    class CrossCode extends ig.Game {
        public start(mode?: sc.START_MODE, transition?: number): void;
        public update(): void;
    }

    class GameModel extends ig.GameAddon {
        public enterPrevSubState(): void;
    }

    class EnemyType extends ig.JsonLoadable {
        constructor(name: string);
    }

    class ButtonGui extends ig.FocusGui {
        public onButtonPress: () => void;

        public setText(text: string, center?: boolean): void;
    }

    class SaveSlotButton extends ig.FocusGui {
        public autoSlotMiss: sc.TextGui;

        constructor(save?: SaveData, slot?: number);
    }

    class TitleScreenGui extends ig.GuiElementBase {

    }

    class TextGui extends ig.GuiElementBase {
        public readonly text: string;

        public setText(text: string): void;
    }

    class TitleScreenButtonGui extends ig.GuiElementBase {
        public buttons: sc.ButtonGui[];
    }

    class ButtonListBox extends sc.ScrollPane {
        public buttonGroup: sc.ButtonGroup;

        public activate(buttonInteract?: ig.ButtonInteractEntry): void;
        public addButton(
            button: ig.GuiElementBase | ig.FocusGui,
            canFocus?: boolean,
            xOffset?: number,
            yOffset?: number,
            ): void;
        public clear(skipFirst?: boolean): void;
    }

    class ButtonGroup extends ig.Class {
        public elements: ig.FocusGui[][];
        public pressCallbacks: Array<(element?: ig.FocusGui, mouseOver?: boolean) => void>;
        public selectionCallbacks: Array<(element?: ig.FocusGui) => void>;

        public addPressCallback(cb: (element?: ig.FocusGui, mouseOver?: boolean) => void): void;
        public addSelectionCallback(cb: (element?: ig.FocusGui) => void): void;
    }

    class ScrollPane extends ig.GuiElementBase {

    }

    class CombatParams extends ig.Class {
        public currentHp: number;

        public getStat(name: string): number;
    }

    class PlayerBaseEntity extends ig.ENTITY.Combatant {

    }

    class BasicCombatant extends ig.ActorEntity {

    }

    class ProxySpawnerBase extends ig.Class {
        public data: object;

        public spawn(): void;
    }

    class VerionChangeLog extends ig.SingleLoadable {
        public toString(): string;
    }

    enum START_MODE {
        STORY = 0,
        GRINDING = 1,
        PUZZLE = 2,
    }

    let model: sc.GameModel;
    let version: sc.VerionChangeLog;
}

declare namespace ig {
    class Class {
        public inject(injected: object): Class;
        public extend(extended: object): Class;
    }

    class Game extends ig.Class {
        public currentLoadingResource: string;
        public entities: ig.Entity[];
        public playerEntity: ig.ENTITY.Player;

        public spawnEntity<T extends ig.Entity>(
            entity: string | (new(...args: any[]) => T),
            x: number,
            y: number,
            z: number,
            showAppearEffects?: object,
            hidden?: boolean,
            ): T;
        public teleport(mapName: string, marker?: ig.TeleportPosition, loadHint?: string, clearCache?: boolean): void;
        public loadLevel(data: MapData, cleanCache?: boolean): void;
    }

    class TeleportPosition extends ig.Class {

        public static createFromJson(settings: {
            marker: string;

            pos?: Vec3;
            size?: Vec2;
            face?: Vec2;

            level?: number;
            baseZPos?: number;
        } | {
            pos: Vec3;
            size: Vec2;
            face: Vec2;

            marker?: string;

            level?: number;
            baseZPos?: number;
        }): ig.TeleportPosition;
        public marker: string | null;

        constructor(marker?: string);
    }

    class GameAddon extends ig.Class {

    }

    class AnimationState extends ig.Class {
        public timer: number;
    }

    class Entity extends ig.Class {
        // prototype: typeof ig.Entity;

        public settings: object;
        public coll: CollEntry;

        public kill(unusedLevelChange?: boolean): void;
    }

    class AnimatedEntity extends ig.Entity {
        public animState: ig.AnimationState;
        public currentAnim: string;
    }

    class ActorEntity extends ig.AnimatedEntity {
        public face: Vec2;
    }

    namespace ENTITY {
        class Combatant extends sc.BasicCombatant {
            public params: sc.CombatParams;
        }
        class Enemy extends ig.ENTITY.Combatant {
            public currentState: string;
        }
        class Player extends sc.PlayerBaseEntity {
            public proxies: {[name: string]: sc.ProxySpawnerBase} | null;
        }
        class Crosshair extends ig.Entity {

        }
        class CrosshairDot extends ig.AnimatedEntity {

        }
        class OffsetParticle extends ig.ENTITY.Particle {

        }
        class RhombusParticle extends ig.ENTITY.Particle {

        }
        class HiddenSkyBlock extends ig.Entity {

        }
        class Effect extends ig.Entity {

        }
        class Particle extends ig.AnimatedEntity {

        }
        class CopyParticle extends ig.Entity {

        }
        class Ball extends ig.ENTITY.Projectile {

        }
        class Projectile extends ig.AnimatedEntity {

        }
    }

    class CollEntry extends ig.Class {
        public pos: Vec3;
    }

    class InteractEntry extends ig.Class {
        public isActive(): boolean;
        public onConnect(): void;
        public onDisconnect(): void;
        public update(): void;
    }

    class ButtonInteractEntry extends ig.InteractEntry {

    }

    class InteractManager extends ig.GameAddon {
        public blockTimer: number;
        public entries: ig.InteractEntry[];

        public deferredUpdateOrder: 0;

        public addEntry(entry: ig.InteractEntry): void;
        public removeEntry(entry: ig.InteractEntry): void;
        public setBlockDelay(delay?: number): void;
        public isBlocked(): boolean;
        public onDeferredUpdate(): void;
    }

    class Bgm extends ig.GameAddon {
        public clear(mode?: ig.BGM_SWITCH_MODE): void;
    }

    class GuiHook extends ig.Class {
        public gui: ig.GuiElementBase;
        public children: ig.GuiHook[];
    }

    class GuiElementBase extends ig.Class {
        public hook: ig.GuiHook;
    }

    class FocusGui extends ig.GuiElementBase {

    }

    class Gui extends ig.GameAddon {
        public guiHooks: ig.GuiHook[];
    }

    class System extends ig.Class {
        public focusLost: boolean;

        public hasFocusLost(): boolean;
        public setFocusLost(): void;
        public regainFocus(): void;
        public addFocusListener(listener: (focusLost: boolean) => void): void;
    }

    class SaveSlot extends ig.Class {
        public data: SaveData;
    }

    class Cacheable extends ig.Class {

    }

    class Loadable extends ig.Cacheable {
        public load(cb?: () => void): void;
    }

    class JsonLoadable extends Loadable {

    }

    class SingleLoadable extends ig.Class {

    }

    class EventCall extends ig.Class {

    }

    class StepBase extends ig.Class {

    }

    class EventStepBase extends ig.StepBase {} // TODO

    namespace EVENT_STEP {
        type EventEntitySelect = {player: true} | {self: true} | {name: string} | {party: string} | {varName: string};
        class SET_ENEMY_STATE extends ig.EventStepBase {
            constructor(settings: {
                enemy: ig.ENTITY.Enemy | EventEntitySelect,
                enemyState: string,
            });
            public start(unused?: undefined, call?: ig.EventCall): void;
        }
        class DO_ACTION extends ig.EventStepBase {
            constructor(settings: {
                entity: ig.Entity | EventEntitySelect,
                action: ActionData[],
                repeating?: boolean,
                wait?: boolean,
                keepState?: boolean,
                immediately?: boolean,
            })
            public start(self: ig.EVENT_STEP.DO_ACTION, call?: ig.EventCall): void;
            public run(self?: ig.EVENT_STEP.DO_ACTION): boolean;
        }
        class CLEAR_ANIMATION extends ig.EventStepBase {
            constructor(settings: {
                entity: ig.Entity | EventEntitySelect,
            });
            public start(unused?: undefined, self?: ig.EventCall): void;
        }
    }

    class ActionStepBase extends ig.StepBase {} // TODO

    namespace ACTION_STEP {
        class SHOOT_PROXY extends ig.ActionStepBase {
            constructor(settings: {
                proxy: ProxyData | sc.ProxySpawnerBase,
                offset?: Vec3,
                align?: Vec2,
                dir?: Vec2,
                animAtTarget?: boolean,
                posType?: 'SELF' | 'TARGET' | 'COLLAB_CENTER';
            });
            public run(entity: sc.BasicCombatant): true;
        }
    }

    enum PLATFORM_TYPES {
        UNKNOWN = 0,
        DESKTOP = 1,
        BROWSER = 2,
        MOBILE = 3,
        WIIU = 4,
    }

    let BGM_SWITCH_MODE: {
        IMMEDIATELY: {
            fadeOut: 0,
            fadeIn: 0,
        },
        FAST_OUT: {
            fadeOut: 0.5,
            fadeIn: 0,
        },
        MEDIUM_OUT: {
            fadeOut: 1,
            fadeIn: 0,
        },
        SLOW_OUT: {
            fadeOut: 2,
            fadeIn: 0,
        },
        VERY_SLOW_OUT: {
            fadeOut: 5,
            fadeIn: 0,
        },
        FAST: {
            fadeOut: 0.5,
            fadeIn: 0.5,
        },
        MEDIUM: {
            fadeOut: 1,
            fadeIn: 1,
        },
        SLOW: {
            fadeOut: 2,
            fadeIn: 2,
        },
        VERY_SLOW: {
            fadeOut: 5,
            fadeIn: 5,
        },
    };

    type BGM_SWITCH_MODE =
        'IMMEDIATELY'
        | 'FAST_OUT'
        | 'MEDIUM_OUT'
        | 'SLOW_OUT'
        | 'VERY_SLOW_OUT'
        | 'FAST'
        | 'MEDIUM'
        | 'SLOW'
        | 'VERY_SLOW';

    let bgm: ig.Bgm;
    let game: sc.CrossCode;
    let gui: ig.Gui;
    let interact: ig.InteractManager;
    let ready: boolean;
    let system: ig.System;
    let platform: ig.PLATFORM_TYPES;
}

declare let LOAD_LEVEL_ON_GAME_START: string | undefined;