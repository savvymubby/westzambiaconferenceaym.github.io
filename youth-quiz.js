const quizData = [
   
    {
      question: 'Who should we fear according to revelation 14:7?',
      options: ['Satan', 'The weeked ones', 'God', 'worldly Leaders'],
      answer: 'God',
    },
    {
      question: 'Who nailed 95 theses to which door & in what year?',
      options: ['William Miller, Wittenberg Castle Church, October 31, 1844', 'Martin Luther, Wittenberg Castle Church, October 31, 1517', 'Martin Luther, Roman Council, October 31, 1517', 'John Huss, Roman Council, February 15, 1798'],
      answer: 'Martin Luther, Wittenberg Castle Church, October 31, 1517',
    },
    {
      question: 'Who is known as the herald of reform?',
      options: ['William Carey ', 'Ellen G. White', 'Philip Melanchthon', 'John Wycliffe'],
      answer: 'John Wycliffe',
    },
    {
      question: 'Who was burnt at the stake?',
      options: [
        'John Huss & Jerome',
        'Martin Luther',
        'William Carey ',
        'John Wycliffe',
      ],
      answer: 'John Huss & Jerome',
    },
    {
      question: 'What did the preaching of John Knox do in Scotland?',
      options: ['Nothing', 'Shake the foundation of apostasy', 'Caused confussion', 'Many people were killed'],
      answer: 'Shake the foundation of apostasy',
    },
    {
      question: 'What did the Waldenses keep burning in the Dark Ages?',
      options: [
        'People who preached the gospel',
        'Every bush they found',
        'Lambs for sacrifice',
        'The light of truth',
      ],
      answer: 'The light of truth',
    },
    {
      question: 'What was the name of the colony where the first settlement that had full religious freedom was founded?',
      options: ['Mayflour', 'Whittenberg', 'pacific Island', 'Rhode Island'],
      answer: 'Rhode Island',
    },
    {
      question: 'What did William Tyndale give to the common people of England?',
      options: [
        'Bread to eat',
        'The Bible in their own language',
        'A lot of gifts',
        'Shelter in his house',
      ],
      answer: 'The Bible in their own language',
    },
    {
      question: 'What is the "Midnight Cry" referring to?',
      options: ['Judgement day', 'The day the Romans killed many believers', 'People who cried the whole night during the dark ages', 'Calling attention to the believed second coming of Christ in 1844'],
      answer: 'Calling attention to the believed second coming of Christ in 1844',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();
   
  /*------code by Saviour Mubiana--------*/
