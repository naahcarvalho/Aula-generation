const readline = require('readline-sync');

let numero1 = readline.questionFloat("Digite o primeiro numero:");

let numero2 = readline.questionFloat("Digite o segundo numero: ");

let numero3 = readline.questionFloat("Digite o terceiro numero: ");

let numero4 = readline.questionFloat("Digite o quarto numero: ");

let produto1 = numero1 * numero2;

let produto2 = numero3 * numero4;

let diferenca = produto1 - produto2;

console.log("\n===== Resultado =====\n");
console.log(`Produto 1: ${numero1} * ${numero2}\n`);
console.log(`Produto 2: ${numero3} * ${numero4}\n`);
console.log(`Diferença entre os produtos: ${diferenca}\n`);
console.log("Cálculo finalizado com sucesso. Obrigado por utilizar nosso sistema!");