(function() {
    'use strict';

    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) {
        console.error('Error: canvas element with id \'matrix-canvas\' not found.');
        return;
    }
    const ctx = canvas.getContext('2d');

    const characters = '01';
    const fontSize = 16;
    let columns;
    let drops;

    function initialize() {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    function animate() {
        draw();
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', initialize);

    initialize();
    animate();

})();
