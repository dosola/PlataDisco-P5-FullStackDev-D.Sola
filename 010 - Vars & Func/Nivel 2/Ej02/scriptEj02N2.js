
const saludar = (nombre) => {
    if (nombre === undefined) {
    return "hola anónimo";
    } else {
        return "hola " + nombre;
    }
};

alert(saludar());
alert(saludar("Daniel"));
