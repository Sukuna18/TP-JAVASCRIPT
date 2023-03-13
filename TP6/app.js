let container = document.querySelector(".container");
let h1 = document.createElement("h1");
let date2 = new Date("01/01/2024");
const secMois = 2629800;
const secAnnee = 31556952;
const secJour = 86400;

let timer = setInterval(function() {
  let diff = (date2.getTime() - Date.now()) / 1000; // diviser par 1000 pour obtenir les secondes
  let diffYear = Math.floor(diff / secAnnee);
  let diffMonth = Math.floor((diff % secAnnee) / secMois);
  let diffDay = Math.floor(((diff % secAnnee) % secMois) / secJour);
  let diffHour = Math.floor((((diff % secAnnee) % secMois) % secJour) / 3600);
  let diffMin = Math.floor(((((diff % secAnnee) % secMois) % secJour) % 3600) / 60);
  let diffSec = Math.floor(((((diff % secAnnee) % secMois) % secJour) % 3600) % 60);
  h1.textContent = `${Math.floor(diffYear)} années ${Math.floor(diffMonth)} mois ${Math.floor(diffDay)} jours ${Math.floor(diffHour)} heures ${Math.floor(diffMin)} minutes ${Math.floor(diffSec)} secondes`;
  container.appendChild(h1);
  if (diff <= 0) {
    clearInterval(timer);
  }
}, 1000);
