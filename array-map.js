// Método MAP()
// Função Callback
// O método Map permite a manipulação de dados dentro do array, permitindo executar determinada ação em todos os elementos do array

// Desafio: Adicionar um ponto extra na nota de um aluno
// Notas do aluno: 10, 9, 8, 7, 6

const notas = [10, 9, 8, 7, 6];

// OBS: Sabendo-se que a nota máxima = 10, então precisamos de uma condição para que com a inclusão do ponto adicional não extrapolarmos este limite

// Para a condição com MAP(), vamos fazer uma arrow function e dentro dela utilizar o operador ternário
// O operador ternário simplifica a condição com IF, onde após o (?) segue a condição se V, e (:) se F

const notasAtualizadas = notas.map( nota => nota == 10 ? nota = nota : ++nota )

console.log(notasAtualizadas)