export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }
    
    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Marina', 'm@m.com', '2000-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// Para usar herança no JS, precisamos instalar o package.json através do comando #npm init -y
// No objeto JSON, incluir -> "type": "module"