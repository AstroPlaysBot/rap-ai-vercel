// GENERATOR
async function generateRap() {
  document.getElementById("output").innerText = "⏳ Generiere Rap...";
  setTimeout(()=>{
    document.getElementById("output").innerText = "🔥 Beispiel-Rap 🔥";
  },1200);
}

// SECRET ROCKET EPIC
const rocket = document.getElementById("rocket-secret");
const canvas = document.getElementById("smokeCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

rocket.addEventListener("click", () => {
  rocket.style.position = "fixed";
  rocket.style.top = "10px"; rocket.style.left = "10px";
  rocket.style.zIndex = "9999";

  let start = null;
  const duration = 30000; // 30 Sekunden

  function animate(timestamp){
    if(!start) start = timestamp;
    let progress = (timestamp - start)/duration;
    if(progress>1) progress=1;

    // Rakete Pfad: diagonale + leichte Kurve
    let x = 10 + progress*window.innerWidth*0.8;
    let y = 10 + progress*window.innerHeight*0.8 - Math.sin(progress*Math.PI)*100;
    rocket.style.left = x + "px";
    rocket.style.top = y + "px";

    // Rakete wächst
    rocket.style.transform = `scale(${1 + 2*progress}) rotate(0deg)`;

    // Body fällt & wackelt
    document.body.style.transform = `translateY(${progress*200}px) rotate(${Math.sin(progress*15)*3}deg)`;

    // Rauchpartikel erzeugen
    particles.push({
      x: x+15 + (Math.random()-0.5)*10,
      y: y+20,
      alpha:1,
      size:5 + Math.random()*5
    });

    // Rauch zeichnen
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fillStyle = `rgba(200,200,200,${p.alpha})`;
      ctx.fill();
      p.y += 1 + Math.random()*1.5;
      p.alpha -=0.01;
      if(p.alpha<=0) particles.splice(i,1);
    });

    if(progress < 1){
      requestAnimationFrame(animate);
    } else {
      // Rakete steigt nach oben
      rocket.style.transition = "top 2s linear, transform 2s linear";
      rocket.style.top = "-300px";
      rocket.style.transform = "scale(4)";

      document.body.style.transition = "transform 2s ease";
      document.body.style.transform = "translateY(-400px)";

      setTimeout(()=>{
        window.location.href="https://astroplaysbot.github.io/dashboard";
      },2000);
    }
  }

  requestAnimationFrame(animate);
});
