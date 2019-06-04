declare namespace ig {
    namespace TeleportPosition {
        let createFromJson: (a: any) => void;
    }

    class Vector3 {
        x: number; 
        y: number;
        z: number;
    }
    class Vector2 {
        x: number;
        y: number;
        [key: string]: any;
    }
    class Player extends ig.Entity { 
        proxies: sc.CombatProxyEntity[];
        params: sc.CombatParams;
    }

    interface Map {
        entities: ig.Entity[];
    }

    interface Entity {
        prototype: {[key: string]: any};
        type: string;
        multiplayerId?: number;
        face: Vector2;
        currentAnim: string;
    }

    interface Gui {
        menues: ig.GuiElementBase[];
    }
    interface GuiElementBase {
        children: ig.GuiElementBase[];
        gui: GuiElementBase;
        buttons: sc.ButtonGui[];
        buttonInteract: ig.ButtonInteractEntry;
    }

    let ready: boolean;
    let game: sc.CrossCode;
    let system: ig.System;
    let platform: number;
    let gui: ig.Gui;
    let interact: ig.InteractManager;
    let bgm: ig.Bgm;
}

declare namespace sc {
    let version: sc.VerionChangeLog;
    let model: sc.GameModel;
}