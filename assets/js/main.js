document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const body = document.body;

    if (splashScreen) {
        const splashLogo = document.getElementById('splash-logo');
        const hasVisited = sessionStorage.getItem('hasVisited');

        if (hasVisited) {
            splashScreen.style.display = 'none';
            body.classList.remove('loading');
        } else {
            sessionStorage.setItem('hasVisited', 'true');
            splashLogo.addEventListener('animationend', () => {
                splashScreen.classList.add('hidden');
                splashScreen.addEventListener('transitionend', () => {
                    splashScreen.style.display = 'none';
                    body.classList.remove('loading');
                }, { once: true });
            }, { once: true });
        }
    } else {
        body.classList.remove('loading');
    }
});