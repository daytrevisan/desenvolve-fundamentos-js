// FUNÇÕES NO JAVASCRIPT

// let x = "";
// console.log(x);
// x = "exemplo";

// 1. DECLARAÇÃO DA FUNÇÃO
function imprimeTexto(texto){
    console.log(texto)
}

// 2. CHAMADA DA FUNÇÃO (Passando parâmetros/ Pode ser chamada 1x ou mais vezes)
// imprimeTexto();
// imprimeTexto("oie");


// Se apenas declaramos a função e a chamamos SEM PASSAR PARÂMETROS, seu retorno será UNDEFINED
// function soma(){
//     const resultado = 2 + 2;
// }

// console.log(soma());


// Neste caso, precisamos apenas do RETURN (deve ser o último comando) e chamarmos a função passando PARÂMETRO
// Obs: RETURN deve ser o último comando do bloco de função (o que estiver depois não será executado)
function soma(){
    return 2 + 2;
}

// console.log(soma());


// Agora passando função dentro de função > o parâmetro da 1a função é o resultado da 2a função
imprimeTexto(soma());