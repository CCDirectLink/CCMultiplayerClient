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
    interface System {
        regainFocus(): void;
        setFocusLost(): void;
        addFocusListener(listener: () => void): void;
    }

    interface Entity {

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
    interface Vector3 {
        x: number;
        y: number;
        z: number;
    }
}