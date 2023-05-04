// Unificando dois ou mais objetos

const fichaGuerreiro = {
    nome: 'Aragon',
    classe: 'guerreiro'
}

const equipoGuerreiro = {
    espada: 'Andúril',
    capa: 'capa élfica +2'
}

// Para juntar dois ou mais arrays, referenciamos cada array dentro de um array maior
const guerreiro1 = [fichaGuerreiro, equipoGuerreiro];
console.log(guerreiro1);

// Saída no terminal

// [
//     { nome: 'Aragon', classe: 'guerreiro' },
//     { espada: 'Andúril', capa: 'capa élfica +2' }
// ]

// Neste caso como usamos esta ação para objeto, o resultado serão dois objetos distintos

// Mas e se quisermos juntar as chaves dos objetos em um só objeto?
// Fazemos a mesma ação, mas passando chaves e adicionando o operador de espalhamento(...)

const guerreiro2 = {...fichaGuerreiro, ...equipoGuerreiro};
console.log(guerreiro2);

// Saída no terminal

// {
//   nome: 'Aragon',
//   classe: 'guerreiro',
//   espada: 'Andúril',
//   capa: 'capa élfica +2'
// }

// Agora sim temos apenas um objeto que engloba todas as chaves quantos seus respectivos valores!

// --------------------------------------------------------------------------------------------------------

// Importante que os nomes das CHAVES dos objetos sejam DIFERENTES!
// Senão o JS irá sobrescrevê-las

const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
   
    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }

   const personagens = {...mago, ...guerreiro, ...ranger};
   console.log(personagens); // { nome: 'Legolas', classe: 'ranger' }

   // Nota-se que apenas o último objeto foi considerado
   // Com o mesmo nome de chaves, os valores foram sobrescritos