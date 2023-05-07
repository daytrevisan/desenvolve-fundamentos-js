// Cliente Poupança

// Desafio: Aproveitar a classe -Cliente- já existente e criar a partir dela um novo tipo de cliente para contas poupança

class Cliente {
    constructor(nome, cpf, email, saldo) { 
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

// Criando uma classe -ClientePoupanca-

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoupanca) {
        super(nome, cpf, email, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}

const karina = new ClientePoupanca("Karina", "98765432100", "karina@email.com", 800, 150)
console.log(karina)

karina.depositar(200);
karina.depositarPoupanca(50);

console.log(karina.saldo);
console.log(karina.saldoPoupanca);