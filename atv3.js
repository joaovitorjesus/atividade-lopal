// Programa para calcular a média de 8 números reais e exibir os valores acima da média utilizando vetores

let numeros = [];
let soma = 0;
let acimaDaMedia = [];
let quantidade = 8; // Definindo a quantidade fixa de números

// Leitura dos números
for (let i = 0; i < quantidade; i++) {
  let numero;
  do {
    numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
    if (isNaN(numero)) {
      alert("Valor inválido! Digite um número real.");
    }
  } while (isNaN(numero));
  numeros[i] = numero;
  soma += numero;
}

// Cálculo da média
let media = soma / quantidade;

// Identificação dos números acima da média
for (let i = 0; i < quantidade; i++) {
  if (numeros[i] > media) {
    acimaDaMedia[acimaDaMedia.length] = numeros[i]; // Adicionando ao final do vetor sem usar push
  }
}

// Construção da string de números acima da média
let resultado = "Números acima da média: ";
for (let i = 0; i < acimaDaMedia.length; i++) {
  if (i > 0) {
    resultado += ", "; // Adiciona vírgula entre os números
  }
  resultado += acimaDaMedia[i].toFixed(2);
}

// Exibição dos resultados
alert(`A média dos números é: ${media.toFixed(2)}\n${resultado}`);
