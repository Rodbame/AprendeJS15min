
let nombreAdmin = "Rodrigo";
let profesion = "Programador especializado en desarrollo web";

let edad = 20;

// document.write(nombreAdmin);

// document.write(profesion);

// document.write(edad);

// let dataNombre = document.getElementById("data");
// dataNombre.innerHTML = `
//     <p>Soy una caja de datos desde JS</p>
//     <p>El nombre es ${nombreAdmin}</p>
//     <p>La profesionb es ${profesion}</p>
//     <p>La edad es de ${edad}</p>
// `;

// if (edad <= 17){
//     dataNombre.innerHTML += `
//     <h2 style="color:red;">Eres MENOR de edad</h2    
// `
// } else if (edad => 18){
//     dataNombre.innerHTML += `
//     <h2 style="color:green;">Eres mayor de edad</h2    
// `   
// }

const fechaDeNacimiento = "13/03/2003"

// console.log(nombreAdmin);
// console.log(profesion);
// console.log(edad);

// console.log(fechaDeNacimiento);

let n1 = 10;
let n2 = 20;

// console.log(`Tus numeros son ${n1} y ${n2}`);

let resta = n1 - n2
let suma = n1 + n2
let division = n1 / n2
let multiplicacion = n1 * n2

// console.log(`La suma es ${suma}`);
// console.log(`La resta es ${resta}`);
// console.log(`La multiplicacion es ${multiplicacion}`);
// console.log(`La division es ${division}`);

// Condicionales
let miNumero = 10
let resultadoPregunta = miNumero == 10

// console.log(resultadoPregunta);

function saludarBasico() {
    console.log("Hola");
}

function saludarNombreEdad(nombre,edad) {
    console.log(`Hola ${nombre} tienes una edad de ${edad}`);
}

function multiplicar(n1,n2){
    return n1 * n2
}

saludarBasico();
saludarNombreEdad("Rodrigo",20)

// arreglos

const arregloNombres = ["Barron","Mejia","Santos","Herrera"]

let mostrarNombre = arregloNombres[0];
// console.log(mostrarNombre);

// OBJETOS

let persona = {
    nombre: "Daniela",
    edad: 15,
    sexo: "femenino"
}

let persona2 = {
    nombre: "Daniela",
    edad: 15,
    sexo: "femenino"
}

console.log(persona);
console.log(`El nombre de la persona 1 es ${persona.nombre}`);
console.log(`La edad de la persona 1 es ${persona.edad}`);
console.log(`El sexo de la persona 1 es ${persona.sexo}`);

console.log(`El nombre de la persona 2 es ${persona2.nombre}`);
console.log(`La edad de la persona 2 es ${persona2.edad}`);
console.log(`El sexo de la persona 2 es ${persona2.sexo}`);

// Error de constante porque las constantes no cambian su valor
// fechaDeNacimiento = "13/03/2004"; 




