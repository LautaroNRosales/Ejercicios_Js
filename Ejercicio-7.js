//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
let num1 = 2;
let num2 = 15;

console.log("Los múltiplos de 3 comprendidos entre " + num1 + " y " + num2 + " son:");
for (let i = num1; i <= num2; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}