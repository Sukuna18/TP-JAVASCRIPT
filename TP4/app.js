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

let lettreMaj = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lettreMin = lettreMaj.toLowerCase();
let chiffres = '0123456789';
let caractSpeciaux = '!@#$%&*+-=_{}[]|\\:;<>,.?/';
// Fonction pour afficher un message derreur
function afficherMessage(message) {
  let boutton = document.createElement("button");
  boutton.innerHTML = message;
  let clone = boutton.cloneNode(true);
  notify.appendChild(clone);
  setTimeout(() => {
    notify.removeChild(clone);
  }, 2000);
}

// Fonction pour générer un mot de passe aléatoire
function generatePassword() {
  let password = '';
  let allowedCharacters = '';

  allowedCharacters += upperCase.checked ? lettreMaj : '';
  allowedCharacters += lowerCase.checked ? lettreMin : '';
  allowedCharacters += number.checked ? chiffres : '';
  allowedCharacters += special.checked ? caractSpeciaux : '';
  

  if (allowedCharacters.length === 0) {
    afficherMessage("Veuillez cocher au moins une option.");
    return;
  }
  if(isNaN(length.value) || length.value > 20 || length.value < 0){
    afficherMessage("Veuillez saisir un nombre supérieur à 0 et inférieur à 20.");
    return;
  }
  

  for (let i = 0; i < length.value; i++) {
    password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
  }

  mdp.value = password;
}

// Événement pour générer un mot de passe lorsqu'on clique sur le bouton "Générer un Mot de Passe"
generate.addEventListener('click', generatePassword);

mdp.addEventListener("mouseover", function(){
  mdp.title = "Cliquez pour copier";
  mdp.addEventListener("click", function(){
    mdp.title = "Valeur copiée";
    mdp.select();
    document.execCommand("copy");
  });
});
