// Strings são arrays?
// “String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres!

// O trecho de código declarado como array:
// const nome = 'Alura';
// Debaixo dos panos temos:
// ['A', 'l', 'u', 'r', 'a']

const nome = 'Alura';
let nomeMaiusculo = '';

for ( let i = 0; i < nome.length; i++ ){
    nomeMaiusculo += nome[i].toUpperCase();
}

console.log(nomeMaiusculo)