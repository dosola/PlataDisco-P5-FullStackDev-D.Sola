let img1 = document.addEventListenerById("divId");

//let miBtn2 = document.getElementById("idBoton");


img1.addEventListener("rollover", function() {    
    let textoingresado = document.querySelector("input").value;
    parraf1.textContent = textoingresado;
    parraf2.textContent = textoingresado;
    parraf1.style.color = "red";
    parraf2.style.color = "green";
    parraf1.style.textTransform = "uppercase";
    parraf2.style.textTransform = "lowercase";
})