async function generateRap() {
  document.getElementById("output").innerText = "⏳ Generiere Rap...";
  setTimeout(()=>{
    document.getElementById("output").innerText = "🔥 Beispiel-Rap 🔥 Optimiert für Handy!";
  },1200);
}

/* SECRET ROCKET + ANIMATION */
const rocket = document.getElementById("rocket-secret");
const smoke = document.getElementById("smoke");

rocket.addEventListener("click", () => {
  rocket.style.position = "fixed";
  rocket.style.top = "10px"; rocket.style.left = "10px";
  rocket.style.zIndex = "9999";

  // Rakete wächst
  rocket.style.transition = "transform 5s linear";
  rocket.style.transform = "scale(1.5)";

  // Qualm anzeigen
  smoke.style.opacity = 1;

  let start = null;
  let duration = 5000;

  function animate(timestamp) {
    if (!start) start = timestamp;
    let progress = (timestamp - start)/duration;

    // Bewegungslogik: Ecke → Ecke → Mitte
    let x = 10 + progress*window.innerWidth*0.8;
    let y = 10 + progress*window.innerHeight*0.8;

    rocket.style.left = x + "px";
    rocket.style.top = y + "px";

    // Kreiseffekt: immer kleiner werden in der Mitte
    let scale = 1 + 0.5*progress;
    rocket.style.transform = `scale(${scale}) rotate(${360*progress}deg)`;

    // Qualm folgt Rakete
    smoke.style.left = (x + 10) + "px";
    smoke.style.top = (y + 20) + "px";
    smoke.style.width = (30*progress + 40) + "px";
    smoke.style.height = (30*progress + 40) + "px";

    // Body „fällt“ langsam & wackelt
    document.body.style.transform = `translateY(${progress*150}px) rotate(${Math.sin(progress*10)*2}deg)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Ende: Rakete „fliegt nach oben“, Website folgt
      rocket.style.transition = "transform 1s linear, top 1s linear";
      rocket.style.top = "-100px";
      rocket.style.transform = "scale(3)";
      document.body.style.transition = "transform 1s ease";
      document.body.style.transform = "translateY(-200px)";

      setTimeout(()=>{
        window.location.href="https://astroplaysbot.github.io/dashboard";
      },1000);
    }
  }

  requestAnimationFrame(animate);
});
