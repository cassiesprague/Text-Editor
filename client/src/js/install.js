const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// Whan this event handler has captured the event object, which contains information about the installation prompt, and stores it in window.deferredPrompt. It then makes the install button visible by removing the 'hidden' class from its CSS class list.
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
// Once this retrieves the deferred installation prompt stored in window.deferredPrompt it then calls the prompt() method on the prompt event to show the installation prompt to the user. After the prompt is shown, it sets window.deferredPrompt to null to indicate that the prompt has been used, and hides the install button by adding the 'hidden' class to its CSS class list.
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		return;
	}
	promptEvent.prompt();
	window.deferredPrompt = null;
	butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// When this event handler is triggered when the PWA is successfully installed on the user's device. It sets window.deferredPrompt to null, indicating that there's no pending installation prompt.
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
