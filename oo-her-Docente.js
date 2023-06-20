import User from "./oo-her-User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = 'ativo') {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} foi aprovada/o no curso de ${curso}`
    }
}

const novoDocente = new Docente('Silvia', 's@s.com', '2000-01-01')
console.log(novoDocente)
console.log(novoDocente.aprovaEstudante('Marina', 'JS'))

// Toda classe criada segue implicitamente as regras do -strict mode-

// O modo estrito do JavaScript serve para impedir que alguns comportamentos do JavaScript causem “falhas silenciosas” (transformando em erros que são lançados pelo interpretador) e corrigir alguns outros que podem induzir a bugs potenciais e comportamentos inesperados.

// JavaScript é uma linguagem que não tem breaking changes. Ou seja, não é possível corrigir certos comportamentos não desejados retirando o código das novas versões, pois há o risco de quebrar código que já está rodando em sites e aplicações na internet. O modo estrito é uma forma de ajudar a contornar alguns destes comportamentos sem que o código “não estrito” deixe de funcionar.