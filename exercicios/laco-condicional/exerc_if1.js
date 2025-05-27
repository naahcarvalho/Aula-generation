const leia = require('readline-sync');

let numero = leia.questionFloat("Digite um numero: ");

if (numero === 0) {
  console.log(`O numero ${numero} é par, mas não é positivo nem negativo.`);
} else if (numero % 2 === 0 && numero > 0) {
  console.log(`O numero ${numero} é par e positivo!`);
} else if (numero % 2 !== 0 && numero > 0) {
  console.log(`O numero ${numero} é ímpar e positivo!`);
} else if (numero % 2 === 0 && numero < 0) {
  console.log(`O numero ${numero} é par e negativo!`);
} else {
  console.log(`O numero ${numero} é ímpar e negativo!`);
}