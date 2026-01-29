async function generateRap() {
    // Status anzeigen
    document.getElementById("output").innerText = "⏳ Generiere Rap...";

    // Payload ohne Passwort
    const payload = {
        topics: document.getElementById("topics").value,
        artist: document.getElementById("artist").value,
        lyrics: document.getElementById("lyrics").value,
        beat: document.getElementById("beat").value
    };

    try {
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            document.getElementById("output").innerText = "❌ " + data.error;
            return;
        }

        // Rap anzeigen
        document.getElementById("output").innerText = data.rap;
    } catch (err) {
        document.getElementById("output").innerText = "⚠️ Serverfehler";
        console.error(err);
    }
}
