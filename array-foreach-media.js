// Método ForEach()
// O método ForEach é chamado de CALLBACK, pois seu parâmetro é outra função >>> uma função que chama outra função
// Diferente de outros métodos vistos anteriormente que recebem números, strings ou booleanos

// Neste algoritmo, iremos calcular a média de uma lista de números utilizando o laço ForEach()
// Desafio: Calcular a média entre as seguintes notas: 10, 6.5, 8 e 7.5

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach( nota => {
    somaDasNotas += nota
})

// Equivalente sem arrow function
// notas.forEach(function(nota){
//     somaDasNotas += nota
// })

// Diferente do laço for, o ForEach não pede o índice do array
// O incremento da soma será apenas NOTA, que é o mesmo parâmetro do método

let mediaDasNotas = somaDasNotas/notas.length

console.log(mediaDasNotas)