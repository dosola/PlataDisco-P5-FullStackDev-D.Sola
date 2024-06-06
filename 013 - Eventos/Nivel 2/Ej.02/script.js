


const body = document.querySelector('body');
const img = document.querySelector('.follow-mouse');

let isMouseDown = false;

body.addEventListener('mousedown', () => {
    isMouseDown = true;
});

body.addEventListener('mouseup', () => {
    isMouseDown = false;
});

body.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        const x = event.clientX + 'px';
        const y = event.clientY + 'px';
        img.style.top = y;
        img.style.left = x;
    }
});
