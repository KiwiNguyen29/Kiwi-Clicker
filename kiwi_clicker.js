document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.MainButton');
    if (!main) return;

    // Trigger pulsate on left mouse button (button === 0)
    main.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        // restart animation by removing and re-adding class
        main.classList.remove('pulsing');
        void main.offsetWidth; // force reflow
        main.classList.add('pulsing');
    });

    // Clean up class after animation ends
    main.addEventListener('animationend', (e) => {
        if (e.animationName === 'pulsate') {
            main.classList.remove('pulsing');
        }
    });
});
