// Método REDUCE()
// Função Callback
// Reduz os valores dos elementos do array para um único valor

// Desafio: Com a média dos alunos de 3 turmas, calcule a média geral de cada sala
// Sala JS: 7, 8, 8, 7, 10, 6.5, 4, 10, 7
// Sala Java: 6, 5, 8, 9, 5, 6
// Sala Python: 7, 3.5, 8, 9.5

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Parâmetros:
// 1. Acumulador e 2. Valor atual

// Retorno:
// 1. Operação e 2. Valor inicial

function mediaDasSalas (notasDasSalas){
                                    // acumulador, valor atual => operação, valor inicialização
    const somaDasNotas = notasDasSalas.reduce( (acum, atual) => atual + acum, 0 )
    return somaDasNotas/notasDasSalas.length
}

console.log(`Média da sala de JS: ${mediaDasSalas(salaJS)}`)
console.log(`Média da sala de Java: ${mediaDasSalas(salaJava)}`)
console.log(`Média da sala de Python: ${mediaDasSalas(salaPython)}`)

// --------------------------------------------------------------------------------------------------------

// Outro exemplo
// Encontrar média da lista de notas: 10, 6.5, 8, 7

const notasDosAlunos = [9, 6.5, 7.5, 5];

const mediaDosAlunos = notasDosAlunos.reduce( (acum, atual) => atual + acum, 0) / notasDosAlunos.length

console.log(mediaDosAlunos)