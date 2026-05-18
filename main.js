const quotes = [
  "Today is a good day to be alive!",
  "Gratitude turns what you have into enough.",
  "Small steps every day create massive change.",
  "You are unstoppable today.",
  "Breathe. Smile. Repeat.",
  "Your vibe attracts your tribe.",
  "The best time to start is now."
];

function newQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = `"${random}"`;
}

function saveGratitude() {
  const text = document.getElementById("gratitude").value.trim();
  if (!text) {
    alert("Write something beautiful first 💛");
    return;
  }
  alert("Gratitude saved! Your vibe just went up 🔥");
  document.getElementById("gratitude").value = "";
}

// Initialize
window.onload = () => {
  newQuote();
};
