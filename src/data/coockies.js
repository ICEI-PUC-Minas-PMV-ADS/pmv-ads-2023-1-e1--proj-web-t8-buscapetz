function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/////////////////////////////Usuarios////////////////////////////
function checkUserCookies() {
  let user_nome = getCookie("nome");
  let user_email = getCookie("email");
  if (user_nome != "") {
    console.log("Usuário: " + user_nome);
  }
  if (user_email != "") {
    console.log("Email: " + user_email);
  }/* else {
    user_nome = 'Usuário Zero';
    if (user_nome != "" && user_nome != null) {
      setCookie("nome", user_nome, 365);
    }
  }*/
}

function checkLogedUser() {
  let usuario_logado = getCookie("usuario_logado");
  if (usuario_logado) {
    dados_usuario_logado = [];
    dados_usuario_logado['usuario_logado'] = getCookie("usuario_logado");
    dados_usuario_logado[usuario_logado+"_firstname"] = getCookie(usuario_logado+"_firstname");
    dados_usuario_logado[usuario_logado+"_lastname"] = getCookie(usuario_logado+"_lastname");
    dados_usuario_logado[usuario_logado+"_tel"] = getCookie(usuario_logado+"_tel");
    dados_usuario_logado[usuario_logado+"_adress"] = getCookie(usuario_logado+"_adress");
    dados_usuario_logado[usuario_logado+"_number"] = getCookie(usuario_logado+"_number");
    dados_usuario_logado[usuario_logado+"_Bairro"] = getCookie(usuario_logado+"_Bairro");
    dados_usuario_logado[usuario_logado+"_Cidade"] = getCookie(usuario_logado+"_Cidade");
    dados_usuario_logado[usuario_logado+"_password"] = getCookie(usuario_logado+"_password");
    dados_usuario_logado[usuario_logado+"_gender"] = getCookie(usuario_logado+"_gender");
    
    return dados_usuario_logado;
  }
}

function logUser(email,pass) {
  console.log(email,pass);
  let user_email = getCookie(email);
  let user_pass = getCookie(email+"_password");
  console.log(user_email,user_pass);
  if ((user_email != "" && user_email != null) && (user_pass != "" && user_pass != null)) {
    // setCookie(email, user_email, 365);
    // setCookie(pass, user_pass, 365);
    setCookie("usuario_logado", email, 365);
    return true;
  }
  return false;
}

function cadUser(firstname,lastname,email,tel,adress,number,Bairro,Cidade,password,gender) {
  // let user_email = getCookie(email);
  // let user_pass = getCookie(pass);

console.log(firstname,lastname,email,tel,adress,number,Bairro,Cidade,password);
  firstname_ckc = getCookie(firstname);
  lastname_ckc = getCookie(firstname+"_lastname");
  email_ckc = getCookie(firstname+"_email");
  tel_ckc = getCookie(firstname+"_tel");
  adress_ckc = getCookie(firstname+"_adress");
  number_ckc = getCookie(firstname+"_number");
  Bairro_ckc = getCookie(firstname+"_Bairro");
  Cidade_ckc = getCookie(firstname+"_Cidade");
  password_ckc = getCookie(firstname+"_password");
  gender_ckc = getCookie(firstname+"_gender");
console.log(firstname,lastname,email,tel,adress,number,Bairro,Cidade,password,gender);
  if (
    (firstname_ckc == "" || firstname_ckc == null)
    && (lastname_ckc == "" || lastname_ckc == null)
    && (email_ckc == "" || email_ckc == null)
    && (tel_ckc == "" || tel_ckc == null)
    && (adress_ckc == "" || adress_ckc == null)
    && (number_ckc == "" || number_ckc == null)
    && (Bairro_ckc == "" || Bairro_ckc == null)
    && (Cidade_ckc == "" || Cidade_ckc == null)
    && (password_ckc == "" || password_ckc == null)
    && (gender_ckc == "" || gender_ckc == null)
    ) {
    setCookie(firstname, firstname, 365);
    setCookie(email+"_firstname", firstname, 365);
    setCookie(firstname+"_lastname", lastname, 365);
    setCookie(email+"_lastname", lastname, 365);
    setCookie(firstname+"_email", email, 365);
    setCookie(email, email, 365);
    setCookie(firstname+"_tel", tel, 365);
    setCookie(email+"_tel", tel, 365);
    setCookie(firstname+"_adress", adress, 365);
    setCookie(email+"_adress", adress, 365);
    setCookie(firstname+"_number", number, 365);
    setCookie(email+"_number", number, 365);
    setCookie(firstname+"_Bairro", Bairro, 365);
    setCookie(email+"_Bairro", Bairro, 365);
    setCookie(firstname+"_Cidade", Cidade, 365);
    setCookie(email+"_Cidade", Cidade, 365);
    setCookie(firstname+"_password", password, 365);
    setCookie(email+"_password", password, 365);
    setCookie(firstname+"_gender", gender, 365);
    setCookie(email+"_gender", gender, 365);
    setCookie("usuario_logado", "", 365);
    return true;
  }

  return false;

}

