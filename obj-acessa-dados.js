// Printar informações
// Desafio: Acessar um objeto com informações de um cliente e exibir essas informações no console

// Par chave-valor do exemplo:
// Chaves: nome, idade, cpf, email
// Valores: 'André', 36, '11122233344', 'andre@email.com'

const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11122233344',
    email: 'andre@email.com'
}

// Para acessarmos uma determinada informação dentro do objeto, utilizamos a notação de ponto(.)

console.log(cliente.nome);

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)

// Para dados sensíveis como o cpf, podemos mostrar apenas uma parte deste
// Restringindo a apenas os três primeiros algarismos e aos dois últimos
// Lembrando que String funciona como array no JS (começa em 0)

console.log(`Número de CPF: ${cliente.cpf.substring(0,3)}.XXX.XXX-${cliente.cpf.substring(9)}`)