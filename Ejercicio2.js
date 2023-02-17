let interesA = 1.15;
let ingresoM = 11 * 250;

let montoI = parseInt(prompt("Ingrese el monto inicial: "));

if (montoI>=0) {
    
    let montoA = ingresoM + montoI;
    
    let valorF = montoA * interesA;
    
    let interesF = valorF - montoA;
    
    document.write("El dinero en tu cuenta de ahorros es: "+valorF.toFixed(2)+"</br>")
    document.write("El dinero generado mediante interes fue: "+interesF.toFixed(2))
}
else{
    document.write("Por favor ingrese un numero positivo: ")
}