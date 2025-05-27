const readline = require('readline-sync');

let nome = readline.question("Ola, Digite o seu nome: ");

let nota1 = readline.questionFloat("Digite a sua primeira nota: ");

let nota2 = readline.questionFloat("Digite a sua segunda nota: ");

let nota3 = readline.questionFloat("Digite a sua terceira nota: ");

let nota4 = readline.questionFloat("Digite a sua quarta nota: ");

let soma = nota1 + nota2 + nota3 + nota4;

let calcularMedia = soma/4;

if (calcularMedia >= 6) {
  console.log(`Parabens ${nome} você foi aprovado(a)!`);
} else {
  console.log(`Que pena ${nome} você foi reprovado(a)!!`);
}

console.log(`A soma das suas notas é de: ${soma}`);
console.log(`Voce ficou com a media: ${calcularMedia.toFixed(1)}`);