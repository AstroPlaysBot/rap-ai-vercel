// RAP GENERATOR
async function generateRap() {
  const topics = document.getElementById("topics").value || "Roolexx";
  const artist = document.getElementById("artist").value || "Inspirational Rap";
  const lyrics = document.getElementById("lyrics").value || "";

  const output = document.getElementById("output");
  output.innerText = "⏳ Generiere Rap...";

  // Test-Rap nur über Roolexx
  setTimeout(()=>{
    output.innerText = `🔥 Roolexx-Rap 🔥

Yo, hier kommt Roolexx, Mann, der niemals chillt,
Jede Line on Fire, sein Flow, der alles killt.
Auf den Straßen, in den Beats, sein Name ist bekannt,
Respekt auf jedem Mic, in jedem Land.

Von morgens bis abends, Roolexx macht den Vibe,
Jeder hört zu, wenn er die Crowd beschreibt.
Keine Pause, immer Action, sein Style tight,
Roolexx bringt die Hits, yeah, er bleibt immer bright.

Legendenstatus, keiner kommt ihm gleich,
Sein Sound fresh, sein Game stark und reich.
Alle Augen auf ihn, wenn er die Bühne betritt,
Roolexx, der Boss, der die Szene richtig fit macht.

`; 
  }, 1000);
}
