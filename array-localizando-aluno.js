// Métodos INCLUDE() e IndexOf()
// Com os métodos INCLUDES() e INDEXOF() é possível fazer uma varredura pelo array para localizar algum item pelo índice

// Desafio: Procurar o nome do aluno e retornar sua respectiva nota

const listaDeNomes = ['João', 'Juliana', 'Caio', 'Ana'];

const mediaDeAlunos = [10, 7, 9, 6.5];

let listaDeNomesEMedias = [listaDeNomes, mediaDeAlunos];

// Gerando uma arrow function para validação que recebe o nome do aluno como parâmetro
// Na validação com if, procuramos no array de duas dimensões se o primeiro array ([0] lista de nomes) é encontrado
// Em seguida, buscamos este índice como referência através do indexOf;
// O retorno deve ser da lista de nomes + índice correspondente e a nota + índice correspondente  

// includes -> retorno booleano
// indexOf -> retorna o número do índice / posição no array

const exibeNomeEMedia = (listaDeNomes) => {

    if(listaDeNomesEMedias[0].includes(listaDeNomes)) {
        let indice = listaDeNomesEMedias[0].indexOf(listaDeNomes);
        return listaDeNomesEMedias[0][indice] + ', sua média é ' + listaDeNomesEMedias[1][indice]
    
    } else {
        return 'Aluno não cadastrado'
    }

}

console.log(exibeNomeEMedia('Caio'));