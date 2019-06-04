export class LoadScreenHook {
    public displayServers(servers: string[],
                          loadMenu: () => void): Promise<number> {
        return new Promise((resolve, reject) => {
            this.hook(function(this: LoadScreenHook, box: sc.ButtonListBox) {
                box.clear();

                const name = this.clearHandlers(box);
                this.addHandler(box, name, (button: sc.SaveSlotButton) => {
                    resolve(servers.indexOf(button.autoSlotMiss.text));
                });

                for (let i = 0; i < servers.length; i++) {
                    this.addButton(box, servers[i], i);
                }
            }.bind(this));

            loadMenu();
        }) ;
    }

    public hook(callback: (box: sc.ButtonListBox) => void): void {
        const original = sc.ButtonListBox.prototype.activate;
        sc.ButtonListBox.prototype.activate = function(this: sc.ButtonListBox, ...args: any) {
            const result = original.apply(this, args);
            callback(this);
            sc.ButtonListBox.prototype.activate = original;
            return result;
        };
    }

    public addButton(box: sc.ButtonListBox, name: string, index?: number) {
        const button = new sc.SaveSlotButton(null, 0);
        button.autoSlotMiss.setText(name);

        box.addButton(button, false);
    }

    private clearHandlers(box: sc.ButtonListBox): string {
        let result = '';
        const buttonGroup = box.buttonGroup;
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
        box.buttonGroup[name].push(callback);
    }
}