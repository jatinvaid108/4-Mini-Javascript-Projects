// Select Elements
const container = document.querySelector(".container");
const guessInput = document.getElementById("guess"); // Removed # symbol
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

// Create Message Elements
const resultMessage = document.createElement("p");
const attemptTracker = document.createElement("p");

// Append Message Elements to Container
container.appendChild(resultMessage);
container.appendChild(attemptTracker);

// Initialize Game Variables
let attempts = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 15;

// Style Result Message
resultMessage.style.fontSize = "1.5rem";
resultMessage.style.fontWeight = "bold";

// Event Listener for Submit
submit.addEventListener("click", function () {
  const userGuess = parseInt(guessInput.value);

  // Validation Check
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultMessage.textContent = "❌ Please enter a valid number between 1 and 100.";
    resultMessage.style.color = "red";
    return; // Exit function to prevent further code execution
  }

  // Increment Attempts
  attempts++;

  // Update Attempts Tracker
  attemptTracker.textContent = `Attempts: ${attempts}/${maxAttempts}`;

  // Check Guess
  if (userGuess === randomNumber) {
    resultMessage.textContent = `🎉 Congratulations! You guessed the number in ${attempts} attempts.`;
    resultMessage.style.color = "green";
    submit.disabled = true;
    guessInput.disabled = true;
  } else if (attempts >= maxAttempts) {
    resultMessage.textContent = `❌ Game Over! The correct number was ${randomNumber}.`;
    resultMessage.style.color = "red";
    submit.disabled = true;
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    resultMessage.textContent = "📉 Too Low! Try again.";
    resultMessage.style.color = "blue";
  } else {
    resultMessage.textContent = "📈 Too High! Try again.";
    resultMessage.style.color = "orange";
  }
});

// Event Listener for Reset
reset.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  resultMessage.textContent = "";
  attemptTracker.textContent = "";
  submit.disabled = false;
  guessInput.disabled = false;
});
