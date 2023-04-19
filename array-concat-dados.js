// Podemos concatenar dados dentro de um array
// Pois quando o CONCAT() recebe um array como parâmetro > são os ELEMENTOS QUE SÃO CONCATENADOS (e não o array em si)

const arrayOriginal = ['Julia', 'Ricardo', 'Mônica', 'Kelly'];
const arrayConcat = arrayOriginal.concat('André', 'Paulo');

console.log(arrayOriginal);
console.log(arrayConcat);

// O mesmo acontece se passarmos mais de um array como parâmetro 

const arrayConcat2 = arrayOriginal.concat(['Fernanda', 'Alberto'], ["Ricardo", "Ana"], ["Marcelo", "Bia"]);
console.log(arrayConcat2);

// --------------------------------------------------------------------------------------------------------

const arrayOriginalNumerico = [50, 68, 85];
const arrayConcatNumerico = arrayOriginalNumerico.concat([80, [90, 100]]);

console.log(arrayOriginalNumerico);
console.log(arrayConcatNumerico);

// Nesta última concatenação, [90, 100] foi considerado como um único elemento

// CONCAT() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada
// Caso isso não seja necessário, considere utilizar PUSH() ou SPLICE() para inserir novos elementos ou fazer alterações no array original.