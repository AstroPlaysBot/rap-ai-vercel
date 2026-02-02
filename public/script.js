async function generateRap() {
    document.getElementById("output").innerText = "⏳ Generiere Rap...";

    setTimeout(() => {
        document.getElementById("output").innerText =
            "🔥 Beispiel-Rap 🔥\nOptimiert für Handy & Desktop!";
    }, 1200);
}

/* SECRET ROCKET */
const rocket = document.getElementById("rocket-secret");

rocket.addEventListener("click", () => {
    rocket.style.position = "fixed";
    rocket.style.zIndex = "9999";

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const fly = setInterval(() => {
        x += (Math.random() - 0.5) * 180;
        y += (Math.random() - 0.5) * 180;

        rocket.style.left = x + "px";
        rocket.style.top = y + "px";
        rocket.style.transform =
            `rotate(${Math.random() * 360}deg) scale(1.4)`;
    }, 100);

    setTimeout(() => {
        clearInterval(fly);
        explode();
    }, 3000);
});

function explode() {
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.inset = 0;
    flash.style.animation = "flash 0.15s infinite";
    flash.style.zIndex = 9998;

    document.body.appendChild(flash);
    document.body.style.animation = "shake 0.1s infinite";

    setTimeout(() => {
        window.location.href = "https://deine-website.de";
    }, 2500);
}
