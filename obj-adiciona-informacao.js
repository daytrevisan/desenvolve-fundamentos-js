// Listas de dependentes
// Desafio: Verificar a melhor forma de agregar a informação de um novo dependente ao objeto -cliente-

// Criando o objeto -cliente-
// Como vamos incluir mais de um -dependente- (objeto dentro de -cliente-), vamos transformá-lo em um array
// Assim, conseguimos incluir mais de um dependente com todas as propriedades

const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '11122233344',
    email: 'andre@email.com',
    fones: ['5519987654321', '5511912345678'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
}

// Incluindo mais uma informação no array do objeto -dependentes-
// O objeto -dependentes- por guardar informações do tipo array, podemos utilizar os métodos de array

cliente.dependentes.push({
    nome: 'Samira Silva',
    parentesco: 'filha',
    dataNasc: '29/09/2019'
})

// console.log(cliente)

// Filtrando pela filha mais nova

// Analogamente ao push, podemos utilizar o método filter para filtrar informação dentro do array
const filhaMaisNova = cliente.dependentes.filter( dependente => dependente.dataNasc === '29/09/2019' )

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)

// Cada índice do array é seu próprio objeto
// Assim, o filter acessa o objeto através da notação de (.)
// E irá percorrer cada índice do array procurando pelo valor exato da chave -dataNasc- (data de nascimento) informada