// Analisando o papel de -this- e de -bind-

// Criando um objeto com alguns dados de usuário
// Na função -exibirInfos-, vamos chamar apenas -nome- e -email-

const user = {
    nome: "Andressa",
    email: "a@email.com",
    nascimento: "2000/02/28",
    role: "admin",
    ativo: "true",
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

// user.exibirInfos();

// const exibir = user.exibirInfos;
// exibir(); // undefined

// const exibir = function() {
//     console.log(this.nome, this.email)
// }
// exibir(); // undefined
    
// Nos dois exemplos anteriores, o retorno é undefined, porque -this- está sem contexto/referência para trazer a informação de nome e email de user

// --------------------------------------------------------------------------------------------------------

// const exibir = function() {
//     console.log(this)
// }
// exibir(); // JS retorna como *Object [Global]* de -this- (referência nativa da linguagem)

const exibir = function() {
    console.log(this.nome, this.email)
}
exibir() // undefined

const exibirNome = exibir.bind(user);
exibirNome(); // Andressa a@email.com