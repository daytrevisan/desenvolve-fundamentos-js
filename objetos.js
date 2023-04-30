// O que são objetos em JS?
// Um objeto em JS é uma entidade independente com propriedades e tipos

// array estrutura comum > dados do mesmo tipo
const arrayNomes = ['João', 'Maria', 'Lucas', 'Deise']; 

// um array não consegue relacionar diferentes informações
const arrayClientes = ['nome', 'André', 'idade', 36]; 

// Diferente de um array, um objeto pode guardar diferentes tipos de dados
// Objeto em JS guarda diferentes tipos de dados
// Objeto é a estrutura mais importante do JS
// Um objeto é formado pelo par chave-valor
// Funciona quando precisamos fazer uma abstração do mundo real (ex: um cliente tem nome, idade, endereço, etc)

const objetoClientes = {
    nome: 'André',
    idade: 36,
    cpf: '11122233344',
    email: 'andre@email.com'
}

console.log(arrayClientes);
console.log(objetoClientes)