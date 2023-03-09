let question = document.querySelector("#question");
let btnNext = document.querySelector("#next");
const quiz = [
  {
    question:
      "Quel est le meilleur langage de programmation pour le développement de jeux vidéo ?",
    answers: [
      { text: "C++", correct: true },
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Ruby", correct: false },
    ],
  },
  {
    question:
      "Quel est le nom de la méthode de développement de logiciels qui utilise des itérations courtes et un feedback continu ?",
    answers: [
      { text: "Waterfall", correct: false },
      { text: "Agile", correct: true },
      { text: "Scrum", correct: false },
      { text: "DevOps", correct: false },
    ],
  },
  {
    question:
      "Quel est le nom de la bibliothèque JavaScript la plus populaire pour la création d'interfaces utilisateur ?",
    answers: [
      { text: "Angular", correct: false },
      { text: "Vue", correct: false },
      { text: "React", correct: true },
      { text: "Ember", correct: false },
    ],
  },
  {
    question:
      "Quel est le protocole de communication utilisé par les sites Web pour échanger des données avec les serveurs en arrière-plan ?",
    answers: [
      { text: "TCP", correct: false },
      { text: "HTTP", correct: true },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false },
    ],
  },
  {
    question:
      "Quel est le nom de l'outil de ligne de commande le plus populaire pour la gestion des versions de code source ?",
    answers: [
      { text: "Git", correct: true },
      { text: "Subversion", correct: false },
      { text: "Mercurial", correct: false },
      { text: "Perforce", correct: false },
    ],
  },
];

let currentQuestion = 0;
let score = 0;
function loadQuestion() {
  // Afficher la question
  question.innerHTML = quiz[currentQuestion].question;
  // Afficher les réponses
  let answers = quiz[currentQuestion].answers;

  for (let i = 0; i < answers.length; i++) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = answers[i].correct;
    label.appendChild(input);
    label.innerHTML += answers[i].text;
    question.appendChild(label);
  }
}
loadQuestion();
btnNext.style.display = "none";
//si il y a une réponse on affiche le bouton suivant
let answers = document.querySelectorAll('input[name="answer"]');
for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", function () {
    btnNext.style.display = "block";
  });
}
// Gérer le clic sur le bouton suivant
btnNext.addEventListener("click", function () {
 
  // Vérifier si la réponse est correcte
  let answers = document.querySelectorAll('input[name="answer"]');
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      if (answers[i].value == "true") {
        score++;
      }
    }
  }
  if (answers[0].checked == false && answers[1].checked == false && answers[2].checked == false && answers[3].checked == false) {
    alert("Veuillez choisir une réponse");
    currentQuestion--;
  }

  // Passer à la question suivante
  currentQuestion++;
  if (currentQuestion == quiz.length) {
    // Afficher le score
    question.innerHTML = "Vous avez obtenu " + score + " sur " + quiz.length;
    // Cacher le bouton suivant
    btnNext.style.display = "none";
    // Afficher le bouton rejouer
    let rejouer = document.createElement("button");
    rejouer.id = "rejouer";
    rejouer.innerHTML = "Rejouer";
    question.appendChild(rejouer);
    rejouer.addEventListener("click", replay);
  } else {
    // Charger la question suivante
    loadQuestion();
  }
});

//fonction pour rejouer le quizz
function replay() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
  btnNext.style.display = "block";
}
