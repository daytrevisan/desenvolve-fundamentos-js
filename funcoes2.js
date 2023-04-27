// TIPOS DE FUNÇÃO NO JS

// 1. FUNÇÃO SEM RETORNO E SEM PARÂMETRO

// A função abaixo apenas executa uma instrução, sem a necessidade de disponibilizar o resultado para o restante do código
// Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.
// Sem reaproveitamento de código

function cumprimentar(){
    console.log('Oi, gente!');
}
   
cumprimentar();


// 2. FUNÇÃO SEM RETORNO E SEM PARÂMETRO

// Similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o nome de qualquer pessoa (desde que esteja no formato de dado string.
// Permite REAPROVEITAMENTO DE CÓDIGO

function cumprimentaPessoa(pessoa){
    console.log(`Oi, ${pessoa}!`);
}

cumprimentaPessoa('Helena');


// 3. FUNÇÃO COM RETORNO E SEM PARÂMETRO

// É possível combinar funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas.
// No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave return.

function cumprimentar(){
    return 'Oi, gente!';
}

function cumprimentaPessoa(nomePessoa){
    console.log(`${cumprimentar} Meu nome é ${nomePessoa}`);
}

cumprimentaPessoa('Hadassa');


// 4. FUNÇÃO COM RETORNO E MAIS DE UM PARÂMETRO

// Lembrando que as funções podem receber a quantidade de parâmetros necessária, e que o JavaScript identifica os parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro numero1 se refere a 15, o parâmetro numero2 se refere a 30 e o parâmetro numero3 se refere a 45. Somos nós, que estamos desenvolvendo o código, que damos os nomes aos parâmetros de acordo com o dado que a função espera receber - no caso, números.

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}
   
console.log(operacaoMatematica(15, 30, 45)) // 90