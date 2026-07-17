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
async function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() === "") return;

  const userMessage = input.value;

  messages.innerHTML += `<p><b>You:</b> ${userMessage}</p>`;
  input.value = "";

  messages.innerHTML += `<p id="typing"><b>Zynora AI:</b> Typing...</p>`;
  messages.scrollTop = messages.scrollHeight;

  setTimeout(() => {
    document.getElementById("typing").remove();

    messages.innerHTML += `<p><b>Zynora AI:</b> This website is now ready for real AI integration.</p>`;
    messages.scrollTop = messages.scrollHeight;
  }, 1500);
}
