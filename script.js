const quizData = [
  {
    question: "Who is the World Champion of Drinking Gin, 1876?",
    a: "Me",
    b: "You",
    c: "No one",
    d: "András Varga",
    correct: "d",
  },
  {
    question: "Who is Bori?",
    a: "Hipster Jesus",
    b: "Put out a glass full of vodka soda and see who picks it up first",
    c: "Bori?",
    d: "András Varga",
    correct: "b",
  },
  {
    question: "Best doctor ever?",
    a: "Andor",
    b: "Doctor Who",
    c: "The Green one",
    d: "Vodka",
    correct: "a",
  },
  {
    question: "What fears Cintia the most?",
    a: "András Varga",
    b: "The Delete Button",
    c: "Kitten paws",
    d: "Random screeching sounds",
    correct: "b",
  },
  {
    question: "What instrument Dávid plays?",
    a: "Tabletop",
    b: "Shoestrings",
    c: "Guitar",
    d: "Moustache of alien gladiators",
    correct: "c",
  },
  {
    question: "What voice Benett is afraid of?",
    a: "Cat purring",
    b: "András Varga",
    c: "Frying chicken",
    d: "Pityó",
    correct: "d",
  },
];


const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2 id="results">Here are your results: ${score}/${quizData.length}. Crazy, innit?!</h2>
                
                <button onclick="location.reload()">Again! AGAINNNN!!!</button>
            `;
    }
  }
});