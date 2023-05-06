const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
}

// Para exibir somente informações que não conste objetos nem funções
// Fazemos a validação por *typeof* para verificar o tipo de dado
// Vale lembrar que array é considerado objeto no JS, então uma chave com informação em array não retorna

let dados = "";
for (let info in paciente) {
if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
  continue
} else {
 dados += `${info} ==> ${paciente[info]}
  `}
};

// Utilizando For-In
// Irá retornar para a variável info o nome da chave do objeto, ou seja, o nome da propriedade do objeto

for( let info in paciente ) {
    console.log(info);
}