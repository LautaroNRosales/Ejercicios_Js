//Sumar solo los elementos pares de un array.
const array = [9, 16, 10, 24, 27, 32, 35];

function sumaElementosPares(num) {
    let sumPar = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) { 
            sumPar += num[i];
        }
    }
    return sumPar;
}

const sumPar = sumaElementosPares(array);
console.log("La suma de los elementos pares del array es:", sumPar);