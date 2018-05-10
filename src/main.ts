/// <reference path="multiplayer.ts"/>
// ^ Why Microsoft, why?

if (!cc) {
    throw new Error('No modloader found!');
}

async function startMultiplayer(): Promise<void> {
    const multiplayer = new Multiplayer();
    await multiplayer.load();
}

startMultiplayer();