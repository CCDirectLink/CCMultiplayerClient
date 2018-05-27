export class LoadScreenHook {
    public displayServers(servers: string[],
                          loadMenu: () => void): Promise<number> {
        return new Promise((resolve, reject) => {
            this.hook(function(this: LoadScreenHook, box: sc.ButtonListBox) {
                box.clear();

                const name = this.clearHandlers(box);
                this.addHandler(box, name, (button: sc.SaveSlotButton) => {
                    resolve(servers.indexOf(button[cc.sc.varNames.autoSlotMiss].text));
                });

                for (let i = 0; i < servers.length; i++) {
                    this.addButton(box, servers[i], i);
                }
            }.bind(this));

            loadMenu();
        }) ;
    }

    public hook(callback: (box: sc.ButtonListBox) => void): void {
        const original = cc.sc.ButtonListBox.prototype[cc.ig.varNames.activate];
        cc.sc.ButtonListBox.prototype[cc.ig.varNames.activate] = function(this: sc.ButtonListBox) {
            const result = original.apply(this, arguments);
            callback(this);
            cc.sc.ButtonListBox.prototype[cc.ig.varNames.activate] = original;
            return result;
        };
    }

    public addButton(box: sc.ButtonListBox, name: string, index?: number) {
        const button = new cc.sc.SaveSlotButton(null, 0);
        button[cc.sc.varNames.autoSlotMiss][cc.ig.GUI.renameTextButton](name);

        box[cc.ig.GUI.addButton](button, false);
    }

    private clearHandlers(box: sc.ButtonListBox): string {
        let result = '';
        const buttonGroup = box[cc.ig.GUI.buttonGroup];
        for (const key in buttonGroup) {
            if (buttonGroup.hasOwnProperty(key)) {
                const value = buttonGroup[key];
                if (value instanceof Array) {
                    if (value.length === 1 && value[0] instanceof Function) {
                        result = key;
                        buttonGroup[key] = [];
                    } else if (value.length > 1 && value[0] instanceof Function) {
                        buttonGroup[key] = [];
                    }
                }
            }
        }
        return result;
    }

    private addHandler(box: sc.ButtonListBox, name: string, callback: (button: sc.SaveSlotButton) => void) {
        box[cc.ig.GUI.buttonGroup][name].push(callback);
    }
}