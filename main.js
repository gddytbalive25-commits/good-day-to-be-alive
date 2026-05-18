const quotes = [
  "Today is a good day to be alive!",
  "Gratitude turns what you have into enough.",
  "Small steps every day create massive change.",
  "You are unstoppable today.",
  "Breathe. Smile. Repeat.",
  "Your vibe attracts your tribe.",
  "The best time to start is now.",
  "You woke up — that’s already a win."
];

function newQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = `"${random}"`;
}

function saveGratitude() {
  const text = document.getElementById("gratitude").value.trim();
  if (!text) {
    alert("Write something you're grateful for 💛");
    return;
  }
  alert("Gratitude saved! Your vibe is rising 🔥");
  document.getElementById("gratitude").value = "";
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
  showInstallButton();
});

function showInstallButton() {
  const installBtn = document.createElement('button');
  installBtn.textContent = '📲 Add to Home Screen';
  installBtn.className = 'mt-6 w-full bg-black text-white font-bold py-4 rounded-3xl shadow-xl';
  installBtn.onclick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
  };
  document.querySelector('.space-y-4').after(installBtn);
}

// Initialize
window.onload = () => {
  newQuote();
};
