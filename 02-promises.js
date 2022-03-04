/* ENTENDENDO O CICLO DE VIDA DE FUNÇÕES ASSÍNCRONAS
1 - EVENT LOOP 
2 - FUNÇÕES ASSÍNCRONAS
3 - CALLBACKS x PROMISES
*/

//ENTENDENDO NA PRÁTICA COMO FUNCIONA OS CALLBACKS

function obterUsuario() {
  setTimeout(() => {
    return {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date(),
    };
  }, 1000);
}

function obterTelefone(idUsuario) {
  setTimeout(() => {
    return {
      telefone: "988504953",
      ddd: 84,
    };
  }, 2000);
}

function obterEndereco(idUsuario) {}

const usuario = obterUsuario();
const telefone = obterTelefone(usuario.id);

console.log("usuario", usuario);
console.log("telefone", telefone);
