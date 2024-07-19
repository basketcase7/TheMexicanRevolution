const DATA = [
  {
    question:
      "Каким правилом вы руководствуетесь, чтобы принять важное решение?",
    answers: [
      {
        id: "1",
        value: "Семь раз отмерь — один раз отрежь",
        correct: false,
      },
      {
        id: "2",
        value: "Утро вечера мудренее",
        correct: false,
      },
      {
        id: "3",
        value: "Умный в гору не пойдет, умный гору обойдет",
        correct: false,
      },
      {
        id: "4",
        value: "Лучшая защита — нападение",
        correct: true,
      },
    ],
  },
  {
    question: "5 * 5?",
    answers: [
      {
        id: "5",
        value: "1",
        correct: false,
      },
      {
        id: "6",
        value: "5",
        correct: false,
      },
      {
        id: "7",
        value: "25",
        correct: true,
      },
      {
        id: "8",
        value: "52",
        correct: false,
      },
    ],
  },
];

let localResults = {};
let score = 0;

const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const results = document.getElementById("results");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");

const renderQuestions = (index) => {
  renderIndicator(index + 1);
  questions.dataset.currentStep = index;
  const renderAnswers = () =>
    DATA[index].answers
      .map(
        (answer) => `
            <li>
              <label>
                <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                ${answer.value}
              </label>
            </li>
        `
      )
      .join("");
  questions.innerHTML = `
    <div class="quiz-questions-item">
          <div class="quiz-questions-item_question">${
            DATA[index].question
          }</div>
          <ul class="quiz-questions-item_answers">${renderAnswers()}</ul>
        </div>
    `;
};

const renderResults = () => {
  let content = "";

  const getClassName = (answer, questionIndex) => {
    let className = "";

    if (!answer.correct && answer.id === localResults[questionIndex]) {
      className = "answer--invalid";
      score += 1;
    } else if (answer.correct && answer.id === localResults[questionIndex]) {
      className = "answer--correct";
    }

    return className;
  };

  const getAnswers = (questionIndex) =>
    DATA[questionIndex].answers
      .map(
        (answer) =>
          `<li class=${getClassName(answer, questionIndex)}>${
            answer.value
          }</li>`
      )
      .join("");

  DATA.forEach((question, index) => {
    content += `
        <div class="quiz-results-item">
          <div class="quiz-results-item_question">${question.question}</div>
          <ul class="quiz-result-item_answers">${getAnswers(index)}</ul>
        </div>
        `;
  });

  results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
  indicator.innerHTML = `${currentStep} из ${DATA.length}`;
};

quiz.addEventListener("change", (event) => {
  if (event.target.classList.contains("answer-input")) {
    localResults[event.target.name] = event.target.value;
    btnNext.disabled = false;
  }
});

quiz.addEventListener("click", (event) => {
  // next or restart
  if (event.target.classList.contains("btn-next")) {
    const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

    if (DATA.length === nextQuestionIndex) {
      questions.classList.add("questions--hiden");
      indicator.classList.add("indicator--hiden");
      results.classList.add("results-visible");
      btnNext.classList.add("btn-next--hiden");
      btnRestart.classList.add("btn-restart--visible");
      renderResults();
      handleQuizCompletion(score);
    } else {
      //next
      renderQuestions(nextQuestionIndex);
    }

    btnNext.disabled = true;
  }

  if (event.target.classList.contains("btn-restart")) {
    localResults = {};
    results.innerHTML = "";

    questions.classList.remove("questions--hiden");
    indicator.classList.remove("indicator--hiden");
    results.classList.remove("results-visible");
    btnNext.classList.remove("btn-next--hiden");
    btnRestart.classList.remove("btn-restart--visible");
    score = 0;
    renderQuestions(0);
  }
});

renderQuestions(0);

const { saveQuizResult } = require("./mexRevol/back");

function handleQuizCompletion(score) {
  saveQuizResult(score);
}
