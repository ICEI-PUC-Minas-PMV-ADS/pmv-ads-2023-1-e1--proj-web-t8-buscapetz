<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of cb977a2 (linksPages)
//registro
let usuarioEstaLogado = checkLogedUser();
console.log(usuarioEstaLogado);
if (usuarioEstaLogado) {
	novo_navbar = "          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../index.html#FAQ\">FAQ</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../register/register.html\">Registro</a>              </li>              <li class=\"nav-item dropdown\">                  <a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" href=\"#\" id=\"navbarDropdown\" role=\"button\"                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">                      Listas                  </a>                  <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">                      <li><a class=\"dropdown-item\" href=\"../listas/encontrados.html\">Petz Encontrados</a></li>                      <li><a class=\"dropdown-item\" href=\"../listas/perdidos.html\">Petz Perdidos</a></li>                      <li>                          <hr class=\"dropdown-divider\">                      </li>                      <li><a class=\"dropdown-item\" href=\"../listas/adocao.html\">Adoção</a></li>                  </ul>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../chat/chat.html\">Chat</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../MeusPetz/MeusPetz.html\">Meus Petz</a>              </li>          </ul>";
	novo_navbar += "<a class=\"nav-link active\" href=\"./pages/usuario/usuario.html\" tabindex=\"-1\" aria-disabled=\"true\">"+usuarioLogado['firstname']+"</a>";
	document.getElementById('navbarSupportedContent').innerHTML = novo_navbar;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of cb977a2 (linksPages)
=======
=======
>>>>>>> 4e1264f (revert)
}


