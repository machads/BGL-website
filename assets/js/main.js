document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const body = document.body;

    if (splashScreen && !sessionStorage.getItem('hasVisited')) {
        sessionStorage.setItem('hasVisited', 'true');
        body.classList.add('loading');

        const splashLogo = document.getElementById('splash-logo');
        splashLogo.addEventListener('animationend', () => {
            requestAnimationFrame(() => {
                splashScreen.classList.add('hidden');
                body.classList.remove('loading');
                splashScreen.addEventListener('transitionend', () => {
                    splashScreen.style.display = 'none';
                }, { once: true });
            });
        }, { once: true });
    } else {
        body.classList.remove('loading');
        if(splashScreen) {
            splashScreen.style.display = 'none';
        }
    }
});