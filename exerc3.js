const readline = require('readline-sync');

let nome = readline.question("Ola, seja bem-vindo(a)!!\nQual o seu nome? ");

let salarioBruto = readline.questionFloat("Informe o valor do seu salario bruto: ");

let adicionalNoturno = readline.questionFloat("Digite o valor recebido como adicional noturno: ");

let horasExtras = readline.questionFloat("Digite o valor recebido pelas horas extras: ");

let descontos = readline.questionFloat("Informe o total de descontos em folha: ");

let salario = salarioBruto + adicionalNoturno + (horasExtras * 5);

let salarioLiquido = salario - descontos;

let percentualDesconto = (descontos / salario) * 100;

let formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

console.log("\n========= RESUMO FINAL =========");
console.log(`Funcionário(a): ${nome}`);
console.log(`Salário Bruto: ${formatador.format(salarioBruto)}`);
console.log(`Adicional Noturno: ${formatador.format(adicionalNoturno)}`);
console.log(`Horas Extras: ${formatador.format(horasExtras * 5)}`);
console.log(`Descontos: ${formatador.format(descontos)} (${percentualDesconto.toFixed(1)}%)`);
console.log(`Salário Líquido: ${formatador.format(salarioLiquido)}`);

console.log(`\n${nome}, seu salário bruto com adicional noturno e horas extras é: ${formatador.format(salario)}`);
console.log(`Seu salário líquido, já com todos os descontos, será: ${formatador.format(salarioLiquido)}`);
console.log("================================");