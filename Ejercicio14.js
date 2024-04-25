//Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. 
//Devolver una lista con los divisores del numero ingresado.
function obtenerDivisores(minimo, maximo, divisor) {
    let divisores = [];
    
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            divisores.push(i);
        }
    }
    
    return divisores;
}

let minimo = 1;
let maximo = 100;
let divisor = 5;
let divisoresEnRango = obtenerDivisores(minimo, maximo, divisor);
console.log("Divisores en el rango de", minimo, "a", maximo, "divisibles por", divisor, ":", divisoresEnRango);