// infos_pet
/*
status: perdido || encontrado
especie
raca
porte
idade
pelo_cor
docil
chipado
olhos_cor
castrado
genero
observacoes
*/

// Variaveis globais
var tbPetz = localStorage.getItem("tbPetz");
tbPetz = JSON.parse(tbPetz); 
if(tbPetz == null || tbPetz == undefined){
  tbPetz = [];
}
// var usuarioLogado = localStorage.getItem("usuarioLogado");
// usuarioLogado = JSON.parse(usuarioLogado); 


//CRUD
function AdicionarPetz(petz, usuario){
  console.log(petz);
  console.log(usuario);
  var novoPetz = JSON.stringify({
  	user_name   : usuario['firstname'],
    status      : petz['status'],
    nomePet     : petz['nomePet'],
    especie     : petz['especie'],
    raca        : petz['raca'],
    porte       : petz['porte'],
    idade       : petz['idade'],
    pelo_cor    : petz['pelo_cor'],
    docil       : petz['docil'],
    chipado     : petz['chipado'],
    olhos_cor   : petz['olhos_cor'],
    castrado    : petz['castrado'],
    genero      : petz['genero'],
    observacoes : petz['observacoes']
  });
  console.log(novoPetz);
  tbPetz.push(novoPetz);
  localStorage.setItem("tbPetz", JSON.stringify(tbPetz));
  console.log("Registro adicionado.");
  return true;
}

function RecuperarPetz(PetzInfo){
  for (var i = tbPetz.length - 1; i >= 0; i--) {
    var Petz = JSON.parse(tbPetz[i]);
    console.log(Petz);
    if (Petz.user_name == PetzInfo) {
      console.log("Petz encontrado");
      return Petz;
    }
    if (Petz.nomePet == PetzInfo) {
      console.log("Petz encontrado");
      return Petz;
    }
    return false;
  }
}

function ListarPetz(PetzInfo){
  petzEncontrados = [];
  for (var i = tbPetz.length - 1; i >= 0; i--) {
    var Petz = JSON.parse(tbPetz[i]);
    if (Petz.user_name == PetzInfo) {
      console.log("Petz encontrado");
      petzEncontrados.push(Petz);
    }
    if (Petz.nomePet == PetzInfo) {
      console.log("Petz encontrado");
      petzEncontrados.push(Petz);
    }
  }
  return petzEncontrados;
}

function Editar(indice_selecionado){
  tbPetz[indice_selecionado] = JSON.stringify({
    firstname : Petz['firstname'],
    lastname  : Petz['lastname'],
    email     : Petz['email'],
    tel       : Petz['tel'],
    adress    : Petz['adress'],
    number    : Petz['number'],
    Bairro    : Petz['Bairro'],
    Cidade    : Petz['Cidade'],
    password  : Petz['password'],
    gender    : Petz['gender']
    });//Altera o item selecionado na tabela
  // console.log(tbPetz);
  PetzEditado = localStorage.setItem("tbPetz", JSON.stringify(tbPetz));
  console.log("Informações editadas.");
  console.log(PetzEditado);
  // operacao = "A"; //Volta ao padrão
  return true;
}

function Excluir(indice_selecionado){
  tbPetz.splice(indice_selecionado, 1);
  localStorage.setItem("tbPetz", JSON.stringify(tbPetz));
  console.log("Registro excluído.");
}




