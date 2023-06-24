/////////Adocao
//////////////Encontrados


//Lista inicial de animais
var inicialPetz = [];
fetch('../../data/petz.txt')
  .then(response => response.text())
  .then(text => {
		  todosAnimais = JSON.parse(text).petz;
		  for (var i = Object.keys(todosAnimais).length - 1; i >= 0; i--) {
		  	if (todosAnimais[i].status == ADOCAO) {
		  		inicialPetz.push(todosAnimais[i]);
		  		console.log(inicialPetz);
		  	}
		  		console.log(todosAnimais[i]);
		  		console.log(inicialPetz);
		  }
	var elem_encontrados_iniciais = document.querySelector("#animais_adocao_iniciais");
	var newHtml = '<div class="col-12">'; //row

	// var inicialPetz = ListarPetz();
	// var petzEncontrados = [];

	newHtml += `<div class="row w-100 mx-0">`;     
	for (var i = 0; i <= Object.keys(inicialPetz).length - 1; i++) {
	  var eachPetlistItem = inicialPetz[i];
	  // console.log(inicialPetz[i]);
	  var petzAtual = inicialPetz[i];
	  newHtml += `     
	    		<div class="col-md-4">
					<ul class="list-group">
						<li class="list-group-item" data-bs-toggle="modal" data-bs-target="#modal_iniciais_` + i + `">
							<img src="` + (eachPetlistItem.imgPath ? "../../assets/imgs/" + eachPetlistItem.imgPath : "./img/" + eachPetlistItem.especie.toLowerCase() + ".jpg") + `" alt="` + eachPetlistItem.especie + `">
							<p>` + eachPetlistItem.especie + ` ` + eachPetlistItem.porte + `, perdido.</p>
							<div class="row">
								<div class="col">
									<span class="badge rounded-pill bg-warning">` + eachPetlistItem.pelo_cor + `</span>
								</div>
								<div class="col">
									<span class="badge rounded-pill bg-warning">` + eachPetlistItem.genero + `</span>
								</div>
								<div class="col">
									<span class="badge rounded-pill bg-warning">` + eachPetlistItem.raca + `</span>
								</div>
							</div>
						</li>
					</ul>
				</div>`;
	  newHtml += `

				<div class="modal fade" id="modal_iniciais_` + i + `" tabindex="-1" aria-labelledby="modal-cachorro-label" aria-hidden="true">
				    <div class="modal-dialog modal-dialog-centered">
				        <div class="modal-content">
				            <div class="modal-header">
				                <h5 class="modal-title" id="modal-cachorro-label">Cachorro Encontrado</h5>
				                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				            </div>
				            <div class="modal-body">
				                <img src="` + (eachPetlistItem.imgPath ? "../../assets/imgs/" + eachPetlistItem.imgPath : "./img/" + eachPetlistItem.especie.toLowerCase() + ".jpg") + `" 
				                alt="` + eachPetlistItem.especie + `"
				                class="w-100">
				                <p>` + eachPetlistItem.observacoes + `</p>
				            </div>
				        </div>
				    </div>
				</div>`;

		      console.log((i+1));
		      console.log((i+1) / 3);
		      console.log(Number.isInteger((i+1) / 3));
				if ( Number.isInteger((i+1) / 3) == true ){
					newHtml += '</div><!--'+i+'--><div class="row w-100 mx-0">'
				}
				if (Object.keys(inicialPetz).length < 2 && i == 0) {newHtml += '</div>'}
	}

	newHtml += "</div>"; //row

	elem_encontrados_iniciais.innerHTML = newHtml;
  });

