//Telefone
function telMaskHandleInput (e) {
  e.target.value = maskTel(e.target.value)
}

function maskTel (phone) {
  return phone.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{5})\d+?$/, '$1');
}

//Email
function emailMaskHandleInput (e) {
  maskemail(e.target)
}

function maskemail (email) {
  if (validateEmailFormat(email.value)) {
  	console.log(email.classList);
  	// email.class = 'danger';
  	email.classList.remove("border-danger");
  	email.classList.add("border","border-success");
  	console.log(email.classList);
  } else {
  	email.classList.remove("border-success");
  	email.classList.add("border","border-danger");
  	email.setAttribute('data-bs-toggle','tooltip');
  	email.setAttribute('data-bs-placement','bottom');
	email.setAttribute('data-bs-title','Formato invalido');
  }
}

function validateEmailFormat(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(String(email).toLowerCase()));
  return re.test(String(email).toLowerCase());
}

//numeros
function numberMaskHandleInput (e) {
	e.target.value = e.target.value.replace(/[^0-9]/g,'');
}

//CEP
function CEPMaskHandleInput (e) {
  e.target.value = maskCEP(e.target.value)
}

function maskCEP (cep) {
  return cep.replace(/\D/g, '')
    // .replace(/^(\d)/, '($1')
    // .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{5})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{5})\d+?$/, '$1');
}

//password
function passValidateHandleInput (e) {
	console.log(e.target.value);
	console.log(document.getElementById("password").value);
	console.log(document.getElementById("confirmPassword").value);
	if( e.target.value != document.getElementById("confirmPassword").value || e.target.value != document.getElementById("password").value ){
	  	document.getElementById("password").classList.remove("border-success");
	  	document.getElementById("confirmPassword").classList.remove("border-success");
	  	document.getElementById("password").classList.add("border","border-danger");
	  	document.getElementById("confirmPassword").classList.add("border","border-danger");
	  	document.getElementById("password").setAttribute('data-bs-toggle','tooltip');
	  	document.getElementById("confirmPassword").setAttribute('data-bs-toggle','tooltip');
	  	document.getElementById("password").setAttribute('data-bs-placement','bottom');
	  	document.getElementById("confirmPassword").setAttribute('data-bs-placement','bottom');
		document.getElementById("password").setAttribute('data-bs-title','Os campos de senha devem ser iguais');
		document.getElementById("confirmPassword").setAttribute('data-bs-title','Os campos de senha devem ser iguais');
	} else {
		document.getElementById("password").classList.remove("border-danger");
		document.getElementById("confirmPassword").classList.remove("border-danger");
	  	document.getElementById("password").classList.add("border","border-success");
	  	document.getElementById("confirmPassword").classList.add("border","border-success");
	}
}