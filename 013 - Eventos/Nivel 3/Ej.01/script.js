


const body = document.querySelector('body');
const colorInput = document.getElementById('colorInput');

const colores = {
    rojo: 'red',
    azul: 'blue',
    amarillo: 'yellow',
    negro: 'black',
    verde: 'green',
};

colorInput.addEventListener('keyup', (event) => {
    const color = colores[event.target.value.toLowerCase()];
    if (color || event.target.value === '') {
        body.style.backgroundColor = color || 'white';
    }
});




