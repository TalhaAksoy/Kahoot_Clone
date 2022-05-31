const startButton = document.getElementById('start-btn')
const lobby = $("#lobby-place")
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex, hataorani
let score = 0,wrong = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

$(document).ready(function(){
  const url = window.location.href
  const value = url.split('?')
  const userName = value[1].split("=")[1]
  const gameId = value[2]
  $(".nameSpan").text(userName)
  $(".idSpan").text(gameId)

});

function startGame() {
  startButton.classList.add('hide')
  lobby.addClass('hide')
  shuffledQuestions = questions.sort()
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct)
    score++
  else
    wrong++
  console.log(score,wrong)
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    // TODO: end screen
    hataorani = 100 - ((wrong / (score + wrong)) * 100)
    console.log(hataorani)
    const url = window.location.href
    const value = url.split('?')
    const userName = value[1].split("=")[1]
    const gameId = value[2]
    window.location.href = "./end.html?userName="+userName+"?scoreBoard="+hataorani+"";
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'T3 vakfının en karizmatik yetkilisi kimdir?',
    answers: [
      { text: 'Refik Söylemez', correct: true },
      { text: 'Önemsiz biri', correct: false },
      { text: 'Önemsiz başka biri', correct: false },
      { text: 'Önemsiz bambaşka biri', correct: false }
    ]
  },
  {
    question: 'YY nin en havalı c developerı kimdir? ',
    answers: [
      { text: 'Eren GÜN', correct: true },
      { text: 'Eren GÜN', correct: true },
      { text: 'Eren GÜN', correct: true },
      { text: 'Eren GÜN', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]
