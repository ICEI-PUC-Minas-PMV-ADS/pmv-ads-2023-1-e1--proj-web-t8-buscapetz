var elem = document.querySelector('#container_petz_usuario');

usuarioPetz = ListarPetz(usuarioLogado.firstname);
console.log(usuarioPetz);
let usuarioEstaLogado = checkLogedUser();
console.log(usuarioEstaLogado);
if (usuarioEstaLogado) {
	novo_navbar = "          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../index.html#FAQ\">FAQ</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../register/register.html\">Registro</a>              </li>              <li class=\"nav-item dropdown\">                  <a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" href=\"#\" id=\"navbarDropdown\" role=\"button\"                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">                      Listas                  </a>                  <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">                      <li><a class=\"dropdown-item\" href=\"../listas/encontrados.html\">Petz Encontrados</a></li>                      <li><a class=\"dropdown-item\" href=\"../listas/perdidos.html\">Petz Perdidos</a></li>                      <li>                          <hr class=\"dropdown-divider\">                      </li>                      <li><a class=\"dropdown-item\" href=\"../listas/adocao.html\">Adoção</a></li>                  </ul>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../chat/chat.html\">Chat</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../MeusPetz/MeusPetz.html\">Meus Petz</a>              </li>          </ul>";
	novo_navbar += "<a class=\"nav-link active\" href=\"./pages/usuario/usuario.html\" tabindex=\"-1\" aria-disabled=\"true\">"+usuarioLogado['firstname']+"</a>";
	document.getElementById('navbarSupportedContent').innerHTML = novo_navbar;
}

var newHtml = null;

newHtml = '   <div class="row align-items-start">';//row

  petzEncontrados = [];
  for (var i = usuarioPetz.length - 1; i >= 0; i--) {
  	console.log(usuarioPetz[i]);
    var petzAtual = usuarioPetz[i];
		newHtml +='     <div class="col-md-6">';
		newHtml +='       <section class="mx-auto my-4 p-3">';
		newHtml +='         <div class="row">';
		newHtml +='           <div class="col-12 col-sm-10 mx-auto">';
		newHtml +='             <div class="mx-auto w-100" style="max-height: 400px;">';
		newHtml +='               <img src="'+(petzAtual['imgPath']?petzAtual['imgPath']:"https://www.patasdacasa.com.br/sites/patasdacasa/files/styles/webp/public/noticias/2022/06/gato-com-heterocromia-quais-as-causas-relacao-com-surdez-cuidados-e-muito-mais.jpg.webp?itok=N9nTRxYI")+'" class="img-thumbnail rounded d-block mx-auto" id="img_pet_'+i+'" alt="...">';
		newHtml +='             </div>';
		newHtml +='           </div>';
		newHtml +='         </div>';
		newHtml +='         <div class="row">';
		newHtml +='           <div class="col-12 col-sm-10 mx-auto">';
		newHtml +='             <div class="w-100 text-center">';
		newHtml +='               <h2>' + petzAtual['nomePet'] + '</h2>';
		newHtml +='             </div>';
		newHtml +='           </div>';
		newHtml +='         </div>';
		newHtml +='         <div class="row">';
		newHtml +='           <div class="col-12 col-sm-10 mx-auto">';
		newHtml +='             <div class="mx-auto">';
		newHtml +='               <button type="button" class="btn btn-info mx-1 my-1">' + petzAtual['especie'] + '</button>';
		newHtml +='               <button type="button" class="btn btn-info mx-1 my-1">' + petzAtual['raca'] + '</button>';
		newHtml +='               <button type="button" class="btn btn-info mx-1 my-1">' + petzAtual['porte'] + '</button>';
		newHtml +='               <button type="button" class="btn btn-info mx-1 my-1">' + petzAtual['idade'] + '</button>';
		newHtml +='               <button type="button" class="btn btn-info mx-1 my-1">' + petzAtual['olhos_cor'] + '</button>';
		newHtml +='               <button type="button" class="btn btn-info mx-1 my-1">' + petzAtual['chipado'] + '</button>';
		newHtml +='               <button type="button" class="btn btn-info mx-1 my-1">' + petzAtual['castrado'] + '</button>';
		newHtml +='               <button type="button" class="btn btn-info mx-1 my-1">' + petzAtual['docil'] + '</button>';
		newHtml +='               <button type="button" class="btn btn-info mx-1 my-1">' + petzAtual['genero'] + '</button>';
		newHtml +='               <section class="my-3"><a href="./comparacao/comparacao.html?petSelecionadoPeloUsuario='+ petzAtual['nomePet'] +'" class="btn btn-primary">COMPARE</a></section>';
		newHtml +='             </div>';
		newHtml +='           </div>';
		newHtml +='         </div>';
		newHtml +='       </section>';
		newHtml +='     </div>  ';
  }

newHtml +='   </div>';//row

elem.innerHTML = newHtml;