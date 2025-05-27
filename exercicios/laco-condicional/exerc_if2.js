const leia = require('readline-sync');

let nome = leia.question("Ola, seja bem-vindo ao programa de doacao de sangue!\nDigite o nome do doador: ");
let idade = leia.questionInt("Digite a idade do doador: ");

if (idade < 18 || idade > 69) {
  console.log(`${nome} não está apto(a) para doar sangue!`);
} else if (idade >= 18 && idade <= 59) {
  console.log(`${nome} está apto(a) para doar sangue!`);
} else if (idade >= 60 && idade <= 69) {
  let condicao = leia.keyInYNStrict("Eh a primeira doacao de sangue? ");
  if (condicao) {
    console.log(`${nome} não está apto(a) para doar sangue!`);
  } else {
    console.log(`${nome} está apto(a) para doar sangue!`);
  }
}