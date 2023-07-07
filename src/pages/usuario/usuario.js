//usuario.js

if (usuarioLogado) {
	document.getElementById('firstname').value = usuarioLogado['firstname'];
	document.getElementById('lastname').value = usuarioLogado['lastname'];
	document.getElementById('email').value = usuarioLogado['email'];
	document.getElementById('tel').value = usuarioLogado['tel'];
	document.getElementById('adress').value = usuarioLogado['adress'];
	document.getElementById('number').value = usuarioLogado['number'];
	document.getElementById('Bairro').value = usuarioLogado['Bairro'];
	document.getElementById('CEP').value = usuarioLogado['CEP'];
	document.getElementById('Cidade').value = usuarioLogado['Cidade'];
	document.getElementById('password').value = usuarioLogado['password'];
	document.getElementById('confirmPassword').value = usuarioLogado['password'];
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

//Mascaras
const $inputTel = document.querySelector('[mascara="tel"]');
$inputTel.addEventListener('input', telMaskHandleInput, false);

const $inputEmail = document.querySelector('[mascara="email"]');
$inputEmail.addEventListener('input', emailMaskHandleInput, false);