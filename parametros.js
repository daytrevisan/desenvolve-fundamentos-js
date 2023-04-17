// Os parâmetros auxiliam no reaproveitamento de código
            // parâmetros
function soma(num1, num2){
    return num1 + num2;
}

            // argumentos
// console.log(soma(8, 20));
// console.log(soma(52, 87));
// console.log(soma(127, -235));

// parâmetros x argumentos
// Parâmetro é a variável que irá receber um valor em uma função (ou método) enquanto que um argumento é o valor (que pode originar de uma variável ou expressão) que você passa para a função (ou método). Você não passa parâmetros, você passa argumentos. Você recebe argumentos também, mas recebe em parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// Se passarmos os argumentos invertidos, o JS irá apresentar desta forma, pois não distingue os dados
console.log(nomeIdade(25, "Melissa"));
console.log(nomeIdade("Melissa", 25));


// O fato dos parâmetros terem o mesmo nome da function soma não atrapalha a função multiplica, pois DENTRO DA RESPECTIVA FUNÇÃO OS PARÂMETROS SÃO LOCAIS
function multiplica(num1, num2){
    return num1 * num2;
}

// Chamando uma função dentro da outra
console.log(multiplica(soma(2,3), soma(4,5)));
// Resultado 25

// Se passarmos apenas 1 parâmetro
// console.log(multiplica(soma(2,3)))
// O resultado será NaN (Not a Number) >> Será a multiplicação do resultado da soma x undefined

// Para evitar este erro, podemos definir um parâmetro defaut na função >>> no caso da multiplicação, o 1 é neutro

function multiplicaDeNovo(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplicaDeNovo(soma(2,3)));