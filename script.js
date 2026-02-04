const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

const messages = [
  "元気百倍！🔥",
  "ちょっと休憩する？📚",
  "作業集だよ💻",
  "頑張っていきましょう✨"
];

let count = 0;

btn.addEventListener("click", () => {
  msg.textContent = messages[count];
  count++;

  if (count >= messages.length) {
    count = 0;
  }
});
