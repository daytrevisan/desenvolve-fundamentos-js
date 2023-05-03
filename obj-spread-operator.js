//

const fichaGuerreiro = {
    nome: 'Aragon',
    classe: 'guerreiro'
}

const equipoGuerreiro = {
    espada: 'Andúril',
    capa: 'capa élfica +2'
}

const guerreiro1 = [fichaGuerreiro, equipoGuerreiro];
console.log(guerreiro1);

// [
//     { nome: 'Aragon', classe: 'guerreiro' },
//     { espada: 'Andúril', capa: 'capa élfica +2' }
// ]

const guerreiro2 = {...fichaGuerreiro, ...equipoGuerreiro};
console.log(guerreiro2);

// {
//   nome: 'Aragon',
//   classe: 'guerreiro',
//   espada: 'Andúril',
//   capa: 'capa élfica +2'
// }

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