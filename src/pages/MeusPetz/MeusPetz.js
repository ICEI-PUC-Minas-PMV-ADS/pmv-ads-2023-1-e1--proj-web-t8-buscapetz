var elem = document.querySelector("#container_petz_usuario");

usuarioPetz = ListarPetz(usuarioLogado.firstname);
console.log(usuarioPetz);

var newHtml = '<div class="row align-items-start">'; //row
petzEncontrados = [];
for (var i = usuarioPetz.length - 1; i >= 0; i--) {
  console.log(usuarioPetz[i]);
  var petzAtual = usuarioPetz[i];
  newHtml += `     
    <div class="col-md-6">
      <section class="mx-auto my-4 p-3">
        <div class="row">
          <div class="col-12 col-sm-10 mx-auto">
            <div class="mx-auto w-100" style="max-height: 400px;">
              <img src="${petzAtual["imgPath"] ? petzAtual["imgPath"] : 'https://www.patasdacasa.com.br/sites/patasdacasa/files/styles/webp/public/noticias/2022/06/gato-com-heterocromia-quais-as-causas-relacao-com-surdez-cuidados-e-muito-mais.jpg.webp?itok=N9nTRxYI'}" class="img-thumbnail rounded d-block mx-auto" id="img_pet_${i}" alt="...">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-10 mx-auto">
            <div class="w-100 text-center">
              <h2>${petzAtual['nomePet']}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-10 mx-auto">
            <div class="mx-auto">
              <button type="button" class="btn btn-info mx-1 my-1">${petzAtual['especie']}</button>
              <button type="button" class="btn btn-info mx-1 my-1">${petzAtual['raca']}</button>
              <button type="button" class="btn btn-info mx-1 my-1">${petzAtual['porte']}</button>
              <button type="button" class="btn btn-info mx-1 my-1">${petzAtual['idade']}</button>
              <button type="button" class="btn btn-info mx-1 my-1">${petzAtual['olhos_cor']}</button>
              <button type="button" class="btn btn-info mx-1 my-1">${petzAtual['chipado']}</button>
              <button type="button" class="btn btn-info mx-1 my-1">${petzAtual['castrado']}</button>
              <button type="button" class="btn btn-info mx-1 my-1">${petzAtual['docil']}</button>
              <button type="button" class="btn btn-info mx-1 my-1">${petzAtual['genero']}</button>
              <div class="row">
                <div class="col-6 col-sm-6 mx-auto">
                  <div class="d-flex justify-content-between">
                    <section class="my-3"><a href="./comparacao/comparacao.html?petSelecionadoPeloUsuario=${petzAtual['nomePet']}" class="btn btn-primary">COMPARE</a></section>
                    <section class="my-3"><a href="../register/edicao/EditAnimal.html?petSelecionadoPeloUsuario=${petzAtual['nomePet']}" class="btn btn-primary">EDITAR</a></section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>`;
}

newHtml += "</div>"; //row

elem.innerHTML = newHtml;
