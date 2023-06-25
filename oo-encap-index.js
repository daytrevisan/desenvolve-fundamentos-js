import User from "./oo-encap-User.js";
import Docente from "./oo-encap-Docente.js";
import Admin from "./oo-encap-Admin.js";

const novoUser = new User('Mariana', 'm@m.com', '2000-01-01')
console.log(novoUser.exibirInfos())

// Deste modo, o nome pode ser acessado e alterado

// novoUser.#nome = 'Márcia'
// console.log(novoUser.exibirInfos())

// Acessando o método privado #montaObjUser

// console.log(novoUser.#montaObjUser())

// O acesso não é permitido, pois não é possível acessar o método por fora da classe

console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2000-01-01')
console.log(novoAdmin.exibirInfos())

