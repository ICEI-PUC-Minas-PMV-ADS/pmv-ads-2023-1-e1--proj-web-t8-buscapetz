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
  e.target.value = maskemail(e.target.value)
}

function maskemail (email) {
  if (validateEmail(email)) {
    response.innerHTML = 'Hiya Cowboy, this email will work for us 🤠';
  } else {
    response.innerHTML = 'Sorry, this email is not cool enough 😩';
  }
}

function validateEmailFormat(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}