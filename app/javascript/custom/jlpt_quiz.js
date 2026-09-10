// app/javascript/custom/jlpt_quiz.js
console.log("JLPT custom script loaded successfully!");

export function initializeQuiz() {
  const button = document.getElementById("start-quiz-btn");
  if (button) {
    button.addEventListener("click", () => {
      alert("Quiz started!");
    });
  }
}
