const leia = require('readline-sync');

let numero;
let somaPositivos = 0;
let somaNegativos = 0;
let contador = 0;

do {
    numero = leia.questionInt("Digite um numero inteiro: ");

    if (numero > 0) {
    somaPositivos += numero;
    contador++;
} else if (numero < 0) {
    somaNegativos += numero;
    contador++;
}
    
} while (numero !== 0);

console.log(`\nA soma dos números positivos é: ${somaPositivos}`);
console.log(`A soma dos números negativos é: ${somaNegativos}`);
console.log(`\nVocê digitou ${contador} números (sem contar o zero).`);