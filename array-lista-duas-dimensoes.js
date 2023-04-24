// Array de Duas Dimensões

// Desafio: Dadas duas listas, uma de nomes de alunos e outra de suas notas correspondentes, associar os dados de ambas

const listaDeAlunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaDeAlunos = [10, 7, 9, 6.5];

// Criar uma lista com as duas listas [0, 1]
let listaDeAlunosEMedias = [listaDeAlunos, mediaDeAlunos];

// 1a lista (de nomes) e o 1o nome        // 2a lista (de notas) e a 1a nota
console.log(`${listaDeAlunos[0,0]}, sua média é: ${mediaDeAlunos[1,0]}`);

console.log(`${listaDeAlunos[0,1]}, sua média é: ${mediaDeAlunos[1,1]}`);
console.log(`${listaDeAlunos[0,2]}, sua média é: ${mediaDeAlunos[1,2]}`);
console.log(`${listaDeAlunos[0,3]}, sua média é: ${mediaDeAlunos[1,3]}`);