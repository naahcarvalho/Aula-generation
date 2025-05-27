const readline = require('readline-sync');

let nome = readline.question("Ola, seja bem-vindo!!\nQual o seu nome? ");

let salario = readline.questionFloat("Digite o seu salario: ");

let abono = readline.questionFloat("Agora informe o valor do abono que recebeu: ");

let novoSalario = salario + abono;

let formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

let salarioAnual = novoSalario * 12;

console.log(`Parabéns, ${nome}!!`);
console.log(`O seu novo salario é: ${formatador.format(novoSalario)}`);
console.log(`E o seu salario anual é: ${formatador.format(salarioAnual)}`);