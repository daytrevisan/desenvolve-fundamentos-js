// Manipulando Prototype

// Cliente poupança
// Desafio: Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

// const maria = new Cliente("Maria", "44455566677", "maria@email.com", 250)
// console.log(maria);

// maria.depositar(40);
// console.log(maria.saldo);

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function depositar(valor) {
        this.saldo += valor;
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const juliana = new ClientePoupanca("Juliana", "99988877766", "juliana@email.com", 100, 200);
console.log(juliana);

// Definindo no protótipo uma nova função/método para o -ClientePoupanca-

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}

juliana.depositarPoup(30);
console.log(juliana.saldoPoup);