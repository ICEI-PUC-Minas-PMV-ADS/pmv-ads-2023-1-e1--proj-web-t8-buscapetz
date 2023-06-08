// Variaveis globais
var tbUsuario = localStorage.getItem("tbUsuario");
tbUsuario = JSON.parse(tbUsuario); 
if(tbUsuario == null || tbUsuario == undefined){
  tbUsuario = [];
}
var usuarioLogado = localStorage.getItem("usuarioLogado");
usuarioLogado = JSON.parse(usuarioLogado); 
// if(usuarioLogado == null || usuarioLogado == undefined){
//   usuarioLogado = [];
// }

//CRUD
function AdicionarUsuario(usuario){
  // console.log(usuario);
  var novoUsuario = JSON.stringify({
    firstname : usuario['firstname'],
    lastname  : usuario['lastname'],
    email     : usuario['email'],
    tel       : usuario['tel'],
    adress    : usuario['adress'],
    number    : usuario['number'],
    Bairro    : usuario['Bairro'],
    Cidade    : usuario['Cidade'],
    password  : usuario['password'],
    gender    : usuario['gender']
  });
  console.log(novoUsuario);
  tbUsuario.push(novoUsuario);
  localStorage.setItem("tbUsuario", JSON.stringify(tbUsuario));
  console.log("Registro adicionado.");
  return true;
}

function RecuperarUsuario(usuarioInfo){
  for (var i = tbUsuario.length - 1; i >= 0; i--) {
    var usuario = JSON.parse(tbUsuario[i]);
    console.log(usuario);
    if (usuario.firstname == usuarioInfo) {
      console.log("usuario encontrado");
      return usuario;
    }
    if (usuario.email == usuarioInfo) {
      console.log("usuario encontrado");
      return usuario;
    }
    return false;
  }

}

function Editar(indice_selecionado){
  tbUsuario[indice_selecionado] = JSON.stringify({
    firstname : usuario['firstname'],
    lastname  : usuario['lastname'],
    email     : usuario['email'],
    tel       : usuario['tel'],
    adress    : usuario['adress'],
    number    : usuario['number'],
    Bairro    : usuario['Bairro'],
    Cidade    : usuario['Cidade'],
    password  : usuario['password'],
    gender    : usuario['gender']
    });//Altera o item selecionado na tabela
  // console.log(tbUsuario);
  usuarioEditado = localStorage.setItem("tbUsuario", JSON.stringify(tbUsuario));
  console.log("Informações editadas.");
  console.log(usuarioEditado);
  // operacao = "A"; //Volta ao padrão
  return true;
}

function Excluir(indice_selecionado){
  tbUsuario.splice(indice_selecionado, 1);
  localStorage.setItem("tbUsuario", JSON.stringify(tbUsuario));
  console.log("Registro excluído.");
}

/////////////////////////////Usuarios////////////////////////////

function loginUsuario(email, pass) {
  var usuarioLogin = RecuperarUsuario(email);
  if (usuarioLogin) {
    if (usuarioLogin.password == pass) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogin));
      return true;
    }
    return false;
  }
  return false;
}

function checkLogedUser(){
  if(usuarioLogado == null || usuarioLogado == undefined){
    return false;
  }
  return true;
}