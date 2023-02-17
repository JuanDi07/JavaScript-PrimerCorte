let nMatematica = [], nFisica = [], nProgramacion = [], nCedula = [], nNombres = [];

let nAlumnos = prompt("Ingrese la cantidad de alumnos: ");

for (i=1; i<=nAlumnos; i++) {
    
    let cedula = parseInt(prompt("Ingrese la cedula del alumno: "+i));
    nCedula.push(cedula);
    let alumno = prompt("Ingrese el nombre del alumno: "+i);
    nNombres.push(alumno);
    let matematica = parseInt(prompt("Ingrese su calificacion de matematicas: "+i));
    nMatematica.push(matematica);
    let fisica = parseInt(prompt("Ingrese su calificacion de fisica: "+i));
    nFisica.push(fisica)
    let programacion = parseInt(prompt("Ingrese su calificacion de programacion: "+i));
    nProgramacion.push(programacion)
    
}

/*

Profe, no supe verificar si los valores eran numeros y por eso no pude continuar,
ya que las preguntas de este ejercicio requerian de valores numericos y no supe como verificarlos
investigue y consegui la funcion "isNaN" pero me daba error y no logre continuar con el ejercicio.

*/