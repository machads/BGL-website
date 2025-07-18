document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const body = document.body;

    if (splashScreen) {
        const splashLogo = document.getElementById('splash-logo');
        const hasVisited = sessionStorage.getItem('hasVisited');

        if (hasVisited) {
            // If already visited, hide splash screen immediately
            splashScreen.style.display = 'none';
            body.classList.remove('loading');
        } else {
            // First visit: play animation
            sessionStorage.setItem('hasVisited', 'true');
            
            // Listen for the end of the animation
            splashLogo.addEventListener('animationend', () => {
                // Use rAF to schedule the visual updates for the next frame
                requestAnimationFrame(() => {
                    // Start fading out the splash screen
                    splashScreen.classList.add('hidden');
                    // Make the main content visible
                    body.classList.remove('loading');

                    // After the fade-out transition ends, remove the splash screen from the DOM
                    splashScreen.addEventListener('transitionend', () => {
                        requestAnimationFrame(() => {
                            splashScreen.style.display = 'none';
                        });
                    }, { once: true });
                });
            }, { once: true });
        }
    } else {
        // If no splash screen, just show the body
        body.classList.remove('loading');
    }
});