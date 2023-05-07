// Função Prototype
// Framework de código aberto/ modelo do qual herda métodos e propriedades
// Características: bem estruturado, modular e orientado a objetos

// Cliente genérico
// Desafio: Gerar uma função que permita a criação de novos clientes a partir de um modelo

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function depositar(valor) {
        this.saldo += valor;
    }
}

const andre = new Cliente("André", "55566677788", "andre@email.com", 100)

console.log(andre); // saldo: 100

andre.depositar(50);

console.log(andre); // saldo: 150

// A função -Cliente- é uma função construtora, pois podemos instanciá-la quantas vezes quisermos
// Para isso, utilizamos new (palavra reservada para instanciar a função) + nome da função + informações específicas daquele novo objeto entre ()

// --------------------------------------------------------------------------------------------------------

// Utilizando este mesmo código no navegador, em Inspecionar
// Podemos chamar -andre- que o mesmo será reconhecido como objeto
// Acessando andre.__proto >>> entra no objeto
// O navegador mostra as propriedades de -andre- que foi contruído através da função -Cliente-
// Acessando andre.__proto__proto >>> entra em mais um nível
// O navegador mostra um construtor de objeto

// A função -cliente- utilizou o construtor objeto (*Object*)
// E a instância -andre- utilizou o contrutor -Cliente-
// Denomina-se cadeia de protótipo
// Essas propriedades (chamadas não-enumeráveis) são possíveis de serem visualizadas somente pelo navegador