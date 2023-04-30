// Acessar chaves
// Desafio: Consultar um objeto utilizando uma lista de chaves relativas a informações de -cliente- gerada pelo sistema e printar o resultado na tela

// Criando o objeto cliente
const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11122233344',
    email: 'andre@email.com'
}

// Criando uma variável que contenda o 'cabeçalho' do objeto -cliente-
const chaves = ['nome', 'idade', 'cpf', 'email'];

// Chamando -cliente-, mas agora pelo array -chaves- na posição 0
// O JS vai buscar por 'nome' dentro do objeto

console.log(cliente[chaves[0]]); // -cliente- é o objeto e -chaves- é o array

// Percorrendo todas as informações do array com ForEach()
// Para isso, buscamos o array e não o objeto

chaves.forEach( info => console.log(cliente[info]) )

// --------------------------------------------------------------------------------------------------------

// Caso tentarmos acessar uma chave de objeto que não existe, o JS retornará -undefined-

console.log(cliente['endereco'])