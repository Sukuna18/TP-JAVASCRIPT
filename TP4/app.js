let upperCase = document.querySelector("#uppercase");
let lowerCase = document.querySelector("#lowercase");
let special = document.querySelector("#special");
let number = document.querySelector("#numbers");
let generate = document.querySelector("#generate");
let copy = document.querySelector("#copy");
let mdp = document.querySelector("#password");
let length = document.querySelector("#length");
let form = document.querySelector("form");
let notify = document.querySelector(".notification");
let boutton = document.createElement("button");

let lettreMaj = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lettreMin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let chiffres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let caractSpeciaux = ['!', '@', '#', '$', '%', '&', '*', '+', '-', '=', '_', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', ',', '.', '?', '/'];

// Fonction pour générer un mot de passe aléatoire
function generatePassword() {
  let password = '';
  let allowedCharacters = [];

  if (upperCase.checked) {
    allowedCharacters = allowedCharacters.concat(lettreMaj);
  }
  if (lowerCase.checked) {
    allowedCharacters = allowedCharacters.concat(lettreMin);
  }
  if (number.checked) {
    allowedCharacters = allowedCharacters.concat(chiffres);
  }
  if (special.checked) {
    allowedCharacters = allowedCharacters.concat(caractSpeciaux);
  }

  if (allowedCharacters.length === 0) {
    
    boutton.innerHTML = 'Veuillez cocher au moins une option.';
    let clone = boutton.cloneNode(true);
    notify.appendChild(clone);
    setTimeout(() => {
      notify.removeChild(clone);
    },2000)
    return;
  }
  if(length.value > 20 || length.value < 0){
    boutton.innerHTML = 'Veuillez saisir un nombre superieur a 0 et inférieur à 20.';
    let clone = boutton.cloneNode(true);
    notify.appendChild(clone);
    setTimeout(() => {
      notify.removeChild(clone);
    },2000)
    return;
  }
  for (let i = 0; i < length.value; i++) {
    password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
  }

  mdp.value = password;
}

// Événement pour générer un mot de passe lorsqu'on clique sur le bouton "Générer un Mot de Passe"
generate.addEventListener('click', generatePassword);

copy.addEventListener("click", copyInputValue)
function copyInputValue(){
 
    mdp.select();
  document.execCommand("copy");
  alert("la valeur a ete copier dans le presse papier");
}