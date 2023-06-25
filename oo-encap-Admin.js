import User from "./oo-encap-User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = 'ativo') {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, vagas) {
        return `O curso de ${nomeCurso} foi criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '99988877766')
// console.log(novoAdmin.criarCurso('JS', 20))