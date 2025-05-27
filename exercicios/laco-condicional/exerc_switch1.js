const leia = require('readline-sync');

console.log("=========== Cardápio ===========");
console.log("1 - Cachorro Quente     R$ 10.00");
console.log("2 - X-Salada            R$ 15.00");
console.log("3 - X-Bacon             R$ 18.00");
console.log("4 - Bauru               R$ 12.00");
console.log("5 - Refrigerante        R$ 8.00");
console.log("6 - Suco de Laranja     R$ 13.00");
console.log("================================\n");

let codigoProduto = leia.questionInt("Ola, seja bem-vindo ao restaurante To com fome!!\n\nDigite o numero do produto desejado: ");
let produto;
let preco;

switch (codigoProduto) {
  case 1:
    produto = "Cachorro Quente";
    preco = 10.00;
    break;
  case 2:
    produto = "X-Salada";
    preco = 15.00;
    break;
  case 3:
    produto = "X-Bacon";
    preco = 18.00;
    break;
  case 4:
    produto = "Bauru";
    preco = 12.00;
    break;
  case 5:
    produto = "Refrigerante";
    preco = 8.00;
    break;
  case 6:
    produto = "Suco de Laranja";
    preco = 13.00;
    break;
  default:
    console.log("Opcaoo invalida. Tente novamente.");
    return 
}

let quantidade = leia.questionInt("Agora digite a quantidade desejada: ");
let valorTotal = preco * quantidade;

console.log(`\nVocê pediu ${quantidade} ${produto} - Total: R$ ${valorTotal.toFixed(2)}\n`);
console.log("Obrigado pela preferência!");