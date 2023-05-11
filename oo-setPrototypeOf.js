// Herança de Protótipo com setPrototypeOf

const user = {
    nome: "Andressa",
    email: "a@email.com",
    nascimento: "2000/02/28",
    role: "estudante",
    ativo: "true",
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'm@email.com',
    criarCursos() {
        console.log('Curso criado!');
    }
}

// Chamando método do objeto
// Parâmetros: (quem recebe, de onde recebe)

Object.setPrototypeOf(admin, user);
admin.criarCursos();
admin.exibirInfos();

// O método -exibirInfos()- não seria encontrado junto a -admin- se não tivéssemos apontado para o protótipo
// Essa dinâmica de 'pingar' de objeto em objeto procurando o método é chamado de CADEIA DE PROTÓTIPO

// Ao acessar a propriedade -proto- no console do navegador (o VSCode não o interpreta), temos:
// admin.__proto__
// O retorno serão os dados do *objeto* -user- indicando que o protótipo de -admin- é o -user-

// Acessando mais uma hierarquia:
// admin.__proto__.__proto__
// O retorno será um outro objeto, que é o objeto construtor de *object*
// Todos os objetos criados com JS têm dentro dele um objeto que é o protótipo básico, que traz todos os métodos e as propriedades que são compartilhados em todos os objetos que criamos
// Os objetos criados a partir de construtores, todos eles têm em comum esse primeiro protótipo, que é o protótipo de *object*, do objeto tipo *object*

// Uma terceira hierarquia de __proto__
// admin.__proto__.__proto__.__proto__
// retorno -null-
// Significa que chegamos no final da cadeia de protótipo >>> então saímos de admin, passamos pro user, chegamos no protótipo inicial do tipo objeto, tipo object, e acabou, agora ele retornou null, não tem mais para onde ir
// Isso significa que existe uma cadeia que liga -admin- e -user-, -user- porque o definimos como protótipo de -admin-, é importante frisarmos isso, e um outro objeto debaixo de todos esses