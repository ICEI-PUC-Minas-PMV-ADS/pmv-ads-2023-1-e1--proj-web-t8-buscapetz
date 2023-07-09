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
function numberMaskHandleInput (e) {0
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
