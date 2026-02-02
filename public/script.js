async function generateRap() {
    const output = document.getElementById("output");
    output.innerText = "⏳ Generiere Rap...";

    setTimeout(()=>{
        output.innerText = `🔥 Roolexx-Rap 🔥

Yo, Roolexx frisch Papa, alles glänzt neu,
Mit Baby in den Armen, Flow so fly.
Kein Schlaf, nur Beats, sein Herz voll Love,
Die Zukunft bright, Erfolg wie von oben.

Von morgens bis abends, sein Style tight,
Seine Lines inspirieren, jeder Vibe bright.
Legendenstatus, Vater und Rapper vereint,
Roolexx rockt die Szene, jeder ihn meint.`;
    }, 1000);
}
