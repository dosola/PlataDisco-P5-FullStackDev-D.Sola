// *** Ej 2 2- To Do List
// En este ejercicio harás un programa que organice en un Arreglo las tareas del usuario.
// Para eso, deberás crear un prompt que le pregunte al usuario qué quiere hacer. Si el usuario pone:
// "nuevo": Le permitirá agregar una tarea nueva.
// "listar": Mostrará sus tareas en la consola.
// "borrar": Eliminará la tarea que quiera.
// "salir": Cerrará el programa.


 function organizarTareas() {
  const tareas = []; // Arreglo para almacenar tareas.

  while (true) {
      const accion = prompt("¿Qué quieres hacer? (nuevo, listar, borrar, salir)");

      if (accion === "nuevo") {
          const nuevaTarea = prompt("Ingrese la nueva tarea:");
          tareas.push(nuevaTarea);
          console.log("Tarea agregada.");
      } else if (accion === "listar") {
          console.log("Tareas:");
          tareas.forEach((tarea, index) => console.log(`${index + 1}. ${tarea}`));
      } else if (accion === "borrar") {
          const indice = prompt("Ingrese el número de la tarea que desea eliminar:");
          if (isNaN(indice) || indice < 1 || indice > tareas.length) {
              console.log("Por favor, ingrese un número válido.");
          } else {
              const tareaEliminada = tareas.splice(indice - 1, 1);
              console.log(`Tarea "${tareaEliminada}" eliminada.`);
          }
      } else if (accion === "salir") {
          console.log("¡Hasta luego!");
          break;
      } else {
          console.log("Por favor, ingrese una opción válida.");
      }
  }
}

organizarTareas();