// Zynora AI JavaScript

console.log("Welcome to Zynora AI");

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");

  if (button) {
    button.addEventListener("click", () => {
      alert("🚀 Welcome to Zynora AI!\nThank you for visiting our website.");
    });
  }
});
const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");

chatToggle.addEventListener("click", () => {
  if (chatBox.style.display === "none" || chatBox.style.display === "") {
    chatBox.style.display = "block";
  } else {
    chatBox.style.display = "none";
  }
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() === "") return;

  messages.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  messages.innerHTML += `<p><b>Zynora AI:</b> This is a demo AI response.</p>`;

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}
