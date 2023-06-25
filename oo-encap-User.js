// Encapsulamento
// Para garantir que o dado não será acessado e alterado
// Usamos  para indicar um atributo privado, porém deve ser declarado antes do construtor

export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role = 'user', ativo = 'ativo') {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    // Inicialmente, deixamos o método como privado
    // Acesso não será permitido
    
    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    // exibirInfos() {
    //     return `${this.#nome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo}`
    // }

    // Criamos uma const que acessa o método de forma privada
    // exibirInfos() estando dentro da classe User terá acesso ao montaObjUser
    // Com isso, é possível passar o retorno do método para dentro da variável -objUser-
    // Alteramos *this* por -objUser- e o # não é mais necessário

    exibirInfos() {
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`
    }
}