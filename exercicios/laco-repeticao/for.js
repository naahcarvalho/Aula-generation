const leia = require('readline-sync');

let totalPar = 0;
let totalImpar = 0;
let somaPar = 0;
let somaImpar = 0;

for (numero = 1; numero <= 10; numero++) {
    let numero = leia.questionInt("Digite um numero inteiro: ");

    if (numero % 2 === 0) {
        totalPar++
        somaPar = somaPar + numero;
    } else {
        totalImpar++
        somaImpar = somaImpar + numero;
    }
}

let totalGeral = totalPar + totalImpar;
let porcentagemPar = (totalPar / totalGeral) * 100;
let porcentagemImpar = (totalImpar / totalGeral) * 100;

console.log(`\nVocê digitou ${totalPar} números pares e ${totalImpar} números ímpares.\n`);
console.log(`A soma total dos números pares foi: ${somaPar}`);
console.log(`A soma total dos números ímpares foi: ${somaImpar}\n`);
console.log(`Porcentagem de números pares: ${porcentagemPar}%`);
console.log(`Porcentagem de números ímpares: ${porcentagemImpar}%`);