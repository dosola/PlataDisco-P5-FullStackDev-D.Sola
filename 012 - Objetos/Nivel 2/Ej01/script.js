// 2. 1- Aumentar La Nota
//  Tenés una lista de estudiantes con su desempeño académico 
//  actual. Querés subirle 2 puntos a aquellos que su nota sea 
//  mayor a 5. Recordá que la nota tampoco puede superar al 10.

let alumnos  = [
    { alumno: "Juan", nota: 6 },
    { alumno: "Mario", nota: 8 },
    { alumno: "Julia", nota: 10 },
    { alumno: "Sofia", nota: 2 },
]



alumnos.forEach((alumno) => {
    if (alumno.nota >= 5 && alumno.nota <= 8) {
      alumno.nota += 2;
    }
   });



console.log("Notas finales: ")
console.log(alumnos);
