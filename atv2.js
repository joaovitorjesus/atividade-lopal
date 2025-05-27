// Programa para calcular a média de 8 números reais e exibir os valores acima da média utilizando vetores

let numeros = [];
let soma = 0;

// Leitura das notas
for (let i = 0; i < 8; i++) {
  let numero;
  do {
    numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
    if (isNaN(numero)) {
      alert("Valor inválido! Digite um número real.");
    }
  } while (isNaN(numero));
  numeros[i] = numero; // Armazenando diretamente no índice do vetor
  soma += numero;
}

// Cálculo da média
let media = soma / 8;

// Exibição dos números acima da média
let acimaDaMedia = [];
for (let i = 0; i < 8; i++) {
  if (numeros[i] > media) {
    acimaDaMedia.push(numeros[i]);
  }
}

alert(`A média dos números é: ${media.toFixed(2)}\nNúmeros acima da média: ${acimaDaMedia.join(", ")}`);
