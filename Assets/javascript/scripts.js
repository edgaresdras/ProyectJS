function calculaHerencia() {
  var jose = parseInt(prompt('Dinero de Jose'));
  var juan = parseInt(prompt('Dinero de Juan'));
  var herencia = parseInt(prompt('¿De cuanto es la herencia?'));
  var capital = juan + jose + herencia;
  console.log("capital total: " + capital);
}


function Nivel(){
  var Nivel = prompt("¿Cual es tu nivel?");
  if (Nivel >= 20) {
    alert ("Eres un Ninja");
    document.getElementById("imagen").src="assets/img/ninja.png";
  } else if (Nivel < 20 && Nivel >= 10) {
    alert ("Eres un Acrobata");
    document.getElementById("imagen").src="assets/img/acrobata.jpg";
  } else if (Nivel < 10) {
    alert ("Eres un Aprendiz");
    document.getElementById("imagen").src="assets/img/novato.png";
  }
}


function dia(){
  var Dia = prompt("¿Qué dia es hoy");
  switch (Dia) {
    case "lunes":
      alert ("Te Toca Historia");
    break;
    case "martes":
      alert ("Te Toca Natación");
      break;
    case "miercoles":
      alert ("Te Toca Historia");
      break;
    case "jueves":
      alert ("Te Toca Esgrima");
      break;
    case "viernes": case "sabado": case "domingo":
      alert ("Te Toca Descanso");
      break;
      default:
      alert ("No es un dia valido");
}
}


function passSegura(){
var pass = prompt("¿Cual es tu password?");
var newpass = pass.replace("a", "4");
var newpass = newpass.replace("e", "3");
var newpass = newpass.replace("i", "1");
var newpass = newpass.replace("o", "0");
      console.log(newpass);
}


function passSegura2() {
  var password = prompt('Cual es tu contraseña?');
  var newPassword = "";

  for(var i = 0; i < password.length; i++) {
    if(password[i] == "a") {
      newPassword = newPassword + "4";
    }else if (password[i] == "e") {
      newPassword = newPassword + "3";
    }else if (password[i] == "i") {
      newPassword = newPassword + "1";
    }else if (password[i] == "o") {
      newPassword = newPassword + "0";
    }else if (password[i] == "u") {
      newPassword = newPassword + "U";
    }else {
      newPassword = newPassword + password[i];
    }
  }
  console.log(newPassword);
  document.write(newPassword);


function passSinVocales(){
  var passSinVocales = prompt("¿Cual es tu password?");
  var newpass = pass.replace("a", "");
  var newpass = newpass.replace("e", "");
  var newpass = newpass.replace("i", "");
  var newpass = newpass.replace("o", "");
  var newpass = newpass.replace("u", "");
  alert (newpass);
}

function palindromo1() {
  var word = prompt('Ingresa tu frase especial D')
  word = word.toLowerCase();
  word = word.replace(/ /g, '');
  var newWord = word.split('').reverse().join('');

  if (word == newWord) {
    console.log('Tienes un palindromo!');
  } else {
    console.log('No es un palindomo');
  }
}

function palindromo2() {
  var word = prompt('Dime tu segunda frase');
  word = word.toLowerCase();
  word = word.replace(/ /g, '');
  var newWord = '';

  for(var i = word.length - 1; i = 0; i--) {
    newWord = newWord + word[i];
  }

  if (word == newWord) {
    console.log('Tienes un palindromo');
  } else {
    console.log('No es un palindromo');
  }
}

function palindromo3() {
  var word = prompt('Escribe la última frase');
  word = word.toLowerCase();
  var newWord = '';

  for(var i = word.length - 1; i = 0 ; i--) {
    if(word[i] == ' ') {
      newWord = newWord + '';
    } else if (word[i] == 'ó') {
      newWord = newWord + 'o';
    } else {
      newWord = newWord + word[i];
    }
  }

  if (newWord == word) {
    console.log('es palindromo');
  } else {
    console.log('no es palindromo');
  }
}

function palindromo4() {
  var word = prompt('Escribe la última frase');
  word = word.toLowerCase();
  word = word.replace(/ /g, '');

  for( var i = 0; i < word.length; i++ ) {
    if (word[i] != word[(word.length-1) - i]) {
      console.log('no es palindromo');
      return word;
    }

  }
  console.log('Si es palindromo');
}

function piramide1() {
  var floors = parseInt(prompt('¿De cuantos pisos será tu pirámide?'));
  var space = '';
  var bricks = '';
  for(var i = 0; i < floors; i++) {
    space = ' '.repeat(floors - i);
    bricks = bricks + '*';
    console.log(space + bricks + bricks);
    var div = document.querySelector('.pyramid-div');
    var pre = document.createElement('pre');
    div.appendChild(pre);
    pre.innerHTML = space + bricks + bricks;
  }
}
