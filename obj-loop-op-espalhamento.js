// Lista de dependentes utilizando laço de repetição
// Desafio: Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco

// Criando um array de objetos
const clientes = [
    {
        nome: 'André',
        cpf: '11122233344',
        dependentes: [{
            nome: 'Sara Silva',
            parentesco: 'filha',
            dataNasc: '20/03/2011'
        },
        {
            nome: 'Samira Silva',
            parentesco: 'filha',
            dataNasc: '29/09/2019'
        }],
        },
        {
            nome: 'Juliana',
            cpf: '22233344455',
            dependentes: [{
                nome: 'Sophia Mendes',
                parentesco: 'filha',
                dataNasc: '20/03/2011'
            }]
        }
    ]

// Percorrendo o objeto sem precisar chamar índice a índice

// Método ForEach para percorrer o array
// 1. Criamos um array vazio para guardar os dados
// 2. Como vamos percorrer o array dentro do objeto, armazenamos em uma const o resultado da busca chamando ForEach para o *objeto* -clientes-
// 3. Chamando o método push pelo array criado, dado a dado será inserido neste array a cada loop
// 4. E para o espalhamento, chamamos o índice em seguida o *array* -dependentes-

let listaDependentesForEach = [];

const buscaDependentes = clientes.forEach(indice => {
    listaDependentesForEach.push(...indice.dependentes);
});

// Método For-in para percorrer o objeto
// 1. Criamos um array vazio para guardar os dados
// 2. Montamos a estrutura For-In, referenciando o *objeto* -clientes-
// 3. Chamando o método push pelo array criado, onde dado a dado será inserido neste array a cada loop
// 4. E para o espalhamento, chamamos *objeto* -clientes- (com índice) e em seguida o *array* -dependentes-

let listaDependentesForIn = [];

for( let indice in clientes) {
    listaDependentesForIn.push(...clientes[indice].dependentes);
}

console.log(listaDependentesForEach);
console.log(listaDependentesForIn);
console.table(listaDependentesForEach);
console.table(listaDependentesForIn);