// Fazendo depósitos
// Desafio: Adicionar uma propriedade que permita 'ações' para que os clientes que estão cadastrados consigam fazer operações bancárias

// No objeto -cliente- já criado, adicionamos um saldo inicial de *100*
// Incluímos no objeto a função -depositar-

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

console.log(cliente.saldo);

// Chamando a função passando um valor de depósito
cliente.depositar(30);
console.log(cliente.saldo)