


document.addEventListener("DOMContentLoaded", function() {
    const beepButton = document.getElementById("beepButton");

    function seEjecutaEnEvento() {
        const body = document.querySelector("body");
        const paragraph = document.createElement("p");
        paragraph.textContent = "BEEP";
        body.appendChild(paragraph);
        body.classList.toggle("color");
    }

    beepButton.addEventListener("click", seEjecutaEnEvento);
});