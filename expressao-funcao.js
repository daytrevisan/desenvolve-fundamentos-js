// FUNÇÃO PASSANDO PARÂMETRO
// function minhaFuncao(param){
//     // bloco de código
// }

// console.log(minhaFuncao("param"));


// EXPRESSÃO DE FUNÇÃO
// Função Anônima

// const soma = function(num1, num2) { return num1 + num2 }
// console.log(soma(1,1))

// Podemos chamar uma função ANTES de executá-la que a mesma RETORNA corretamente

console.log(apresentar());
function apresentar(){
    return "olá";
}

// Porém, ao tentar chamar uma função ANÔNIMA antes da declaração, o JS dá ERRO >>> Pede inicialização
// No caso de função anônima, utilizamos CONST
// Comportamento semelhante à de variável

console.log(soma(2,8));
const soma = function(num1, num2) { return num1 + num2 }

// Principal diferença >>> HOISTING (içar ou levantar)
// Funções e VAR são "listadas" no topo do código


