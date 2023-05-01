// Adicionando campos
// Desafio: Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores

// Criando o objeto -cliente-
const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11122233344',
    email: 'andre@email.com'
}

console.log(cliente);

// Adicionando uma informação ao objeto
// Acessamos o objetos por (.) e em seguida colocamos a chave a ser incluída, já atribuindo-lhe o valor correspondente

cliente.fone = '1199998888';

console.log(cliente);

// Atualizando a chave do objeto
// Para atualizar a chave de um objeto, basta chamarmos a mesma chave atribuindo um valor diferente

cliente.fone = '22444446666';

console.log(cliente)