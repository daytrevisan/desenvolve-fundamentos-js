// Oferta de seguro
// Desafio: Percorrer um objeto, verificar se existe a chave -dependentes- e, caso exista, enviar uma mensagem de oferta de seguro

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
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

// Verificar se a chave existe e retorna um array

// const propsClientes = Object.keys(cliente)

// console.log(propsClientes)

// Retorno
// [
    //   'nome',
    //   'idade',
    //   'cpf',
    //   'email',
    //   'fones',
    //   'dependentes',
    //   'saldo',
    //   'depositar'
    // ]
    
    // Filtrar o array identificando o dependente
    
function oferecerSeguro(objeto) {
    const propsClientes = Object.keys(objeto);
    if(propsClientes.includes('dependentes')) {
        console.log(`Oferecer seguro a ${objeto.nome}`)
    } else {
        console.log(`Cliente sem dependentes, não oferecer seguro a ${objeto.nome}`)
    }
}

oferecerSeguro(cliente)