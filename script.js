"use strict";

const estudiantes = [
  {
    nombre: "Ana Martínez",
    calificaciones: [4.5, 3.8, 4.0, 4.7]
  },
  {
    nombre: "Luis Gómez",
    calificaciones: [3.2, 3.5, 4.1, 3.9]
  },
  {
    nombre: "Camila Torres",
    calificaciones: [4.8, 4.9, 5.0, 4.6]
  },
  {
    nombre: "Julián Ramírez",
    calificaciones: [2.9, 3.3, 3.7, 3.0]
  }
];


////////////// Itera sobre el array de estudiantes y muestra sus nombres y calificaciones
console.log("Puntooooooooooooooooooooooo 2.1");

estudiantes.forEach(function(x) {
    console.log(`Los estudiantes son: ${x.nombre} con calificaciones: ${x.calificaciones.join(", ")}`);
    });



///////////////// calcular el promedio de cada estudiante y mostrarlo por consola
console.log("Puntoooooooooooooooo 2.2");




//////////////// Calcular el promedio general de todos los estudiantes
let promedio = estudiantes.forEach(estudiante => {
  const suma = estudiante.calificaciones.reduce((total, nota) => total + nota, 0);
  const promedio = suma / estudiante.calificaciones.length;
  const promedioRedondeado = Math.round(promedio); // Redondear a dos decimales

  console.log(`Nombre: ${estudiante.nombre}`);
  console.log(`Promedio: ${promedioRedondeado}`);
});

const promedioEstudiantes = estudiantes.map(estudiante => {
  const suma = estudiante.calificaciones.reduce((total, nota) => total + nota, 0);
  const promedio = suma / estudiante.calificaciones.length;
  return { nombre: estudiante.nombre, promedio: promedio.toFixed(1) };
});

console.log();

////////////Obtener mejor calificación de cada estudiante

console.log("Puntooooooooooooooooo 2.3");



const mejorCalificacion = estudiantes.map(function(est) {
  let notaMasAlta = Math.max(...est.calificaciones);
  console.log(`La nota mas alta de ${est.nombre} es ${notaMasAlta}`);
  return  notaMasAlta;
});



////////////// Obtener peor calificacion de cada estudiante

console.log("Puntooooooooooooooooo 2.4");

const peorCalificacion = estudiantes.map(function(est) {
  let notaMasBaja = Math.min(...est.calificaciones);
  console.log(`La nota mas baja de ${est.nombre} es ${notaMasBaja}`);
  return notaMasBaja;
});


/////////////Agregar una calificacion a cada estudiante
console.log("Puntooooooooooooooooo 2.5");

let estudiante1 = estudiantes.find(function(est) {
  return est.nombre === "Ana Martínez";
});

if (estudiante1) {
  estudiante1.calificaciones.push(4.2);
  console.log(`Nueva calificación agregada a ${estudiante1.nombre}: ${estudiante1.calificaciones.join(", ")}`);
}

//////////////// Eliminar una calificación de un estudiante
console.log("Puntooooooooooooooooo 2.6");

let estudiante2 = estudiantes.find(function(est) {
  return est.nombre === "Luis Gómez";

});

if (estudiante2) {
  estudiante2.calificaciones.pop();
  console.log(`Nueva lista de calificaciones: ${estudiante2.nombre}: ${estudiante2.calificaciones.join(", ")}`);
}

/////////// Filtrar estudiantes con aprobados
console.log("Puntooooooooooooooooo 2.7");

let promedioAprobado = 3;

const estudiantesAprobados = promedioEstudiantes.filter(function(est){
  return est.promedio >= promedioAprobado;
});

const aprobadosNombres = estudiantesAprobados.map(est => est.nombre);


//console.log(`Los estudiantes aprobados son: ${aprobadosNombres.join(", ")}`);



///////// Ordenar los estudiantes por orden alfabético
console.log("Puntooooooooooooooooo 2.8");

let totalEstudiantes = estudiantes.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log(totalEstudiantes);


////// generar un reporte individual de cada estudiante con su nombre, calificaciones, promedio, mejor y peor calificación
console.log("Puntooooooooooooooooo 2.9");

function generarReporte(estudiantes) {
  estudiantes.forEach(estudiante => {
    const suma = estudiante.calificaciones.reduce((total, nota) => total + nota, 0);
    const promedio = suma / estudiante.calificaciones.length;
    const mejorCalificacion = Math.max(...estudiante.calificaciones);
    const peorCalificacion = Math.min(...estudiante.calificaciones);

    console.log(`Reporte de ${estudiante.nombre}:`);
    console.log(`Calificaciones: ${estudiante.calificaciones.join(", ")}`);
    console.log(`Promedio: ${promedio.toFixed(1)}`);
    console.log(`Mejor calificación: ${mejorCalificacion}`);
    console.log(`Peor calificación: ${peorCalificacion}`);
  });
}

generarReporte(estudiantes);