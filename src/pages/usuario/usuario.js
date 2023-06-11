//usuario.js
let usuarioEstaLogado = checkLogedUser();
console.log(usuarioEstaLogado);
if (usuarioEstaLogado) {
	novo_navbar = "          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../index.html#FAQ\">FAQ</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../register/register.html\">Registro</a>              </li>              <li class=\"nav-item dropdown\">                  <a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" href=\"#\" id=\"navbarDropdown\" role=\"button\"                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">                      Listas                  </a>                  <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">                      <li><a class=\"dropdown-item\" href=\"../listas/encontrados.html\">Petz Encontrados</a></li>                      <li><a class=\"dropdown-item\" href=\"../listas/perdidos.html\">Petz Perdidos</a></li>                      <li>                          <hr class=\"dropdown-divider\">                      </li>                      <li><a class=\"dropdown-item\" href=\"../listas/adocao.html\">Adoção</a></li>                  </ul>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../chat/chat.html\">Chat</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../MeusPetz/MeusPetz.html\">Meus Petz</a>              </li>          </ul>";
	novo_navbar += "<a class=\"nav-link active\" href=\"./pages/usuario/usuario.html\" tabindex=\"-1\" aria-disabled=\"true\">"+usuarioLogado['firstname']+"</a>";
	document.getElementById('navbarSupportedContent').innerHTML = novo_navbar;
}

if (usuarioLogado) {
	document.getElementById('firstname').value = usuarioLogado['firstname'];
	document.getElementById('lastname').value = usuarioLogado['lastname'];
	document.getElementById('email').value = usuarioLogado['email'];
	document.getElementById('tel').value = usuarioLogado['tel'];
	document.getElementById('adress').value = usuarioLogado['adress'];
	document.getElementById('number').value = usuarioLogado['number'];
	document.getElementById('Bairro').value = usuarioLogado['Bairro'];
	document.getElementById('Cidade').value = usuarioLogado['Cidade'];
	document.getElementById('password').value = usuarioLogado['password'];
	document.getElementById('confirmPassword').value = usuarioLogado['confirmPassword'];
	console.log(usuarioLogado['gender']);
	switch(usuarioLogado['gender']){
		case 'feminino':
			document.getElementById('female').checked = true;
			break;
		case 'masculino':
			document.getElementById('male').checked = true;
			break;
		case 'pnd':
			document.getElementById('none').checked = true;
			break;
	}
}