// Método SLICE()
// Método utilizado para dividir array

// O método Slice aceita dois parâmetros >>> índice de começo e índice de término                 

// Desafio: Dada uma lista de alunos, dividi-la em duas turmas

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Paulo', 'Beatriz', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Charles'];

// Qual primeiro elemento, até qual elemento
// Nomes.length/2 >>> vai até metade do array 
const sala1 = nomes.slice(0, nomes.length/2);

// Se passarmos apenas o primeiro parâmetro, o JS irá até o final
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos sala 1: ${sala1}`);
console.log(`Alunos sala 2: ${sala2}`)