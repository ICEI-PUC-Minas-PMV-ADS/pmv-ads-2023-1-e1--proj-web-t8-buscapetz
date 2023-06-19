var elem = document.querySelector('#container_petz_usuario');

usuarioPetz = ListarPetz(usuarioLogado.firstname);
console.log(usuarioPetz);

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