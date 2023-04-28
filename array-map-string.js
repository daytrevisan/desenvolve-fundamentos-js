// Método MAP() com Strings

// Desafio: Padronizar a lista de alunos para conter apenas letras maiúsculas
// Array nome dos alunos = ['ana Julia', 'Caio vinicius', 'BIA Silva']

const nomes = ['ana Julia', 'Caio vinicius', 'BIA Silva'];

const nomesAjustados = nomes.map( nome => nome.toUpperCase() );

console.log(nomesAjustados)