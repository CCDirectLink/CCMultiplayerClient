declare let activeMods: Mod[];
declare let inactiveMods: Mod[];

declare let getEntry: (key: string) => string;
declare const entries: Readonly<{
    AnimationState: string,
    enterPrevSubState: string,
    entityData: string,
    Timer: string,
    init: string,
    gameMainSpawnEntity: string,
}>;

interface Mod {
    readonly baseDirectory: string;
    readonly name: string;
    readonly description: string | undefined;
    readonly assets: string[];
    readonly isEnabled: boolean;

    initialize(): void;
    load(cb: (...args: any[]) => any): void;
    onload(cb: (...args: any[]) => any): void;
    getAsset(path: string): string;
    setAsset(original: string, modified: string): void;
    initializeTable(ccloader: void, cb: (...args: any[]) => any): void;
    executeTable(ccloader: void): void;
}
