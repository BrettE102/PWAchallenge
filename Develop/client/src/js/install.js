const butInstall = document.getElementById('buttonInstall');

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle("hidden", false)
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const popEvent = window.deferredPrompt;
    if (!popEvent) {return}
});
// show prompt
popEvent.prompt();

// reset prompt
window.deferredPrompt = null;

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // reset prompt
    window.deferredPrompt = null;
});
