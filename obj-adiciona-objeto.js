// Compondo um objeto
// Desafio: Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco

// Criando o objeto -cliente-
const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11122233344',
    email: 'andre@email.com',
    fones: ['5519987654321', '5511912345678']
}

// Adicionando um novo objeto ao objeto -cliente-
cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNasc: '20/03/2011'
}

console.log(cliente)

// Alterando uma informação dentro do 'subobjeto'
// Chamamos as propriedades por (.) dentro da hierarquia dos objetos

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)