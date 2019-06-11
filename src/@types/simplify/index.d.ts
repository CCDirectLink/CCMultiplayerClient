declare let simplify: simplify;

interface simplify {
    font: simplify.font;
    options: simplify.options;
    resources: simplify.resources;

    registerUpdate(func: (...args: any[]) => any): void;
    fireUpdate(): void;

    loadScript(url: string): Promise<void>;
    jumpHigh(): void;

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
        setMapping(mapping: font.IconMapping): void;
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