//listas.js
/*let usuarioEstaLogado = checkLogedUser();
console.log(usuarioEstaLogado);
if (usuarioEstaLogado) {
	novo_navbar = "          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../index.html#FAQ\">FAQ</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../register/register.html\">Registro</a>              </li>              <li class=\"nav-item dropdown\">                  <a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" href=\"#\" id=\"navbarDropdown\" role=\"button\"                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">                      Listas                  </a>                  <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">                      <li><a class=\"dropdown-item\" href=\"../listas/encontrados.html\">Petz Encontrados</a></li>                      <li><a class=\"dropdown-item\" href=\"../listas/perdidos.html\">Petz Perdidos</a></li>                      <li>                          <hr class=\"dropdown-divider\">                      </li>                      <li><a class=\"dropdown-item\" href=\"../listas/adocao.html\">Adoção</a></li>                  </ul>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../chat/chat.html\">Chat</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../MeusPetz/MeusPetz.html\">Meus Petz</a>              </li>          </ul>";
	novo_navbar += "<a class=\"nav-link active\" href=\"./pages/usuario/usuario.html\" tabindex=\"-1\" aria-disabled=\"true\">"+usuarioLogado['firstname']+"</a>";
	document.getElementById('navbarSupportedContent').innerHTML = novo_navbar;
}*/

var elem = document.querySelector("#animais_cadastrados_perdidos");
var newHtml = '<div class="col-12">'; //row

var usuarioPetz = ListarPetz(1);
var petzEncontrados = [];

newHtml += `<div class="row w-100 mx-0">`;     
for (var i = usuarioPetz.length - 1; i >= 0; i--) {
  console.log(usuarioPetz[i]);
  var petzAtual = usuarioPetz[i];
  newHtml += `     
    		<div class="col-md-4">
				<ul class="list-group">
					<li class="list-group-item" data-bs-toggle="modal" data-bs-target="#modal_` + i + `">
						<img src="` + (usuarioPetz[i].imgPath ? usuarioPetz[i].imgPath : "./img/" + usuarioPetz[i].especie.toLowerCase() + ".jpg") + `" alt="` + usuarioPetz[i].especie + `">
						<p>` + usuarioPetz[i].especie + ` ` + usuarioPetz[i].porte + `, perdido.</p>
						<div class="row">
							<div class="col">
								<span class="badge rounded-pill bg-warning">` + usuarioPetz[i].pelo_cor + `</span>
							</div>
							<div class="col">
								<span class="badge rounded-pill bg-warning">` + usuarioPetz[i].genero + `</span>
							</div>
							<div class="col">
								<span class="badge rounded-pill bg-warning">` + usuarioPetz[i].raca + `</span>
							</div>
						</div>
					</li>
				</ul>
			</div>`;
  newHtml += `

			<div class="modal fade" id="modal_` + i + `" tabindex="-1" aria-labelledby="modal-cachorro-label" aria-hidden="true">
			    <div class="modal-dialog modal-dialog-centered">
			        <div class="modal-content">
			            <div class="modal-header">
			                <h5 class="modal-title" id="modal-cachorro-label">Cachorro Encontrado</h5>
			                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			            </div>
			            <div class="modal-body">
			                <img src="` + (usuarioPetz[i].imgPath ? usuarioPetz[i].imgPath : "./img/" + usuarioPetz[i].especie.toLowerCase() + ".jpg") + `" 
			                alt="` + usuarioPetz[i].especie + `"
			                class="w-100">
			                <p>` + usuarioPetz[i].observacoes + `</p>
			            </div>
			        </div>
			    </div>
			</div>`;
			if ( Number.isInteger((i) / 3) == true ){
				newHtml += '</div><div class="row w-100 mx-0">'
			}
			if (usuarioPetz.length < 2) {newHtml += '</div>'}
}

newHtml += "</div>"; //row

elem.innerHTML = newHtml;
