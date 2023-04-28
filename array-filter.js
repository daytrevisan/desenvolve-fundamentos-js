// Método FILTER()
// Função Callback
// Permite que filtremos elementos do array segundo uma condição

// Desafio: Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos
// 'Ana', 'Marcos', 'Maria', 'Mauro'
// 7, 4.5, 8, 7.5
// Considerando média 7

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 6.5];

// Como queremos que apareça o nome, aplicamos Filter() no nome
// Índice é um parâmetro opcional
// Retorna booleano - V/F

const reprovados = alunos.filter( (nome, índice) => notas[índice] < 7)
console.log(`Alunos reprovados: ${reprovados}`)

// Porém, o JS aponta nome como um parâmetro que não está sendo usado
// Como padrão, trocamos este parâmetro para um underline
// O JS sabe que o parâmetro existe, mas que não será utilizado no corpo da função

const reprovados2 = alunos.filter( (_, índice) => notas[índice] < 7)
console.log(`Alunos reprovados2: ${reprovados}`)


