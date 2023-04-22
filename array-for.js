// FOR
// Desafio: mostrar uma lista de números com os respectivos índices do array

const lista = [100, 200, 300, 400, 500, 600];

// O laço de repetição FOR é utilizado para trechos de código que se repetem mediante uma condição
// A condição do meio é a responsável pelo término do código ou por mantê-lo em repetição de execução 

for(let i = 0; i < lista.length; i++) {
    console.log(i, lista[i])
}

// Condições para loop infinito
// * Falta da condição de parada (parâmetro central)
// * Falta da condição de incremento (último parâmetro)
// * Alterações na variável de controle (i) dentro do bloco >>> não é uma boa prática