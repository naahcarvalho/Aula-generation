const leia = require('readline-sync');

let backend = 0;
let mulheresFront= 0;
let homensMobile = 0;
let fullStack = 0;
let totalPesquisas = 0;
let somaIdades = 0;

let continuar = 's';

while (continuar === 's') {
  let idade = leia.questionInt("Digite a idade: ");

  console.log("\nIdentidade de Genero:\n1 – Mulher Cis\n2 – Homem Cis\n3 – Não Binario\n4 – Mulher Trans\n5 – Homem Trans\n6 – Outros");
  let genero = leia.questionInt("Digite o numero correspondente ao genero: ");

  console.log("\nPessoa Desenvolvedora:\n1 – Backend\n2 – Frontend\n3 – Mobile\n4 – FullStack");
  let tipoDev = leia.questionInt("Digite o numero correspondente ao tipo de desenvolvedor(a): ");

  if (tipoDev === 1) {
    backend++;
  }

  if ((genero === 1 || genero === 4) && tipoDev === 2) {
    mulheresFront++;
  }

  if ((genero === 2 || genero === 5) && tipoDev === 3 && idade > 40) {
    homensMobile++;
  }

  if (genero === 3 && tipoDev === 4 && idade < 30) {
    fullStack++;
  }

  totalPesquisas++;
  somaIdades += idade;

  continuar = leia.question("Deseja cadastrar outro colaborador? (S/N): ");
}

console.log("\n===== RESULTADOS DA PESQUISA =====");
console.log("Total de desenvolvedores Backend:", backend);
console.log("Total de Mulheres (Cis/Trans) Frontend:", mulheresFront);
console.log("Total de Homens (Cis/Trans) Mobile maiores de 40 anos:", homensMobile);
console.log("Total de Não Binários FullStack menores de 30 anos:", fullStack);
console.log("Total de participantes:", totalPesquisas);
console.log("Média de idade dos participantes:", (somaIdades / totalPesquisas).toFixed(2));