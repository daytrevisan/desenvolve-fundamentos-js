// Lista de telefones
// Desafio: Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro

// Criando o objeto -cliente-
const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11122233344',
    email: 'andre@email.com',
    fones: ['5519987654321', '5511912345678']
}

// Exibir lista de telefones do cliente André

cliente.fones.forEach( fone => console.log(fone) );

// Acessamos o objeto -cliente- dentro da chave -fones-
// Como -fones- guarda informação do tipo array, e ao acessá-lo, podemos chamar todos os métodos de array
// Neste caso, usamos o ForEach, pois precisamos apenas de um retorno simples com console.log