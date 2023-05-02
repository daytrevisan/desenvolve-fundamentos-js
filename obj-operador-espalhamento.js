// Lista de dependentes
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

// Utilizando o operador de espalhamento [...] para pegar somente os dependentes
// O operador extrai somente uma parte da chaves do objeto
// Retorna um array com essas chaves-valores

const listaDependentes = [...clientes[0].dependentes, ... clientes[1].dependentes];

console.log(listaDependentes);

console.table(listaDependentes);