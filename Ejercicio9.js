//Obtener la suma de los elementos de un array.
const array = [10, 26, 15, 23, 24];

function sumaArray(num) {
    let suma = 0;
    for (let i = 0; i < num.length; i++) {
        suma += num[i];
    }
    return suma;
}

const suma = sumaArray(array);
console.log("La suma de los elementos del array es:", suma);