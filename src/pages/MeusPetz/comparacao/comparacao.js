let usuarioEstaLogado = checkLogedUser();
console.log(usuarioEstaLogado);
if (usuarioEstaLogado) {
	novo_navbar = "          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../../index.html#FAQ\">FAQ</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../register/register.html\">Registro</a>              </li>              <li class=\"nav-item dropdown\">                  <a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" href=\"#\" id=\"navbarDropdown\" role=\"button\"                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">                      Listas                  </a>                  <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">                      <li><a class=\"dropdown-item\" href=\"../../listas/encontrados.html\">Petz Encontrados</a></li>                      <li><a class=\"dropdown-item\" href=\"../../listas/perdidos.html\">Petz Perdidos</a></li>                      <li>                          <hr class=\"dropdown-divider\">                      </li>                      <li><a class=\"dropdown-item\" href=\"../../listas/adocao.html\">Adoção</a></li>                  </ul>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../chat/chat.html\">Chat</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../MeusPetz/MeusPetz.html\">Meus Petz</a>              </li>          </ul>";
	novo_navbar += "<a class=\"nav-link active\" href=\"./pages/usuario/usuario.html\" tabindex=\"-1\" aria-disabled=\"true\">"+usuarioLogado['firstname']+"</a>";
	document.getElementById('navbarSupportedContent').innerHTML = novo_navbar;
}

var elem = document.querySelector('#colPetSelecionado');
var params = new URLSearchParams(window.location.search);
var petSelecionadoPeloUsuario = params.get('petSelecionadoPeloUsuario');
usuarioPetz = ListarPetz(petSelecionadoPeloUsuario);
console.log(usuarioPetz);

var newHtml = null;

newHtml = ' ';//row

  newHtml += '				<div class="row py-4">';
  newHtml += '                  <!-- Foto(s) -->';
  newHtml += '                  <div class="col-sm-10 mx-auto">';
  newHtml += '                      <div class="mx-auto w-100" style="max-height: 400px;">';
  newHtml += '                          <img src="' + ( usuarioPetz[0].imgPath ? usuarioPetz[0].imgPath : "https://placehold.co/500" ) + '" class="img-thumbnail rounded d-block mx-auto" alt="...">';
  newHtml += '                      </div>';
  newHtml += '                  </div>';
  newHtml += '              </div>';
  newHtml += '              <div class="row p-0">';
  newHtml += '                  <div class="w-100 text-center">';
  newHtml += '                      <h2>' + usuarioPetz[0].nomePet + '</h2>';
  newHtml += '                  </div>';
  newHtml += '              </div>';
  newHtml += '              <div class="row py-4">';
  newHtml += '                  <div class="col-sm-10 mx-auto">';
  newHtml += '                  <!-- Tag / Características -->';
  newHtml += '                      <!-- <ul class="list-group list-group-flush"> -->';
  newHtml += '                          <button type="button" class="btn btn-info mx-1 my-1">' + usuarioPetz[0].especie + '</button>';
  newHtml += '                          <button type="button" class="btn btn-info mx-1 my-1">' + usuarioPetz[0].raca + '</button>';
  newHtml += '                          <button type="button" class="btn btn-info mx-1 my-1">' + usuarioPetz[0].porte + '</button>';
  newHtml += '                          <button type="button" class="btn btn-info mx-1 my-1">' + usuarioPetz[0].idade + '</button>';
  newHtml += '                          <button type="button" class="btn btn-info mx-1 my-1">' + usuarioPetz[0].olhos_cor + '</button>';
  newHtml += '                          <button type="button" class="btn btn-info mx-1 my-1">' + (usuarioPetz[0].chipado == "Não" ? "Não " :"" ) + 'Possui chip</button>';
  newHtml += '                          <button type="button" class="btn btn-info mx-1 my-1">' + (usuarioPetz[0].castrado == "Não" ? "Não é " :"" ) + 'Castrado</button>';
  newHtml += '                          <button type="button" class="btn btn-info mx-1 my-1">' + usuarioPetz[0].docil + '</button>';
  newHtml += '                          <button type="button" class="btn btn-info mx-1 my-1">' + usuarioPetz[0].genero + '</button>';
  newHtml += '                      <!-- </ul> -->';
  newHtml += '                  </div>';
  newHtml += '              </div>';
  

newHtml +=' ';//row

elem.innerHTML = newHtml;


//Lista todos os petz desaparecidos précadastrados( esta lista não sofre interferência do usuário)
fetch('../../../data/petz.txt')
  .then(response => response.text())
  .then(text => {

  var listaAnimaisGenericos = null;
  console.log(listaAnimaisGenericos = JSON.parse(text));


  for (var i = listaAnimaisGenericos.length - 1; i >= 0; i--) {
  	console.log(listaAnimaisGenericos[i]);
  }

});