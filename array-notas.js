// ARRAY

// O array é uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, e cada elemento se localiza numa posição na lista chamada de índice

// Índice       0   1   2   3
const notas = [10, 6.5, 8, 7.5]

// Para calcularmos uma média, chamamos cada elemento pelo índice e o denominador obtemos pelo método LENGTH do próprio array que traz o tamanho dessa lista

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media)

// ---------------------------------------------------------------------------------------------------

// Inserindo uma nova nota na lista >>> método PUSH
// O elemento inserido por push será adicionado ao final do array

notas.push(7)
console.log(notas)

media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/notas.length
console.log(media)

// Caso tentarmos inserir um elemento por PUSH sem passar nenhum argumento
notas.push()
console.log(notas)

// O elemento será entendido como UNDEFINED e o cálculo da média retorna como NaN (Not A Number)

media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5])/notas.length
console.log(media)

// ---------------------------------------------------------------------------------------------------

// Deletando uma nota na lista >>> método POP
// O elemento deletado por pop será removido ao final do array
// Uma particularidade do método pop é que não é necessário passar argumento

notas.pop()
console.log(notas)

media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length
console.log(media)
