let num1 = 5;
let res = 0;

let f2num2 = 12;



function triplicador(num1) {
    res = (num1 * 3);
    return res;
}

let salidaf1 = triplicador(num1);
alert("Resultado fn1 " + salidaf1);


function multiplicador(num1, num2) {
    res = (num1 * num2);
    return res;
}

let salidaf2 = multiplicador(salidaf1, f2num2)
alert("Resultado fn2 " + salidaf2);

function division(num1, num2) {
    res = (num1 / num2);
    return res;
}

let salidaf3 = division(salidaf2, f2num2);
alert ("Resultado fn3 " + salidaf3);

function resto(num1, num2) {
    res = (num1 % num2);
    return res;
}

let salidaf4 = resto(salidaf3, 3);
alert ("Resultado fn4" + salidaf4);

