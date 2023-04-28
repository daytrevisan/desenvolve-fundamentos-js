const arrayNums = [1, 2, 3, 4];

// Para esta função, precisamos passar um parâmetro >>> num
function multiplicaPorDez( num ){
    return num * 10
}

// Já quando chamamos o método map, chamamos apenas a função multiplicaPorDez, não foi preciso passar nenhum parâmetro
const arraySomada = arrayNums.map(multiplicaPorDez)
console.log(arraySomada)

// A vantagem de se utilizar uma função externa é o reaproveitamento e organização do código

// Que é equivalente a:        // parâmetro => retorno
const arraySomada2 = arrayNums.map( num => num * 10 )
console.log(arraySomada2)
