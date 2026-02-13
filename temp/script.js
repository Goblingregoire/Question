function sendQuestion() {
  const name = document.getElementById("name").value;
  const text = document.getElementById("question").value;

  if (!text) return;

  fetch("/question", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, text })
  }).then(() => {
    document.getElementById("status").innerText =
      "✅ Question envoyée";
    document.getElementById("question").value = "";
  });
}
