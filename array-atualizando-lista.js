// Método SPLICE
// Permite inclusão e exclusão de elementos em qualquer lugar do array

// Lista de chamada com os alunos: 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leonardo'
// Ana e Caio mudaram de escola e Rodrigo entrou nesta aula

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leonardo'];
console.log(`Primeira lista de chamada: ${listaDeChamada}`);

// 3 Parâmetros: (Qual 1o elemento a ser removido, qtos elementos serão removidos e qual a ser inserido)

listaDeChamada.splice(1, 2, 'Rodrigo')
console.log(`Segunda lista de chamada: ${listaDeChamada}`);

// Podemos apenas incluir, sem excluir nenhum elemento
// O elemento adicionado será colocado no índice mencionado

listaDeChamada.splice(2, 0, 'Andressa')
console.log(`Terceira lista de chamada: ${listaDeChamada}`);

// Apenas excluindo, sem nenhuma inclusão
// Menciona o índice de 'referência' e quantos serão excluídos

listaDeChamada.splice(2, 1)
console.log(`Quarta lista de chamada: ${listaDeChamada}`);