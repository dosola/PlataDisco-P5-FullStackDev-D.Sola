






let edad=prompt("Ingrese su edad.")

if ( edad < 0) {
    alert("Error, su edad no es válida.") 
}

else if( edad < 18) {
alert("No puede pasar al bar.")
} 

else if(edad < 21){
alert("")
} 

else if ( edad >= 21) {
    alert("Bienvenido, felicidades por alcanzar la mayoría de edad.")
}

if (edad %2 ==! 0)
{
    alert("¿Sabias que tu edad es impar?")
}