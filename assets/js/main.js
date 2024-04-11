import question from './questionModule.js';

const $container_answers = document.querySelector("[container-answers]");
const $spanQuestion = document.querySelector("[question]");
const $qtdSpan = document.querySelector("[qtdspan]");
const $nextBtn = document.querySelector("[next]");
const $restartBtn = document.querySelector("[restart]");

let currentQuestionIndex = 0;
let corretAnswer = 0;

function currentQuestion() {
   $qtdSpan.innerHTML = `${currentQuestionIndex + 1} / ${question.length}`;
   const item = question[currentQuestionIndex];
   $spanQuestion.innerHTML = item.question;

   item.answers.forEach(answers => {
      const newAnswer = document.createElement('button');
      newAnswer.classList.add("button");
      newAnswer.setAttribute("answer", '');
      newAnswer.textContent = answers.text;

      if (answers.correct) {
         newAnswer.dataset.correct = answers.correct;
      }
      $container_answers.appendChild(newAnswer);
   })
}

document.addEventListener('click', (e) => {
   if (e.target.classList.contains('button')) {
      const selectedButton = e.target;
      document.querySelectorAll('.button').forEach(button => {
         button.classList.remove('selected');
      });
      selectedButton.classList.add('selected');
   }
});

$nextBtn.addEventListener('click', () => {
   const selectAnswer = document.querySelector('.button.selected');
   if(!selectAnswer) {
      alert("Selecione uma resposta para continuar.");
      return;
   } else if (selectAnswer.getAttribute('data-correct') === "true") {
      corretAnswer++;
   }
   currentQuestionIndex++;

   if(currentQuestionIndex < question.length) {
      $container_answers.innerHTML = '';
      currentQuestion();
   } else {
      $nextBtn.style.display = "none";
      $restartBtn.style.display = "grid";
      $spanQuestion.textContent = "RESULTADO";
      $qtdSpan.innerHTML = '';
      $container_answers.innerHTML = `Você acertou ${corretAnswer} de ${question.length}`;
   }
})

$restartBtn.addEventListener('click', () => {
   currentQuestionIndex = 0;
   corretAnswer = 0;
   $container_answers.innerHTML = '';
   $nextBtn.style.display = "grid";
   $restartBtn.style.display = "none";
   currentQuestion();
})

currentQuestion();
