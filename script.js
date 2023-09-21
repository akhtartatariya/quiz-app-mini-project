// Define an array of objects, each object represents a question and its options.
const question_data = [
  {
    question: "What does CPU stand for in the context of computing?",
    a: "Central Processing Unit",
    b: "Computer Personal Unit",
    c: "Central Process Unit",
    d: "Computer Power Unit",
    correct: "a" // Correct answer for this question.
  },
  // ... (similar objects for other questions)
  {
    question: "Which programming language is commonly used for developing web-based applications?",
    a: "C++",
    b: "Java",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does HTML stand for in web development?",
    a: "Hyper Transfer Markup Language",
    b: "High Text Modern Language",
    c: "Hyperlink and Text Markup Language",
    d: "Hypertext Markup Language",
    correct: "d"
  },
  {
    question: "Which of the following is a popular version control system used by developers to track changes in code?",
    a: "SQL",
    b: "NoSQL",
    c: "Git",
    d: "HTML",
    correct: "c"
  },
  {
    question: "Which protocol is used for sending emails over the internet?",
    a: "FTP",
    b: "HTTP",
    c: "SMTP",
    d: "POP3",
    correct: "c"
  },
  {
    question: "What does RAM stand for in computer terms?",
    a: "Random Access Memory",
    b: "Read-Only Memory",
    c: "Rapid Application Management",
    d: "Remote Access Module",
    correct: "a"
  },
  {
    question: "Which of the following is not a programming language?",
    a: "Python",
    b: "Ruby",
    c: "SQL",
    d: "URL",
    correct: "d"
  },
  {
    question: "What is the primary function of an operating system?",
    a: "Managing hardware components",
    b: "Running applications",
    c: "Providing internet connectivity",
    d: "Managing office documents",
    correct: "a"
  },
  {
    question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
    a: "Queue",
    b: "Stack",
    c: "Linked List",
    d: "Tree",
    correct: "b"
  },
  {
    question: "What does IP stand for in the context of networking?",
    a: "Internet Protocol",
    b: "Information Processing",
    c: "Interconnection Protocol",
    d: "Internet Provider",
    correct: "a"
  }
];

// Get references to HTML elements you'll interact with.
const Question=document.getElementById('question');
const quiz = document.getElementById('quiz')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const answerEls=document.querySelectorAll('.answer'); // Select all elements with class 'answer'.

// Initialize variables to keep track of the quiz progress and score.
let Quiz_count=0; // Keeps track of the current question.
let score=0; // Keeps track of the number of correct answers.
loadQuiz();

// Function to deselect all answer options.
function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// Function to load a new quiz question.
function loadQuiz() {
  // Deselect any previously selected answer.
  deselectAnswer();

  // Get the current quiz data.
  const currentQuizData = question_data[Quiz_count];

  // Populate HTML elements with the current question and answer options.
  Question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Function to get the selected answer.
function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}



// Function to handle the submission of the answer.
function SubmitBtn() {
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === question_data[Quiz_count].correct) {
      score++; // Increment the score if the answer is correct.
    }
    Quiz_count++; // Move to the next question.

    if (Quiz_count < question_data.length) {
      loadQuiz(); // Load the next question if available.
    } else {
      // Show the quiz results when all questions have been answered.
      quiz.style.height="0px";
      quiz.style.boxShadow="none";
      quiz.innerHTML = ` <h2 align="center">Your answered correctly at ${score} / ${question_data.length} questions.</h2> <button onclick='location.reload()'>Reload </button>`;
    }
  }
}