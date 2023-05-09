// Método apply()

// O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array

function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email: ${email}`);
}

const user = {
    nome: 'Mariana',
    email: 'm@email.com',
    executaFunction: function(fn) {
        fn.apply(user, [this.nome, this.email])
    }
}

user.executaFunction(exibeMensagem);