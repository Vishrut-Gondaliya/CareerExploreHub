
document.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('.interactive-card').forEach(function(card) {
       card.addEventListener('click', function() {
           window.location.href = this.getAttribute('data-link');
       });
   });
});




// Quiz data
const quizData = [
   {
       question: "What do you enjoy doing in your free time?",
       answers: [
           { text: "Reading and researching", career: "researcher" },
           { text: "Creating art or writing", career: "Artist/Writer" },
           { text: "Solving problems and puzzles", career: "Engineer" },
           { text: "Helping others", career: "Doctor/Teacher" }
       ]
   },
   {
       question: "Which subject do you excel in?",
       answers: [
           { text: "Mathematics", career: "Engineer" },
           { text: "Biology", career: "Doctor" },
           { text: "Literature", career: "Writer" },
           { text: "History", career: "Historian" }
       ]
   },
   {
       question: "What type of environment do you prefer?",
       answers: [
           { text: "Office or lab-based", career: " researcher" },
           { text: "Outdoors or physical work", career: "Architect" },
           { text: "Artistic and creative settings", career: "Artist" },
           { text: "Corporate or business settings", career: "Manager" }
       ]
   },
   {
       question: "What skills do you want to develop?",
       answers: [
           { text: "Technical and analytical skills", career: "Engineer" },
           { text: "Creative and communication skills", career: "Journalist" },
           { text: "Medical and people skills", career: "Doctor" },
           { text: "Leadership and management skills", career: "Manager" }
       ]
   }
];

let currentQuestionIndex = 0;
let careerScores = {};

function startQuiz() {
   console.log("Starting quiz...");
   document.querySelector('.quiz-container').classList.add('hidden');
   document.getElementById('quiz').classList.remove('hidden');
   showQuestion();
}

function showQuestion() {
   const questionData = quizData[currentQuestionIndex];
   document.getElementById('question').innerText = questionData.question;
   const answersContainer = document.getElementById('answers');
   answersContainer.innerHTML = "";
   questionData.answers.forEach(answer => {
       const button = document.createElement('button');
       button.innerText = answer.text;
       button.onclick = () => selectAnswer(answer.career, button);
       answersContainer.appendChild(button);
   });
}

function selectAnswer(career, button) {
   console.log(`Selected career: ${career}`);
   // Remove 'selected' class from all buttons
   Array.from(document.getElementById('answers').children).forEach(btn => btn.classList.remove('selected'));
   // Highlight selected button
   button.classList.add('selected');
   // Update career scores
   careerScores[career] = (careerScores[career] || 0) + 1;
   console.log(`Career scores: ${JSON.stringify(careerScores)}`);
   document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
   const selectedButton = document.querySelector('#answers .selected');
   if (!selectedButton) {
       alert("Please select an answer!");
       return;
   }
   currentQuestionIndex++;
   document.getElementById('next-btn').classList.add('hidden');
   if (currentQuestionIndex < quizData.length) {
       showQuestion();
   } else {
       showResult();
   }
}

function showResult() {
   console.log("Displaying result...");
   document.getElementById('quiz').classList.add('hidden');
   const resultContainer = document.getElementById('result');
   resultContainer.classList.remove('hidden');
   let maxScore = 0;
   let careerResult = "";
   for (let career in careerScores) {
       if (careerScores[career] > maxScore) {
           maxScore = careerScores[career];
           careerResult = career;
       }
   }
   const careerResultElement = document.getElementById('career-result');
   if (careerResult) {
       careerResultElement.innerText = careerResult;
   } else {
       careerResultElement.innerText = "No career selected.";
   }
   document.getElementById('restart-btn').classList.remove('hidden');
}

function restartQuiz() {
   console.log("Restarting quiz...");
   currentQuestionIndex = 0;
   careerScores = {};
   document.getElementById('result').classList.add('hidden');
   document.getElementById('quiz').classList.remove('hidden');
   showQuestion();
}



document.addEventListener('DOMContentLoaded', () => {
   const aboutButton = document.getElementById('about-button');
   const aboutDetails = document.getElementById('about-details');

   aboutButton.addEventListener('click', () => {
       if (aboutDetails.style.display === 'none' || aboutDetails.style.display === '') {
           aboutDetails.style.display = 'block';
       } else {
           aboutDetails.style.display = 'none';
       }
   });
});






document.addEventListener('DOMContentLoaded', () => {
   // Add smooth scrolling to all links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           
           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });
});




function navigateTo(page) {
   window.location.href = page;
}

function showOptions(option) {
   console.log('showOptions called with:', option);

   const optionsContent = document.getElementById('options-content');
   const optionContents = document.querySelectorAll('.option-content');

   // Hide all option contents
   optionContents.forEach(content => content.style.display = 'none');
   
   // Show the selected option content
   document.getElementById(option).style.display = 'block';

   // Ensure the options content container is visible
   optionsContent.style.display = 'block';
}

