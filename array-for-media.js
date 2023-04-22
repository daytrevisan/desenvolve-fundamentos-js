// Neste algoritmo, iremos calcular a média de uma lista de números utilizando o laço FOR

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++) {
    somaDasNotas = somaDasNotas + notas[i];
    return (somaDasNotas/notas.length)
}