function updateRacas(especie) {
  const racaInput = document.getElementById("raca");
  const racaDatalist = document.getElementById("datalistOptionsRaca");
  racaInput.value = "";
  racaDatalist.innerHTML = "";

  if (especie === "Gato") {
	racaDatalist.innerHTML = `
	  <option value="Abissínio">Abissínio</option>
	  <option value="American Bobtail">American Bobtail</option>
	  <option value="American Curl">American Curl</option>
	  <option value="American Shorthair">American Shorthair</option>
	  <option value="American Wirehair">American Wirehair</option>
	  <option value="Angorá">Angorá</option>
<option value="Angorá Turco">Angorá Turco</option>
<option value="Ashera">Ashera</option>
<option value="Asiático">Asiático</option>
<option value="Asiático de Pelo Semi-Longo">Asiático de Pelo Semi-Longo</option>
<option value="Australian Mist">Australian Mist</option>
<option value="Azul Russo">Azul Russo</option>
<option value="Balinês">Balinês</option>
<option value="Bambino">Bambino</option>
<option value="Bengal">Bengal</option>
<option value="Bobtail Americano">Bobtail Americano</option>
<option value="Bobtail Japonês">Bobtail Japonês</option>
<option value="Bombaim">Bombaim</option>
<option value="British Longhair">British Longhair</option>
<option value="British Shorthair">British Shorthair</option>
<option value="Burmês">Burmês</option>
<option value="Burmilla">Burmilla</option>
<option value="California Spangled">California Spangled</option>
<option value="Chartreux">Chartreux</option>
<option value="Chausie">Chausie</option>
<option value="Cingapura">Cingapura</option>
<option value="Colorpoint de Pelo Curto">Colorpoint de Pelo Curto</option>
<option value="Cornish Rex">Cornish Rex</option>
<option value="Curl Americano">Curl Americano</option>
<option value="Cymric">Cymric</option>
<option value="Devon Rex">Devon Rex</option>
<option value="Don Sphynx">Don Sphynx</option>
<option value="Donskoy">Donskoy</option>
<option value="Dragon Li">Dragon Li</option>
<option value="Egeu">Egeu</option>
<option value="Exótico">Exótico</option>
<option value="Gato Asiático">Gato Asiático</option>
<option value="Gato do Chipre">Gato do Chipre</option>
<option value="Gato Siberiano">Gato Siberiano</option>
<option value="German Rex">German Rex</option>
<option value="Havana">Havana</option>
<option value="Himalaio">Himalaio</option>
<option value="Jaguatirica">Jaguatirica</option>
<option value="Javanes">Javanes</option>
<option value="Khao Manee">Khao Manee</option>
<option value="Korat">Korat</option>
<option value="Kurilian Bobtail">Kurilian Bobtail</option>
<option value="LaPerml">LaPerml</option>
<option value="Levkoy Ucraniano">Levkoy Ucraniano</option>
<option value="Lykoi">Lykoi</option>
<option value="Maine Coon">Maine Coon</option>
<option value="Manx">Manx</option>
<option value="Manx de Pelo Longo">Manx de Pelo Longo</option>
<option value="Mau Árabe">Mau Árabe</option>
<option value="Mau Egípcio">Mau Egípcio</option>
<option value="Minskin">Minskin</option>
<option value="Mist Australiano">Mist Australiano</option>
<option value="Munchkin">Munchkin</option>
<option value="Nebelung">Nebelung</option>
<option value="Neva Masquerade">Neva Masquerade</option>
<option value="Norueguês da Floresta">Norueguês da Floresta</option>
<option value="Ocicat">Ocicat</option>
<option value="Ojos Azules">Ojos Azules</option>
<option value="Oregon Rex">Oregon Rex</option>
<option value="Oriental">Oriental</option>
<option value="Pelo Curto Americano">Pelo Curto Americano</option>
<option value="Pelo Curto Brasileiro">Pelo Curto Brasileiro</option>
<option value="Pelo Curto Europeu">Pelo Curto Europeu</option>
<option value="Pelo Curto Inglês">Pelo Curto Inglês</option>
<option value="Pelo Curto Oriental">Pelo Curto Oriental</option>
<option value="Pelo Longo Inglês">Pelo Longo Inglês</option>
<option value="Pelo Longo Oriental">Pelo Longo Oriental</option>
<option value="Persa">Persa</option>
<option value="Peterbald">Peterbald</option>
<option value="Pixie-bob">Pixie-bob</option>
<option value="Ragamuffin">Ragamuffin</option>
<option value="Ragdoll">Ragdoll</option>
<option value="Rex Alemão">Rex Alemão</option>
<option value="Russo Azul">Russo Azul</option>
<option value="Sagrado da Birmânia">Sagrado da Birmânia</option>
<option value="Savannah">Savannah</option>
<option value="Scottish Fold">Scottish Fold</option>
<option value="Scottish Straight">Scottish Straight</option>
<option value="Selkirk Rex">Selkirk Rex</option>
<option value="Sem Raça Definida (SRD)">Sem Raça Definida (SRD)</option>
<option value="Serengeti">Serengeti</option>
<option value="Seychellois">Seychellois</option>
<option value="Siamês">Siamês</option>
<option value="Siberiano">Siberiano</option>
<option value="Singapura">Singapura</option>
<option value="Snowshoe">Snowshoe</option>
<option value="Sokoke">Sokoke</option>
<option value="Somali">Somali</option>
<option value="Sphynx">Sphynx</option>
<option value="Suphalak">Suphalak</option>
<option value="Thai">Thai</option>
<option value="Tiffany-Chantilly">Tiffany-Chantilly</option>
<option value="Tonquinês">Tonquinês</option>
<option value="Toyger">Toyger</option>
<option value="Usuri">Usuri</option>
<option value="Van Turco">Van Turco</option>
<option value="Vankedisi">Vankedisi</option>
	`;
  } else if (especie === "Cachorro") {
	racaDatalist.innerHTML = `
	  <option value="Afegão Hound">Afegão Hound</option>
	  <option value="Affenpinscher">Affenpinscher</option>
	  <option value="Airedale Terrier">Airedale Terrier</option>
	  <option value="Akita">Akita</option>
<option value="American Staffordshire Terrier">American Staffordshire Terrier</option>
<option value="Basenji">Basenji</option>
<option value="Basset Hound">Basset Hound</option>
<option value="Beagle">Beagle</option>
<option value="Beagle Harrier">Beagle Harrier</option>
<option value="Bearded Collie">Bearded Collie</option>
<option value="Bedlington Terrier">Bedlington Terrier</option>
<option value="Bichon Frisé">Bichon Frisé</option>
<option value="Bloodhound">Bloodhound</option>
<option value="Bobtail">Bobtail</option>
<option value="Boiadeiro Australiano">Boiadeiro Australiano</option>
<option value="Boiadeiro Bernês">Boiadeiro Bernês</option>
<option value="Border Collie">Border Collie</option>
<option value="Border Terrier">Border Terrier</option>
<option value="Borzoi">Borzoi</option>
<option value="Boston Terrier">Boston Terrier</option>
<option value="Boxer">Boxer</option>
<option value="Buldogue Francês">Buldogue Francês</option>
<option value="Buldogue Inglês">Buldogue Inglês</option>
<option value="Bull Terrier">Bull Terrier</option>
<option value="Bulmastife">Bulmastife</option>
<option value="Cairn Terrier">Cairn Terrier</option>
<option value="Cane Corso">Cane Corso</option>
<option value="Cão de Água Português">Cão de Água Português</option>
<option value="Cão de Crista Chinês">Cão de Crista Chinês</option>
<option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
<option value="Chesapeake Bay Retriever">Chesapeake Bay Retriever</option>
<option value="Chihuahua">Chihuahua</option>
<option value="Chow Chow">Chow Chow</option>
<option value="Cocker Spaniel Americano">Cocker Spaniel Americano</option>
<option value="Cocker Spaniel Inglês">Cocker Spaniel Inglês</option>
<option value="Collie">Collie</option>
<option value="Coton de Tuléar">Coton de Tuléar</option>
<option value="Dachshund">Dachshund</option>
<option value="Dálmata">Dálmata</option>
<option value="Dandie Dinmont Terrier">Dandie Dinmont Terrier</option>
<option value="Dobermann">Dobermann</option>
<option value="Dogo Argentino">Dogo Argentino</option>
<option value="Dogue Alemão">Dogue Alemão</option>
<option value="Fila Brasileiro">Fila Brasileiro</option>
<option value="Fox Terrier (Pelo Duro e Pelo Liso)">Fox Terrier (Pelo Duro e Pelo Liso)</option>
<option value="Foxhound Inglês">Foxhound Inglês</option>
<option value="Galgo Escocês">Galgo Escocês</option>
<option value="Galgo Irlandês">Galgo Irlandês</option>
<option value="Golden Retriever">Golden Retriever</option>
<option value="Grande Boiadeiro Suiço">Grande Boiadeiro Suiço</option>
<option value="Greyhound">Greyhound</option>
<option value="Grifo da Bélgica">Grifo da Bélgica</option>
<option value="Husky Siberiano">Husky Siberiano</option>
<option value="Jack Russell Terrier">Jack Russell Terrier</option>
<option value="King Charles">King Charles</option>
<option value="Komondor">Komondor</option>
<option value="Labradoodle">Labradoodle</option>
<option value="Labrador Retriever">Labrador Retriever</option>
<option value="Lakeland Terrier">Lakeland Terrier</option>
<option value="Leonberger">Leonberger</option>
<option value="Lhasa Apso">Lhasa Apso</option>
<option value="Lulu da Pomerânia">Lulu da Pomerânia</option>
<option value="Malamute do Alasca">Malamute do Alasca</option>
<option value="Maltês">Maltês</option>
<option value="Mastife">Mastife</option>
<option value="Mastim Napolitano">Mastim Napolitano</option>
<option value="Mastim Tibetano">Mastim Tibetano</option>
<option value="Norfolk Terrier">Norfolk Terrier</option>
<option value="Norwich Terrier">Norwich Terrier</option>
<option value="Papillon">Papillon</option>
<option value="Pastor Alemão">Pastor Alemão</option>
<option value="Pastor Australiano">Pastor Australiano</option>
<option value="Pinscher Miniatura">Pinscher Miniatura</option>
<option value="Poodle">Poodle</option>
<option value="Pug">Pug</option>
<option value="Rottweiler">Rottweiler</option>
<option value="Sem Raça Definida (SRD)">Sem Raça Definida (SRD)</option>
<option value="ShihTzu">ShihTzu</option>
<option value="Silky Terrier">Silky Terrier</option>
<option value="Skye Terrier">Skye Terrier</option>
<option value="Staffordshire Bull Terrier">Staffordshire Bull Terrier</option>
<option value="Terra Nova">Terra Nova</option>
<option value="Terrier Escocês">Terrier Escocês</option>
<option value="Tosa">Tosa</option>
<option value="Weimaraner">Weimaraner</option>
<option value="Welsh Corgi (Cardigan)">Welsh Corgi (Cardigan)</option>
<option value="Welsh Corgi (Pembroke)">Welsh Corgi (Pembroke)</option>
<option value="West Highland White Terrier">West Highland White Terrier</option>
<option value="Whippet">Whippet</option>
<option value="Xoloitzcuintli">Xoloitzcuintli</option>
<option value="Yorkshire Terrier">Yorkshire Terrier</option> 
	`;
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of cb977a2 (linksPages)
=======
//registro
let usuarioEstaLogado = checkLogedUser();
console.log(usuarioEstaLogado);
if (usuarioEstaLogado) {
	novo_navbar = "          <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../../index.html#FAQ\">FAQ</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../register/register.html\">Registro</a>              </li>              <li class=\"nav-item dropdown\">                  <a class=\"nav-link active dropdown-toggle\" aria-current=\"page\" href=\"#\" id=\"navbarDropdown\" role=\"button\"                      data-bs-toggle=\"dropdown\" aria-expanded=\"false\">                      Listas                  </a>                  <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">                      <li><a class=\"dropdown-item\" href=\"../listas/encontrados.html\">Petz Encontrados</a></li>                      <li><a class=\"dropdown-item\" href=\"../listas/perdidos.html\">Petz Perdidos</a></li>                      <li>                          <hr class=\"dropdown-divider\">                      </li>                      <li><a class=\"dropdown-item\" href=\"../listas/adocao.html\">Adoção</a></li>                  </ul>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../chat/chat.html\">Chat</a>              </li>              <li class=\"nav-item\">                  <a class=\"nav-link active\" aria-current=\"page\" href=\"../MeusPetz/MeusPetz.html\">Meus Petz</a>              </li>          </ul>";
	novo_navbar += "<a class=\"nav-link active\" href=\"./pages/usuario/usuario.html\" tabindex=\"-1\" aria-disabled=\"true\">"+usuarioLogado['firstname']+"</a>";
	document.getElementById('navbarSupportedContent').innerHTML = novo_navbar;
>>>>>>> cb977a2b68ffe6d22f6bb8e4688e73332d698880
=======
=======
>>>>>>> 4e1264f (revert)
>>>>>>> parent of cb977a2 (linksPages)
}