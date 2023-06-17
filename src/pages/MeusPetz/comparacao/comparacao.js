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
var listaAnimaisGenericos = null;
fetch('../../../data/petz.txt')
  .then(response => response.text())
  .then(text => {

	  listaAnimaisGenericos = JSON.parse(text).petz;
	  console.log(listaAnimaisGenericos);
	  console.log(listaAnimaisGenericos[0]);

		var elemList = document.querySelector('#colunaAnimalListaGenerico');
	  newHtml = ' ';//row

	  //estrutura inicial da section

    newHtml += '            <!-- Subtítulo -->';
    newHtml += '            <div class="my-3 mb-4 col-sm-8 mx-auto text-center">';
    newHtml += '                <h2 class="text-secondary">Achamos que esses animais são semelhantes ao seu, por favor verifique</h2>';
    newHtml += '            </div>';

    newHtml += '            <div class="row mb-5 mt-0">';

		for (var i = 0; i <= Object.keys(listaAnimaisGenericos).length - 1; i++) {
			// console.log((i+1) / 3);
			// console.log(Number.isInteger((i+1) / 3));
			if (i > 5) { newHtml += '</div>';break;}
		  var eachPetlistItem = listaAnimaisGenericos[i];
			// console.log(eachPetlistItem);
			newHtml += '							<div class="col-4 ' + (Number.isInteger((i+1) / 3) === false ? "border-end" : "") + '">';
      newHtml += '                  <div class="row py-4">';
      newHtml += '                      <!-- Foto(s) -->';
      newHtml += '                      <div class="col-sm-10 mx-auto">';
      newHtml += '                          <div class="mx-auto w-100" style="max-height: 400px;">';
      newHtml += '                              <img src="' + ( eachPetlistItem.imgPath ? eachPetlistItem.imgPath : "https://placehold.co/500" ) + 'https://placehold.co/500" class="img-thumbnail rounded d-block mx-auto" alt="...">';
      newHtml += '                          </div>';
      newHtml += '                      </div>';
      newHtml += '                  </div>';
      newHtml += '                  <div class="row p-0">';
      newHtml += '                      <div class="w-100 text-center">';
      newHtml += '                          <h2>Pet 1</h2>';
      newHtml += '                      </div>';
      newHtml += '                  </div>';
      newHtml += '                  <div class="row py-4">';
      newHtml += '                      <div class="col-sm-10 mx-auto">';
      newHtml += '                      <!-- Tag / Características -->';
      newHtml += '                          <!-- <ul class="list-group list-group-flush"> -->';
      newHtml += '                              <button type="button" class="btn btn-info mx-1 my-1">' + eachPetlistItem.especie + '</button>';
      newHtml += '                              <button type="button" class="btn btn-info mx-1 my-1">' + eachPetlistItem.raca + '</button>';
      newHtml += '                              <button type="button" class="btn btn-info mx-1 my-1">' + eachPetlistItem.porte + '</button>';
      newHtml += '                              <button type="button" class="btn btn-info mx-1 my-1">' + eachPetlistItem.idade + '</button>';
      newHtml += '                              <button type="button" class="btn btn-info mx-1 my-1">' + eachPetlistItem.olhos_cor + '</button>';
      newHtml += '                              <button type="button" class="btn btn-info mx-1 my-1">' + (eachPetlistItem.chipado == "Não" ? "Não " :"" ) + 'Possui chip</button>';
      newHtml += '                              <button type="button" class="btn btn-info mx-1 my-1">' + (eachPetlistItem.castrado == "Não" ? "Não é " :"" ) + 'Castrado</button>';
      newHtml += '                              <button type="button" class="btn btn-info mx-1 my-1">' + eachPetlistItem.docil + '</button>';
      newHtml += '                              <button type="button" class="btn btn-info mx-1 my-1">' + eachPetlistItem.genero + '</button>';
      newHtml += '                          <!-- </ul> -->';
      newHtml += '                      </div>';
      newHtml += '                  </div>';
      newHtml += '              </div>';


      console.log((i+1));
      console.log((i+1) / 3);
      console.log(Number.isInteger((i+1) / 3));
			if ( Number.isInteger((i+1) / 3) == true ){
				newHtml += '</div><div class="row mb-5 mt-0">'
			}
		}

	  newHtml += ' ';//row

	  newHtml += '						<div class="row ">';
    newHtml += '                <div class="col-6 mx-auto">';
    newHtml += '                    <nav aria-label="...">';
    newHtml += '                        <ul class="pagination">';
    newHtml += '                          <li class="page-item disabled">';
    newHtml += '                            <span class="page-link">Anterior</span>';
    newHtml += '                          </li>';
    newHtml += '                          <li class="page-item active"  aria-current="page">';
    newHtml += '                            <span class="page-link">1</span>';
    newHtml += '                          </li>';
    newHtml += '                          <li class="page-item">';
    newHtml += '                            <a class="page-link" href="#">2</a>';
    newHtml += '                          </li>';
    newHtml += '                          <li class="page-item"><a class="page-link" href="#">3</a></li>';
    newHtml += '                          <li class="page-item"><a class="page-link" href="#">4</a></li>';
    newHtml += '                          <li class="page-item disabled" aria-current="page">';
    newHtml += '                            <span class="page-link">...</span>';
    newHtml += '                          </li>';
    newHtml += '                          <li class="page-item"><a class="page-link" href="#">19</a></li>';
    newHtml += '                          <li class="page-item"><a class="page-link" href="#">20</a></li>';
    newHtml += '                          <li class="page-item"><a class="page-link" href="#">21</a></li>';
    newHtml += '                          <li class="page-item">';
    newHtml += '                            <a class="page-link" href="#">Próxima</a>';
    newHtml += '                          </li>';
    newHtml += '                        </ul>';
    newHtml += '                    </nav>';
    newHtml += '                </div>';
    newHtml += '            </div>';

	  // console.log(newHtml);
		
		elemList.innerHTML = newHtml;

	});