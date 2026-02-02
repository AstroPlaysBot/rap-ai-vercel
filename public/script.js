async function generateRap() {
  document.getElementById("output").innerText = "⏳ Generiere Rap...";
  setTimeout(()=>{
    document.getElementById("output").innerText = "🔥 Beispiel-Rap 🔥 Optimiert für Handy!";
  },1200);
}

/* SECRET ROCKET */
const rocket = document.getElementById("rocket-secret");
rocket.addEventListener("click",()=>{
  rocket.style.position="fixed";
  rocket.style.top="10px"; rocket.style.left="10px";
  rocket.style.zIndex="9999";
  rocket.style.transition="transform 3s ease-in-out";

  // Start Animation Ecke zu Ecke + Kreise mittig
  rocket.style.animation="rocketFall 3s forwards";

  setTimeout(()=>{
    // "Runterfallen" Effekt
    document.body.style.transition="transform 1s ease-in";
    document.body.style.transform="translateY(100vh)";

    setTimeout(()=>{
      window.location.href="https://astroplaysbot.github.io/dashboard";
    },1000);
  },3000);
});
