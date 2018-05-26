declare let simplify : simplify;

interface simplify {
    font: simplify.font;
    options: simplify.options;
    resources: simplify.resources;

    registerUpdate(func: Function): void;
    fireUpdate(): void;

    loadScript(url: string, callback: (this: HTMLElement, ev: Event) => any): void;

    getActiveMapName(): string;
    
    getAnimation(entity: ig.Entity): string;
    setAnimation(entity: ig.Entity, value: string | object): void;

    runAction(action: ig.ActionStep, ...args: any[]): any;
    getEntityProxies(entity: ig.Entity): ig.Proxy[];
    killEntity(entity: ig.Entity, levelChange?: any): void;
    setEntityTarget(entity: ig.Entity, target: ig.TargetableEntity | null): void;
    getProxyAction(action: any): any;
    getNextProxyAction(action: any): any;

    getInnerGui(gui: ig.Gui): ig.Gui;

    jumpHigh(): void;

    getParams(entity: ig.Entity): ig.Params;
    getParamsStat(entity: ig.Entity, stat: string): any;
    getBaseParams(entity: ig.Entity): ig.BaseParams;
    getBaseParam(entity: ig.Entity, stat: string): any;
    setBaseParams(entity: ig.Entity, stats: ig.BaseParams): void;
    setBaseParam(entity: ig.Entity, stat: string, value: any): void;
    getCurrentHp(entity: ig.Entity): number;
    setCurrentHp(entity: ig.Entity, hp: number): void;

    getAnimationTimer(entity: ig.Entity): number;
    setAnimationTimer(entity: ig.Entity, time: number): void;
    getCurrentState(entity: ig.Entity): string;
    setCurrentState(entity: ig.Entity, state: string): void;
    isPlayerInCombat(): boolean;
    setForceCombat(active: boolean): void;

    // getModName(mod: string): string; // Literally useless
    getActiveMods(): string[];
    getInactiveMods(): string[];
    getAllMods(): string[];
    getMod(name: string): Mod;
    getAssets(mod: string | Mod): string[];
    getAsset(mod: string | Mod, name: string): string;
    getAllAssets(name: string): string[];
}

declare namespace simplify {
    interface font {
        pushIconSet(set: ig.Font): number;
        prepareMapping(mapping: font.IconMapping, page: number): void;
        setMapping(mapping: font.IconMapping) : void;
    }
    namespace font {
        interface IconMapping {
            [name: string]: [number, number];
        }
    }

    interface options {
        isLoaded(): boolean;
        addTab(name: string, displayName?: string): number;
        reload(): void;
    }
    interface resources {
        initialize(): void;
        generatePatches(mod: string | Mod): void;
        generatePatch(original: string | object, modified: string | object, message?: string): void;
        registerHandler(handler: (settings: any) => any | undefined, filter?: RegExp, beforeCall?: boolean): void;
        loadFile(path: string, callback: (content: string) => void, errorCallback?: (error: any) => void): void;
        loadJSON(path: string, callback: (content: any) => void, errorCallback?: (error: any) => void): void;
    }
}