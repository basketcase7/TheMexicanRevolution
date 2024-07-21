function runTest() {
  const DATA = [
    {
      question: "1. Когда началась Мексиканская революция?",
      answers: [
        {
          id: "1",
          value: "1910",
          correct: true,
        },
        {
          id: "2",
          value: "1911",
          correct: false,
        },
        {
          id: "3",
          value: "1912",
          correct: false,
        },
        {
          id: "4",
          value: "1913",
          correct: false,
        },
      ],
    },
    {
      question:
        "2. Какой лидер стал символом Мексиканской революции и был известен как 'Дон Панчо'?",
      answers: [
        {
          id: "5",
          value: "Эмилиано Сапата",
          correct: false,
        },
        {
          id: "6",
          value: "Панчио Вилла",
          correct: true,
        },
        {
          id: "7",
          value: "Франсиско И.Mадеро",
          correct: false,
        },
        {
          id: "8",
          value: "Висенте Рендеро",
          correct: false,
        },
      ],
    },
    {
      question: "3. Что было одним из основных требований революционеров?",
      answers: [
        {
          id: "9",
          value: "Увеличение налогов",
          correct: false,
        },
        {
          id: "10",
          value: "Реформа земельной собственности",
          correct: true,
        },
        {
          id: "11",
          value: "Увеличение военной мощи",
          correct: false,
        },
        {
          id: "12",
          value: "Запрет на иностранные инвестиции",
          correct: false,
        },
      ],
    },
    {
      question: "Какое событие стало началом революции?",
      answers: [
        {
          id: "13",
          value: "Убийство Мадеро",
          correct: false,
        },
        {
          id: "14",
          value: "Фондовый кризис",
          correct: false,
        },
        {
          id: "15",
          value: "Принятие 'Плана Сан-Луис'",
          correct: true,
        },
        {
          id: "16",
          value: "Нападение на Японию",
          correct: false,
        },
      ],
    },
    {
      question: "В каком году Франсиско Мадеро стал президентом Мексики?",
      answers: [
        {
          id: "17",
          value: "1910",
          correct: false,
        },
        {
          id: "18",
          value: "1911",
          correct: true,
        },
        {
          id: "19",
          value: "1917",
          correct: false,
        },
        {
          id: "20",
          value: "1920",
          correct: false,
        },
      ],
    },
    {
      question:
        "Кто был основным оппонентом революционеров и президентом Мексики до революции?",
      answers: [
        {
          id: "21",
          value: "Виктория Набор",
          correct: false,
        },
        {
          id: "22",
          value: "Порфирио Диас",
          correct: true,
        },
        {
          id: "23",
          value: "Ласаро Карденас",
          correct: false,
        },
        {
          id: "24",
          value: "Августин Итурбид",
          correct: false,
        },
      ],
    },
    {
      question: "Какое течение возглавлял Эмилиано Сапата?",
      answers: [
        {
          id: "25",
          value: "Консервативное",
          correct: false,
        },
        {
          id: "26",
          value: "Либеральное",
          correct: false,
        },
        {
          id: "27",
          value: "Социалистическое",
          correct: false,
        },
        {
          id: "28",
          value: "Аграрное",
          correct: true,
        },
      ],
    },
    {
      question:
        "Как назывался главный документ, утвержденный в 1917 году, который закрепил достижения революции?",
      answers: [
        {
          id: "29",
          value: "Конституция Мексики",
          correct: true,
        },
        {
          id: "30",
          value: "Социальный Кодекс",
          correct: false,
        },
        {
          id: "31",
          value: "Пакт о мире",
          correct: false,
        },
        {
          id: "32",
          value: "Декларация прав человека",
          correct: false,
        },
      ],
    },
    {
      question:
        "Какое влияние оказала Мексиканская революция на другие страны Латинской Америки?",
      answers: [
        {
          id: "33",
          value: "Она не имела никакого влияния",
          correct: false,
        },
        {
          id: "34",
          value: "Вдохновила другие страны на революции",
          correct: true,
        },
        {
          id: "35",
          value: "Установила диктатуры во всех странах",
          correct: false,
        },
        {
          id: "36",
          value: "Привела к экономическому коллапсу в регионе",
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

  fetch("http://localhost:3007/saveResult", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ result: "test" }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
runTest();
