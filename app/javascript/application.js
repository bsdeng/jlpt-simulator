// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// app/javascript/application.js
import "custom/jlpt_quiz"
import { initializeQuiz } from "custom/jlpt_quiz"

// Handle modern Rails Turbo page navigation smoothly
document.addEventListener("turbo:load", () => {
  initializeQuiz();
});
