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
  // console.log(petz);
  // console.log(usuario);
  var id;
  
  if(tbPetz == 0)
    id = 1
  else
    id = JSON.parse(tbPetz[tbPetz.length - 1]).id + 1;

  var novoPetz = JSON.stringify({
    user_name   : usuario['firstname'],
    id          : id,
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
    observacoes : petz['observacoes'],
    imgPath     : petz['imgPath']
  });
  // console.log(novoPetz);
  tbPetz.push(novoPetz);
  localStorage.setItem("tbPetz", JSON.stringify(tbPetz));
  // console.log("Registro adicionado.");
  
  localStorage.removeItem("image");
  // console.log(localStorage.getItem('image'));

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
    if (Petz.status == PetzInfo) {
      console.log("Petz encontrado");
      petzEncontrados.push(Petz);
    }
  }
  return petzEncontrados;
}
 
function Editar(Petz){
  var tbPet = JSON.parse(tbPetz);
  var pet = tbPet.find(x => x.id == Petz.id)

  if(pet != null){
      pet = JSON.stringify({
      status      : Petz['status'],
      especie     : Petz['especie'],
      raca        : Petz['raca'],
      porte       : Petz['porte'],
      idade       : Petz['idade'],
      pelo_cor    : Petz['pelo_cor'],
      docil       : Petz['docil'],
      chipado     : Petz['chipado'],
      olhos_cor   : Petz['olhos_cor'],
      castrado    : Petz['castrado'],
      genero      : Petz['genero'],
      observacoes : Petz['observacoes'],
    });//Altera o item selecionado na tabela
    // console.log(tbPetz);
    PetzEditado = localStorage.setItem("tbPetz", JSON.stringify(tbPet));
    console.log("Informações editadas.");
    console.log(PetzEditado);
    
    return true;
  }

  return false;
}

function ExcluirPetz(indice_selecionado){
  tbPetz.splice(indice_selecionado, 1);
  localStorage.setItem("tbPetz", JSON.stringify(tbPetz));
  console.log("Registro excluído.");
}

//Imagens
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
