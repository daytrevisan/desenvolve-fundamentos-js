const arrayVazio = [,,,];

// Ao criamos um array vazio > no terminal visualizamos que tem zero posições
console.log(arrayVazio);

// Se tentarmos mostrar seu tamanho (.length) >>> o retorno será 0
console.log(arrayVazio.length);

// Ao tentar acessar a posição 0 >>> retorno será UNDEFINED
console.log(arrayVazio[0]);
console.log(arrayVazio[1]);
console.log(arrayVazio[2]);

// Incluindo um elemento na lista vazia
arrayVazio.push(50);
console.log(arrayVazio);
console.log(arrayVazio.length);
console.log(arrayVazio[3]);