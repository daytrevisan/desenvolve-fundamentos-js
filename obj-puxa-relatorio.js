// Puxando relatório
// Desafio: Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma mais automatizada para fornecer a outros departamentos do banco

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
    },
    {
        nome: 'Samira Silva',
        parentesco: 'filha',
        dataNasc: '29/09/2019'
    }],
}

let relatorio = '';

// Percorrendo o objeto com For-In

for( let info in cliente ) {
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue
    } else {
        relatorio += `${info} => ${cliente[info]} / `
    }
}

console.log(relatorio)

// Obs: Note que o JS não trouxe os dados de objeto nem de função
// Repare que -fones- (tipo array) também não foi puxado para o relatório
// O JS considera o array como um *object*