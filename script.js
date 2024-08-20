// API_URL = "https://github.com/lukePeavey/quotable"
// https://api.quotable.io/random

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const soundBtn = document.getElementById("sound");
const copyBtn = document.getElementById("copy");
const tweetBtn = document.getElementById("twitter");

// API URL:
const url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();

  // For Quotes:
  quote.innerHTML = data.content;

  // For Author:
  author.innerHTML = data.author;
}

// SOund button:
soundBtn.addEventListener("click", () => {
  //  SpeechSynthesisUtterance is an voice API for request an voice assistant:

  let utterance = new SpeechSynthesisUtterance(
    `${quote.innerHTML} by ${author.innerHTML}`
  );

  //  FOr setting pitch of voice:
  utterance.pitch = 0.5;
  speechSynthesis.speak(utterance);
});

// Copy button:
copyBtn.addEventListener("click", () => {
  // writeText() is used to copy text in system clipboard:
  navigator.clipboard.writeText(quote.innerHTML);
});

// twitter button:
tweetBtn.addEventListener("click", () => {
  let tweetUrl = "https://twitter.com/intent/tweet?url=${quote.innerHTML}";
  window.open(tweetUrl, "_blank");
});

getQuote(url);
