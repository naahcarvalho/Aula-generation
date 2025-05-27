const leia = require('readline-sync');

console.log("========== Tabela ==========");
console.log("1 - Gerente             10%");
console.log("2 - Vendedor            7%");
console.log("3 - Supervisor          9%");
console.log("4 - Motorista           6%");
console.log("5 - Estoquista          5%");
console.log("6 - Tecnico de TI       8%");
console.log("============================\n");

let nome = leia.question("Ola, seja bem vindo a empresa Dreams!!\n\nDigite o seu nome: ");

let codigoCargo = leia.questionInt("Digite o codigo referente ao seu cargo: ");

let cargo;

let reajuste;

switch (codigoCargo) {
  case 1:
    cargo = "Gerente";
    reajuste = 0.10;
    break;
  case 2:
    cargo = "Vendedor";
    reajuste = 0.07;
    break;
  case 3:
    cargo = "Supervisor";
    reajuste = 0.09;
    break;
  case 4:
    cargo = "Motorista";
    reajuste = 0.06;
    break;
  case 5:
    cargo = "Estoquista";
    reajuste = 0.05;
    break;
  case 6:
    cargo = "Tecnico de TI";
    reajuste = 0.08;
    break;
  default:
    console.log("Código inválido!");
    return
}

let salario = leia.questionFloat("Agora informe o seu salario: ");
let novoSalario = salario + (reajuste * salario);

let formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

console.log(`\nParabens ${nome}!!\n\nSeu cargo é: ${cargo}\nE seu novo salario é de: ${formatador.format(novoSalario)}`);