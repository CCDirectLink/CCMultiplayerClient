declare const ig: ig;
declare const sc: sc;

interface ig {
    ready: boolean;
}

interface sc {
}

declare namespace ig {
    // Please note that some of these are not reflected in the original source. They are just here for convinience.

    interface Entity {

    }
    interface ActionStep {

    }
    interface Proxy {

    }
    interface Gui {

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