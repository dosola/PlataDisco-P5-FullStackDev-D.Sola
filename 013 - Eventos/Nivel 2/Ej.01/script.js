

const btnMoney = document.getElementById('btnMoney');
const btnMiami = document.getElementById('btnMiami');
const btnMaiameee = document.getElementById('btnMaiameee');
const imagenes = document.querySelectorAll('img');



btnMoney.addEventListener('click', () => {
    imagenes[0].classList.toggle('oculto');
});


btnMiami.addEventListener('click', () => {
    imagenes[1].classList.toggle('oculto');
});


btnMaiameee.addEventListener('click', () => {
    imagenes[2].classList.toggle('oculto');
});


imagenes.forEach(imagen => {
    imagen.addEventListener('click', function() {
        this.classList.add('oculto');
    });
});