// GENERATOR
async function generateRap() {
  document.getElementById("output").innerText = "⏳ Generiere Rap...";
  setTimeout(()=>{
    document.getElementById("output").innerText = "🔥 Beispiel-Rap 🔥";
  },1200);
}

// SECRET ROCKET + SPACE
const rocket = document.getElementById("rocket-secret");
const canvas = document.getElementById("spaceCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const launchScreen = document.getElementById("launchScreen");
const loader = document.getElementById("loader");
let particles = [];

// kleine Planeten
const planets = [];
for(let i=0;i<6;i++){
  const div = document.createElement("div");
  div.className="planet";
  div.style.left = Math.random()*window.innerWidth+"px";
  div.style.top = Math.random()*window.innerHeight+"px";
  document.body.appendChild(div);
  planets.push(div);
}

rocket.addEventListener("click",(e)=>{
  const startX = e.clientX;
  const startY = e.clientY;

  rocket.style.position = "fixed";
  rocket.style.left = startX + "px";
  rocket.style.top = startY + "px";
  rocket.style.zIndex = "9999";

  // Launch-Screen aktivieren
  launchScreen.classList.add("active");

  const duration = 10000; // 10 Sekunden Spirale + Hochflug
  let start = null;

  function animate(timestamp){
    if(!start) start = timestamp;
    let progress = (timestamp - start)/duration;
    if(progress>1) progress=1;

    // Spiralbewegung
    const angle = progress*8*Math.PI;
    const radius = 150*(1-progress);
    let x = startX + Math.cos(angle)*radius;
    let y = startY - progress*window.innerHeight*0.5 + Math.sin(angle)*radius;

    rocket.style.left = x + "px";
    rocket.style.top = y + "px";
    rocket.style.transform = `scale(${1 + 2*progress}) rotate(${progress*720}deg)`;

    // Sterne
    if(Math.random()<0.2) particles.push({x:Math.random()*canvas.width, y:0, size:Math.random()*2+1});
    ctx.fillStyle="rgba(0,0,0,0.1)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
      ctx.fillStyle="white";
      ctx.fill();
      p.y += 2;
      if(p.y>canvas.height) particles.splice(i,1);
    });

    // Website folgt Rakete
    document.body.style.transform = `translateY(${progress*300}px) rotate(${Math.sin(progress*10)*2}deg)`;

    if(progress<1) requestAnimationFrame(animate);
    else startLoading();
  }

  function startLoading(){
    let load = 0;
    const loadInterval = setInterval(()=>{
      load+=2;
      if(load>100) load=100;
      loader.style.width = load + "%";
      if(load>=100){
        clearInterval(loadInterval);
        window.location.href="https://astroplaysbot.github.io/dashboard";
      }
    }, 100); // 5 Sekunden = 100*50ms = 5s
  }

  requestAnimationFrame(animate);
});
