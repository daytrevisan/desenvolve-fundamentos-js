import User from "./oo-encap-User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = 'ativo') {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} foi aprovada/o no curso de ${curso}`
    }
}

const novoDocente = new Docente('Paulo', 'p@p.com', '11122233345')
// console.log(novoDocente)
// console.log(novoDocente.aprovaEstudante('Giancarlo', 'Java'))