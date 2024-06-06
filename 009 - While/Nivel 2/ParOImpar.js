let num1 = parseInt(prompt("Ingrese un número: "));

while (num1 > 0) {
    if ( num1%2 == 0) {
        alert("El número es PAR")
    } else {
        alert("El número es IMPAR")
    }
    num1 = parseInt(prompt("Ingrese otro número: "));
}
alert("Ud. ha salido del programa.")