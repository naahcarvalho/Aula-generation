const leia = require('readline-sync');

let lista = []
let soma = 0;
let maior;
let menor;

for (let contador = 0; contador < 10; contador++) {
    lista[contador] = leia.questionInt("Digite um numero: ")
    soma = soma + lista[contador]

    if (contador === 0) {
        maior = lista[contador];
        menor = lista[contador];
    }

    if (lista[contador] > maior) {
        maior = lista[contador];
    }
    if (lista[contador] < menor) {
        menor = lista[contador];
    }
}

console.log("\n===== Indices ímpares =====");
for (let contador = 1; contador < 10; contador += 2) {
    console.log(`\nO numero ${lista[contador]} esta no indice ${contador}`);
 }

 console.log("\n== Numeros pares ==");
 for(let contador = 0; contador < 10; contador++) {
    if (lista[contador] % 2 === 0) {
        console.log(`\nO numero ${lista[contador]} é par!`)
 }
}

console.log("\nA soma da lista é: " + soma);
console.log("A media dos valores é: " + (soma / 10))
console.log("\nMaior número digitado: " + maior);
console.log("Menor número digitado: " + menor);