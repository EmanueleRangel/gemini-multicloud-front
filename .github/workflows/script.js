async function sendPrompt() {
  const prompt = document.getElementById('prompt').value;
  const responseDiv = document.getElementById('response');

  try {
    const res = await fetch("https://gemini-multicloud-demo.azurewebsites.net/api/chatFunction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.text();
    responseDiv.innerText = data;
  } catch (error) {
    responseDiv.innerText = "Erro ao se comunicar com a API.";
  }
}
