// Programa para calcular a soma dos números pares utilizando vetores
let numeros = [];
let somaPares = 0;

// Leitura dos 10 números inteiros
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    numeros[i] = numero; // Armazenando diretamente no índice

    // Verifica se o número é par
    if (numero % 2 === 0) {
        somaPares += numero;
    }
}

// Exibição do resultado
alert(`A soma dos números pares é: ${somaPares}`);
