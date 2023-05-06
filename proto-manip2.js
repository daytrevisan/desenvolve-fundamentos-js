// Testando algumas propriedades e validando a ideia de cadeia de protótipos

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function depositar(valor) {
        this.saldo += valor;
    }
}

const andre = new Cliente("André", "55566677788", "andre@email.com", 100);

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

const juliana = new ClientePoupanca("Juliana", "99988877766", "juliana@email.com", 100, 200);

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}

console.log(andre.hasOwnProperty("saldoPoup"));
console.log(juliana.hasOwnProperty("saldoPoup")); // hasOwnProperty só existe no -ClientePoupanca-
console.log(andre instanceof Cliente);
console.log(juliana instanceof ClientePoupanca);
console.log(typeof andre);
console.log(typeof juliana);
console.log(Function.prototype.isPrototypeOf(Cliente));
console.log(Cliente.constructor === Function);