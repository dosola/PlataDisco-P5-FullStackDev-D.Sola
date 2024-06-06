// // Ej01 - Software Factory
// Pensemos que somos una software factory (empresa de desarrollo) y tenemos un 
// cliente que tiene varios artículos de tecnología. Este cliente nos plantea 
// dos necesidades para su negocio:

// Conocer el valor total de cada artículo según sus cantidades (es decir, cuál 
// es el valor total de todos sus televisores, por ejemplo).

// Imprimir una lista que separe cada artículo con su respectiva suma total 
// de valores en sus respectivos Objetos.

// ¿Cómo realizar estos pedidos?

// Crearás una nueva Función, en la cual su argumento haga referencia a un 
// Arreglo de productos del ecommerce (el cual nuestro cliente ya nos brinda).




function totalArticulos(ecommerce) {
    // Inicializar un objeto vacio para luego pasar resultado
    let resultado = {};
  
    // Iterar sobre cada producto...
    ecommerce.forEach(producto => {
      // Calculo cantidad * precio por cada articulo
      let valorTotal = producto.precio * producto.articulos;
        // Agregar el nombre a este resultado anterior
      resultado[producto.nombre] = valorTotal;
    });
  
    // Retorno el objeto resultado convertido a un arreglo de objetos
    return Object.entries(resultado).map(([nombre, valorTotal]) => ({ [nombre]: valorTotal }));
  }
  
  
  
  /// Datos iniciales...
  let ecommerce = [
    { nombre: "Samsung TV", precio: 6000, articulos: 10 },
    { nombre: "DELL notebook", precio: 4000, articulos: 30 },
    { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
    { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
    { nombre: "Teclado logitech", precio: 3000, articulos: 5 },
  ];
  
  // muestro por consola el resultado  
  console.log(totalArticulos(ecommerce));




