import { Multiplayer } from './multiplayer';

async function startMultiplayer(): Promise<void> {
    try {
        await waitForMods();

        const multiplayer = new Multiplayer();

        console.log('[multiplayer] Loading..');

        await multiplayer.load();

        console.log('[multiplayer] Loaded');

        multiplayer.initialize();

        console.log('[multiplayer] Initialized');
    } catch (e) {
        console.error(e);
    }
}

async function waitForMods(): Promise<void> {
    await new Promise((resolve, reject) => {
        document.body.addEventListener('modsLoaded', () => {
            resolve();
        });
    });
}

startMultiplayer()
    .catch(console.error.bind(console));