// ARROW FUNCTION X FUNÇÃO 'TRADICIONAL'

// Função "tradicional"

function apresentar(nome){
    return `Meu nome é ${nome}`
}
console.log(apresentar("Andressa"));


// ARROW FUNCTION
// Não é nomeada e nem precisa de return

// = o que recebe de parâmetro => retorno (quando de uma linha apenas)
const apresentarArrow = nome => `Meu nome é ${nome}`;
console.log(apresentarArrow("Letícia"))

// Arrow function para operações matemáticas

// p/ + de 1 parâmetro, utilizar () na atribuição  
const soma = (num1, num2) => num1 + num2
console.log(soma(7,8));

// Arrow function para + de 1 linha de instrução
// Exemplo soma de números de 1 a 9

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2
    }
}

console.log(somaNumerosPequenos(2,20))

// ARROW function se comporta da mesma forma que EXPRESSÃO de função >>> HOISTING
// Deve ser chamado após sua declaração