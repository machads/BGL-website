// Custom Scripts

document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const body = document.body;

    // Check if the splash screen has already been shown in this session
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (splashScreen && !hasVisited) {
        // Add loading class to body
        body.classList.add('loading');

        // Set a flag in sessionStorage to indicate that the splash screen has been shown
        sessionStorage.setItem('hasVisited', 'true');

        // Total animation duration: 2s per iteration * 2 iterations = 4s (from CSS animation)
        // The CSS animation is now 2s with cubic-bezier, so total animation time is 2s * 2 iterations = 4s
        const totalAnimationTime = 4000; // 2 seconds animation * 2 iterations

        setTimeout(() => {
            // Fade out the splash screen
            splashScreen.classList.add('hidden');

            // After the fade-out transition (1s), remove the loading class from body
            setTimeout(() => {
                body.classList.remove('loading');
            }, 1000);

        }, totalAnimationTime);
    } else if (splashScreen && hasVisited) {
        // If splash screen has been shown, hide it immediately and remove loading class
        splashScreen.style.display = 'none';
        body.classList.remove('loading');
    } else {
        // If there's no splash screen element (e.g., on other pages), just remove loading class
        body.classList.remove('loading');
    }
});
