let btnRight = document.querySelector(".fa-forward");
let btnLeft = document.querySelector(".fa-backward");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");

btnRight.addEventListener("click", moveRight);
btnLeft.addEventListener('click', moveLeft);

let tabP = ["Mon premier", "Mon deuxieme", "Mon troisieme", "Mon quatrieme"];

tabP.map((e) => {
  let par = document.createElement("p");
  par.innerHTML = e;
  par.addEventListener("mouseenter", selectPar);
  div1.appendChild(par);
});

function selectPar(e) {
  document.querySelectorAll("p").forEach(function (e) {
    e.className = "";
  });
  e.target.className = "selected";
}

function moveRight() {
  let selected = document.querySelector("p.selected");
  if (selected == null) return;

  let clone = selected.cloneNode(true);

  selected.remove();

  div2.appendChild(clone);


  let newPar = div2.lastChild;
  newPar.addEventListener("mouseenter", selectPar);
}

function moveLeft() {
  let selected = document.querySelector("p.selected");
  if (selected == null) return;

  let clone = selected.cloneNode(true);

  selected.remove();

  div1.appendChild(clone);
  let newPar = div1.lastChild;
  newPar.addEventListener("mouseenter", selectPar);
}