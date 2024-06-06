function agregarAPantalla(value) {
    document.getElementById('pantalla').value += value;
}

function calcular() {
    document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value);
    }

function borrarPantalla() {
    document.getElementById('pantalla').value = '';
    }
