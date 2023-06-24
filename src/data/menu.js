//usuario.js
let usuarioEstaLogado = checkLogedUser();
console.log(usuarioEstaLogado);
if (usuarioEstaLogado) {
	//novo_navbar = "          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../index.html#FAQ\">FAQ</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../register/register.html\">Registro</a>              </li>              <li class=\"nav-item dropdown\">                  <a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" href=\"#\" id=\"navbarDropdown\" role=\"button\"                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">                      Listas                  </a>                  <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">                      <li><a class=\"dropdown-item\" href=\"../listas/encontrados.html\">Petz Encontrados</a></li>                      <li><a class=\"dropdown-item\" href=\"../listas/perdidos.html\">Petz Perdidos</a></li>                      <li>                          <hr class=\"dropdown-divider\">                      </li>                      <li><a class=\"dropdown-item\" href=\"../listas/adocao.html\">Adoção</a></li>                  </ul>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../chat/chat.html\">Chat</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../MeusPetz/MeusPetz.html\">Meus Petz</a>              </li>          </ul>";
	//novo_navbar += "<ul class=\"navbar-nav me-auto mb-2 mb-lg-0\"><li class=\"nav-item dropdown\"><a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">"+usuarioLogado['firstname']+"</a><ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"><li><a class=\"dropdown-item\" href=\"../listas/encontrados.html\">Petz Encontrados</a></li><li><a class=\"dropdown-item\" href=\"../listas/perdidos.html\">Petz Perdidos</a></li><li><hr class=\"dropdown-divider\"></li><li><a class=\"dropdown-item\" href=\"../listas/adocao.html\">Adoção</a></li></ul></li></ul>";
	
	
	novo_navbar = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
                "  <div class=\"container-fluid\">\n" +
                "      <a class=\"navbar-brand\" href=\"../../index.html\"><img src='../../assets/imgs/BuscaPetzHeader.png' class='logo-header'>Busca Petz</a>\n" +
                "      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\"\n" +
                "          data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n" +
                "          aria-label=\"Toggle navigation\">\n" +
                "          <span class=\"navbar-toggler-icon\"></span>\n" +
                "      </button>\n" +
                "      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
                "          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n" +
                "              <li class=\"nav-item\">\n" +
                "                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../index.html#FAQ\">FAQ</a>\n" +
                "              </li>\n" +
                "              <li class=\"nav-item\">\n" +
                "                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../register/register.html\">Registro</a>\n" +
                "              </li>\n" +
                "              <li class=\"nav-item dropdown\">\n" +
                "                  <a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n" +
                "                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n" +
                "                      Listas\n" +
                "                  </a>\n" +
                "                  <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" +
                "                      <li><a class=\"dropdown-item\" href=\"../listas/encontrados.html\">Petz Encontrados</a></li>\n" +
                "                      <li><a class=\"dropdown-item\" href=\"../listas/perdidos.html\">Petz Perdidos</a></li>\n" +
                "                      <li>\n" +
                "                          <hr class=\"dropdown-divider\">\n" +
                "                      </li>\n" +
                "                      <li><a class=\"dropdown-item\" href=\"../listas/adocao.html\">Adoção</a></li>\n" +
                "                  </ul>\n" +
                "              </li>\n" +
                "              <li class=\"nav-item\">\n" +
                "                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../chat/chat.html\">Chat</a>\n" +
                "              </li>\n" +
                "              <li class=\"nav-item\">\n" +
                "                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../MeusPetz/MeusPetz.html\">Meus Petz</a>\n" +
                "              </li>\n" +
                "          </ul>\n" +
                "\t\t  <ul class=\"nav-link active ms-auto list-unstyled\">\n" +
                "\t\t<li class=\"nav-item dropdown\">\n" +
                "                  <a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" id=\"navbarDropdown\" role=\"button\"\n" +
                "                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n" +usuarioLogado['firstname']+
                "                      \n" +
                "                  </a>\n" +
                "                  <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" +
                "                      <li><a class=\"dropdown-item\" href=\"../usuario/usuario.html\">Meu Perfil</a></li>\n" +
                "                      <li><a class=\"dropdown-item\" onclick=\"deslogar()\" href=\"../../index.html\">Deslogar</a></li>\n" +
                "                  </ul>\n" +
                "              </li>\n" +
                "\t\t  </ul>\n" +
                "          \n" +
                "\n" +
                "      </div>\n" +
                "  </div>\n" +
                "</nav>";
				document.getElementById('navbarSupportedContent').innerHTML = novo_navbar;
} else {
	novo_navbar = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
              "      <div class=\"container-fluid\">\n" +
              "        <a class=\"navbar-brand\" href=\"./index.html\">Busca Petz</a>\n" +
              "        <button\n" +
              "          class=\"navbar-toggler\"\n" +
              "          type=\"button\"\n" +
              "          data-bs-toggle=\"collapse\"\n" +
              "          data-bs-target=\"#navbarSupportedContent\"\n" +
              "          aria-controls=\"navbarSupportedContent\"\n" +
              "          aria-expanded=\"false\"\n" +
              "          aria-label=\"Toggle navigation\"\n" +
              "        >\n" +
              "          <span class=\"navbar-toggler-icon\"></span>\n" +
              "        </button>\n" +
              "\n" +
              "        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContentBasic\">\n" +
              "          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n" +
              "            <li class=\"nav-item\">\n" +
              "              <a class=\"nav-link active\" aria-current=\"page\" href=\"#FAQ\"\n" +
              "                >FAQ</a\n" +
              "              >\n" +
              "            </li>\n" +
              "          </ul>\n" +
              "          <a\n" +
              "            class=\"nav-link active ms-auto\"\n" +
              "            href=\"./pages/login/login.html\"\n" +
              "            tabindex=\"-1\"\n" +
              "            aria-disabled=\"true\"\n" +
              "            >Login</a>\n" +
              "        </div>\n" +
              "      </div>\n" +
              "    </nav>";
	document.getElementById('navbarSupportedContent').innerHTML = novo_navbar;
}