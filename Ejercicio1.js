let m40 = [];
let e40and50 = [];
let e50and60 = [];
let m60 = [];

let n = prompt("¿Cuantos alumnos hay? ");

for (i=1; i<=n; i++) {
  let alumnos = prompt("Agrega un peso: ");

if (alumnos < 40){
  m40.push('1');

}else if (alumnos >= 40 && alumnos <= 50){
  e40and50.push('1');

}else if (alumnos > 50 && alumnos < 60){
  e50and60.push('1');

}else if (alumnos >= 60 && alumnos <= 150){
  m60.push('1');
}
else{
  console.log("Valor invalo, ingrese otro valor")
}

}

document.write("Hay un total de "+ m40.length + " alumnos con un peso menor de 40kg" + "<br />" );

document.write("Hay un total de "+ e40and50.length + " alumnos con un peso entre 40kg y 50kg "  + "<br />");

document.write("Hay un total de "+ e50and60.length + " alumnos con un peso de mayor a 50kg y menos a 60kg"  + "<br />");

document.write("Hay un total de "+ m60.length + " alumnos con un peso mayor a 60kg"  + "<br />" );