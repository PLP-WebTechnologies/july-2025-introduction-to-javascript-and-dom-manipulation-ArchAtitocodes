// =========================
//  Part 1: JavaScript Basics
// =========================

// Variables, input, conditionals
function checkAge() {
  const age = document.getElementById("ageInput").value;
  const result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "You're an adult.";
  } else if (age > 0) {
    result.textContent = "You're a minor.";
  } else {
    result.textContent = "Please enter a valid age.";
  }
}

// =========================
// Part 2: Functions
// =========================

// Function 1: Simple greeting
function showGreeting() {
  const greetingText = createGreeting("Developer");
  document.getElementById("greeting").textContent = greetingText;
}

// Function 2: Return greeting message
function createGreeting(name) {
  return `Hello, ${name}! Welcome to JavaScript world.`;
}

// =========================
// Part 3: Loops
// =========================

// Array and loop
const colors = ["Red", "Green", "Blue", "Purple", "Yellow"];

function listColors() {
  const list = document.getElementById("colorList");
  list.innerHTML = ""; // Clear previous list

  // Using for loop
  for (let i = 0; i < colors.length; i++) {
    const item = document.createElement("li");
    item.textContent = colors[i];
    list.appendChild(item);
  }

  // Alternative: colors.forEach((color) => { ... });
}

// =========================
//  Part 4: DOM Manipulation
// =========================

// Toggle class on body
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
