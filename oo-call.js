// Método call()

// O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do -this-
// Ou seja, é possível atribuir um -this- diferente do contexto atual ao executar a função

function exibeInfos() {
    console.log(this.nome, this.email)
}

const user = {
    nome: 'Mariana',
    email: 'm@email.com'
}

exibeInfos.call(user) // Mariana m@email.com

function User(nome, email) {
    this.nome = nome;
    this.email = email;
    
    this.exibeInfos = function() {
        console.log(this.nome, this.email)
    }
}

const newUser = new User('Letícia', 'l@email.com');

const outroUser = {
    nome: 'Rodrigo',
    email: 'r@email.com'
}

newUser.exibeInfos(); // Letícia, l@email.com
newUser.exibeInfos.call(outroUser); // Rodrigo, r@email.com