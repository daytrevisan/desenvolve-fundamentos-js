// Método CONCAT()
// Utilizado para concatenar um array com outro

// Mencionamos um dos arrays passando o método e passa o segundo array como parâmetro
// Importante: deve-se criar uma NOVA CONST para salvar o resultado

// Desafio: Juntar as diferentes turmas em uma turma única

const salaDePython = ['Melissa', 'Helena', 'Rodrigo'];
const salaDeJS = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaDeJS.concat(salaDePython);
console.log(salasUnificadas);