// Revisando Callbacks

// O ForEach pode receber diretamente uma função que foi criada em outro lugar do código com function
// >>> Recebe como parâmetro a function

const nomes = ['Ana', 'Júlio', 'Beatriz', 'Lucas'];
const indice = 0;

nomes.forEach(ImprimeNome);

// A função que será passada ao ForEach pode receber dois parâmetros
// O primeiro diz respeito ao 'conteúdo' do array
// O segundo parâmetro é o índice, que é opcional
// Note que o nome do parâmetro está no singular e é o mesmo usado dentro do bloco de código, enquanto que o array tem o nome no plural

function ImprimeNome(nome, indice) {
    nome = nome.toUpperCase();
    console.log(indice, nome);
}
