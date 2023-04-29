const teste = ['TeStAnDo'];
let testandoMap = '';

// Com Map(), função callback que irá chamar outra função
// Passamos o método do toUpperCasse no retorno (após o => da arrow function)
// Não é preciso apontar para o índice

for( let i = 0; i < teste.length; i++ ){
    testandoMap = teste.map(string => string.toUpperCase())
}
console.log(testandoMap)

// Com o método toLowerCase() direto
// Precisamos apontar a referência [i] de índice do array

for( let i = 0; i < teste.length; i++ ){
    testandoMap = teste[i].toLowerCase()
}
console.log(testandoMap)