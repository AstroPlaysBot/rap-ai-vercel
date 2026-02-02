async function generateRap() {
  document.getElementById("output").innerText = "⏳ Generiere Rap...";
  setTimeout(()=>{
    document.getElementById("output").innerText = "🔥 Beispiel-Rap 🔥 Optimiert für Handy!";
  },1200);
}

/* SECRET ROCKET */
const rocket = document.getElementById("rocket-secret");
const smoke = document.getElementById("smoke");

rocket.addEventListener("click", () => {
  rocket.style.position = "fixed";
  rocket.style.top = "10px"; rocket.style.left = "10px";
  rocket.style.zIndex = "9999";
  rocket.style.transition = "transform 5s linear";

  smoke.style.opacity = 1;

  let start = null;
  const duration = 5000; // 5 Sekunden Flug

  function animate(timestamp) {
    if (!start) start = timestamp;
    let progress = (timestamp - start)/duration;
    if(progress>1) progress=1;

    // Rakete langsam über den Bildschirm
    let x = 10 + progress*window.innerWidth*0.8;
    let y = 10 + progress*window.innerHeight*0.8;

    rocket.style.left = x + "px";
    rocket.style.top = y + "px";

    // Rakete wird immer größer
    let scale = 1 + 2*progress;
    rocket.style.transform = `scale(${scale}) rotate(0deg)`; // gerade ausgerichtet

    // Qualm folgt Rakete
    smoke.style.left = (x + 10) + "px";
    smoke.style.top = (y + 20) + "px";
    smoke.style.width = (40 + 30*progress) + "px";
    smoke.style.height = (40 + 30*progress) + "px";

    // Body „fällt“ langsam & wackelt
    document.body.style.transform = `translateY(${progress*150}px) rotate(${Math.sin(progress*8)*2}deg)`;

    if(progress < 1){
      requestAnimationFrame(animate);
    } else {
      // Ende: Rakete gerade nach oben
      rocket.style.transition = "top 1s linear, transform 1s linear";
      rocket.style.top = "-200px";
      rocket.style.transform = "scale(3)";

      document.body.style.transition = "transform 1s ease";
      document.body.style.transform = "translateY(-300px)";

      setTimeout(()=>{
        window.location.href="https://astroplaysbot.github.io/dashboard";
      },1000);
    }
  }

  requestAnimationFrame(animate);
});
