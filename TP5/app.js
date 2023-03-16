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
// Initialisation du quiz
let currentQuestion = 0;
let score = 0;
let question = document.querySelector("#question");
let btnNext = document.querySelector("#next");
// Fonction pour afficher la question et les réponses
function displayQuestion() {
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

// Fonction pour vérifier la réponse et mettre à jour le score
function checkAnswer() {
  let answers = document.querySelectorAll('input[name="answer"]');
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      if (answers[i].value == "true") {
        score++;
      }
    }
  }
}

// Fonction pour passer à la question suivante
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion == quiz.length) {
    question.innerHTML = "Vous avez obtenu " + score + " sur " + quiz.length;
    btnNext.style.display = "none";
    let rejouer = document.createElement("button");
    rejouer.id = "rejouer";
    rejouer.innerHTML = "Rejouer";
    question.appendChild(rejouer);
    rejouer.addEventListener("click", replay);
  } else {
    displayQuestion();
  }
}

// Fonction pour rejouer le quiz
function replay() {
  currentQuestion = 0;
  score = 0;
  displayQuestion();
  btnNext.style.display = "block";
}

// Afficher la première question
displayQuestion();
btnNext.style.display = "none";

// Ajouter un écouteur d'événement sur les réponses pour afficher le bouton suivant
let answers = document.querySelectorAll('input[name="answer"]');
for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", function () {
    btnNext.style.display = "block";
  });
}

// Ajouter un écouteur d'événement sur le bouton suivant pour gérer la logique de jeu
btnNext.addEventListener("click", function () {
  checkAnswer();
  if (!document.querySelector('input[name="answer"]:checked')) {
    alert("Veuillez choisir une réponse");
    currentQuestion--;
  }
  nextQuestion();
});
