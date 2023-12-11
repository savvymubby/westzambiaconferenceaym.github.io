var quiz = {
  "JS": [
  {
  "id": 1,
  "question": "Which town was Jesus in when he met the woman at Jacob’s well?",
  "options": [
  {
  "a": "Capenaum",
  "b": "Jerusalem",
  "c": "Sychar",
  "d": "Sidon"
  }
  ],
  "answer": "Sychar",
  "score": 0,
  "status": ""
  },
  {
  "id": 2,
  "question": "1. Which Jewish holiday commemorates the Jewish people’s deliverance from Haman as recorded in the Book of Esther?",
  "options": [
  {
  "a": "Passover",
  "b": "Purim",
  "c": "Feast of the tents"
  }
  ],
  "answer": "Purim",
  "score": 0,
  "status": ""
  },
  {
  "id": 3,
  "question": "Which candidate was not chosen for the office of the apostle after Judas Iscariot committed suicide, according to the Acts of the Apostles?",
  "options": [
  {
  "a": "Cephas",
  "b": "Mattias",
  "c": "Joseph Barsabbas"
  }
  ],
  "answer": "Joseph Barsabbas",
  "score": 0,
  "status": ""
  },
  {
  "id": 4,
  "question": "In a parable found in three of the four Gospels, Jesus compared a mustard seed to the Kingdom of God?",
  "options": [
  {
  "a": "True",
  "b": "False"
  }
  ],
  "answer": "True",
  "score": 0,
  "status": ""
  },
  {
  "id": 5,
  "question": "Which village was the location of Jesus' ascension, according to Luke?",
  "options": [
  {
  "a": "Gaza",
  "b": "Bethany",
  "c": "Capenaum",
  "d": "Nazareth",
  }
  ],
  "answer": "Bethany",
  "score": 0,
  "status": ""
  },
  {
  "id": 6,
  "question": "What is the name of the stormy wind mentioned in (Acts 27:14)?",
  "options": [
  {
  "a": "Cyclone",
  "b": "Syrtis",
  "c": "Euroclydon",
  }
  ],
  "answer": "Euroclydon",
  "score": 0,
  "status": ""
  },
  {
  "id": 7,
  "question": "Who interprets Daniel’s vision of the ram and he-goat in the Book of Daniel?",
  "options": [
  {
  "a": "Archangel Gabriel",
  "b": "Angel Micheal",
  "c": "Cherubim",
  }
  ],
  "answer": "Archangel Gabriel",
  "score": 0,
  "status": ""
  },
  {
  "id": 8,
  "question": "What exactly does the word Israel mean?",
  "options": [
  {
  "a": "Sons of God",
  "b": "God is my strength",
  "c": "Peaceful Children",
  "d": "God has the upper hand",
  }
  ],
  "answer": "God has the upper hand",
  "score": 0,
  "status": ""
  },
  {
  "id": 9,
  "question": "What did Jacob call the location where he fought God?",
  "options": [
  {
  "a": "Pniel",
  "b": "Bethlehem",
  "c": "Zion",
  "d": "He never gave it any name"
  }
  ],
  "answer": "Pniel",
  "score": 0,
  "status": ""
  },
  {
    "id": 10,
    "question": "What was the name of the most revered goddess in Ephesus?",
    "options": [
    {
    "a": "Baal",
    "b": "Ashtoreth",
    "c": "Diana",
    "d": "Tarmuz"
    }
    ],
    "answer": "Diana",
    "score": 0,
    "status": ""
    },
    {
      "id": 11,
      "question": "What was Priscilla's husband's name, and what was his job?",
      "options": [
      {
      "a": "Peter, the Fisherman",
      "b": "Aquila, tent manufacturer",
      "c": "Huram, the craftsman",
      "d": "She had no husband"
      }
      ],
      "answer": "Aquila, tent manufacturer",
      "score": 0,
      "status": ""
      },
      {
        "id": 12,
        "question": "Where did Paul, also known as Saul, get his name?",
        "options": [
        {
        "a": "Antioch",
        "b": "Tarsus",
        "c": "Ephesus",
        "d": "Jericho"
        }
        ],
        "answer": "Tarsus",
        "score": 0,
        "status": ""
        },
  ]
  }
  var quizApp = function () {
  this.score = 0;
  this.qno = 1;
  this.currentque = 0;
  var totalque = quiz.JS.length;
  this.displayQuiz = function (cque) {
  this.currentque = cque;
  if (this.currentque < totalque) {
  $("#tque").html(totalque);
  $("#previous").attr("disabled", false);
  $("#next").attr("disabled", false);
  $("#qid").html(quiz.JS[this.currentque].id + '.');
  $("#question").html(quiz.JS[this.currentque].question);
  $("#question-options").html("");
  for (var key in quiz.JS[this.currentque].options[0]) {
  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
  $("#question-options").append(
  "<div class='form-check option-block'>" +
  "<label class='form-check-label'>" +
  "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
  quiz.JS[this.currentque].options[0][key] +
  "</span></label>"
  );
  }
  }
  }
  if (this.currentque <= 0) {
  $("#previous").attr("disabled", true);
  }
  if (this.currentque >= totalque) {
  $('#next').attr('disabled', true);
  for (var i = 0; i < totalque; i++) {
  this.score = this.score + quiz.JS[i].score;
  }
  return this.showResult(this.score);
  }
  }
  this.showResult = function (scr) {
  $("#result").addClass('result');
  $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
  for (var j = 0; j < totalque; j++) {
  var res;
  if (quiz.JS[j].score == 0) {
  res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
  } else {
  res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
  }
  $("#result").append(
  '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
  '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
  '<div class="last-row"><b>Score:</b> &nbsp;' + res +
  '</div>'
  );
  }
  }
  this.checkAnswer = function (option) {
  var answer = quiz.JS[this.currentque].answer;
  option = option.replace(/</g, "&lt;") //for <
  option = option.replace(/>/g, "&gt;") //for >
  option = option.replace(/"/g, "&quot;")
  if (option == quiz.JS[this.currentque].answer) {
  if (quiz.JS[this.currentque].score == "") {
  quiz.JS[this.currentque].score = 1;
  quiz.JS[this.currentque].status = "correct";
  }
  } else {
  quiz.JS[this.currentque].status = "wrong";
  }
  }
  this.changeQuestion = function (cque) {
  this.currentque = this.currentque + cque;
  this.displayQuiz(this.currentque);
  }
  }
  var jsq = new quizApp();
  var selectedopt;
  $(document).ready(function () {
  jsq.displayQuiz(0);
  $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
  //var radio = $(this).find('input:radio');
  $(this).prop("checked", true);
  selectedopt = $(this).val();
  });
  });
  $('#next').click(function (e) {
  e.preventDefault();
  if (selectedopt) {
  jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(1);
  });
  $('#previous').click(function (e) {
  e.preventDefault();
  if (selectedopt) {
  jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(-1);
  });