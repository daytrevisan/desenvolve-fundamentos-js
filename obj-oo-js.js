// Orientação com Objetos em JS
// O JS considera as Classes como "Sugar Sintatic"
// Debaixo dos panos, as classes são transformadas em funções

// Desafio: Criar um sistema bancário com base no paradigma OO

class Cliente {
    constructor(nome, cpf, email, saldo) { 
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo
    }

    // Em Classe, não precisamos usar a palavra function >>> deve passar referência e codar dentro do bloco
    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

const armando = new Cliente ("Armando", "12345678900", "armando@email.com", 300);
console.log(armando);

armando.depositar(50);
console.log(armando.saldo);