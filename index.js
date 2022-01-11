// ARREGLOS
// TIPO DE DATO NO PRIMITIVO

const nombres = ["Leo", "Pame", 24, null, true];

console.log(nombres);

const teachers = ["Mike", "Sam", "Víctor", "Ponz"];

console.log(teachers[0]);
console.log(teachers[1]);
console.log(teachers[99]);

// MANIPULACIÓN
// A. AGREGAR ELEMENTOS (.push)
teachers.push("Dylan");
console.log(teachers);

// B. AGREGAR ELEMENTOS AL INICIO
teachers.unshift("Leo");
console.log(teachers);

// C. ELIMINAR ELEMENTOS (.splice)
// 2 argumentos (0, cuántos borrar hacia adelante)
teachers.splice(0, 1);
console.log(teachers);

// D. ELIMINAR EL PRIMER ELEMENTO
teachers.shift()
console.log(teachers);

// E. ELIMINAR EL ÚLTIMO ELEMENTO
teachers.pop();
console.log(teachers);






// CICLOS
// FOR

const paises = ["México", "Colombia", "Perú"]

for(i = 0; i < paises.length; i++) {
    console.log(`País: ${i}`);
    console.log(`Nombre de país: ${paises[i]}`);
}

// FOR EACH
// CICLO QUE SE USA DENTRO DE LOS ARREGLOS.
paises.forEach(function(element) {

    console.log(element);

});

// SPLIT
const frase = "Esta es una frase larguísima";

const palabras = frase.split(" ");
const palabras2 = frase.split("f");
console.log(palabras);
console.log(palabras2);