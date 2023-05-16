// Testando Prototype

let user = {
    perfil: 'estudante'
}

let estudante = {
    nome: 'Juliana'
}

Object.setPrototypeOf(estudante, user)

// -user- é o protótipo de -estudante-
// -estudante- irá buscar informação em -user-
// -estudante- além da propriedade -nome-, passa a ter também a propriedade -perfil-

console.log(estudante.nome)
console.log(estudante.perfil)

// --------------------------------------------------------------------------------------------------------

// Utilizando new para criar um novo objeto:

// 