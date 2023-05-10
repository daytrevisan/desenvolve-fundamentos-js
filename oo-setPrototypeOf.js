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