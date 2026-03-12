// Three.js Szene
const canvas=document.getElementById("scene");
const scene=new THREE.Scene();
scene.fog=new THREE.FogExp2(0x000000,0.02);

const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,1.5,10);

const renderer=new THREE.WebGLRenderer({canvas,antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// Licht
const light=new THREE.DirectionalLight(0xffffff,1);
light.position.set(0,10,10);
scene.add(light);

const ambient=new THREE.AmbientLight(0x404040);
scene.add(ambient);

// Boden
const groundGeo=new THREE.PlaneGeometry(100,50);
const groundMat=new THREE.MeshStandardMaterial({color:0x111111});
const ground=new THREE.Mesh(groundGeo,groundMat);
ground.rotation.x=-Math.PI/2;
scene.add(ground);

// Wände/Battle Area
const wallGeo=new THREE.BoxGeometry(1,4,0.1);
const wallMat=new THREE.MeshStandardMaterial({color:0xff3f3f});
for(let i=-5;i<=5;i+=2){
    let wallLeft=new THREE.Mesh(wallGeo,wallMat);
    wallLeft.position.set(-5,i/2, -i*5);
    scene.add(wallLeft);

    let wallRight=new THREE.Mesh(wallGeo,wallMat);
    wallRight.position.set(5,i/2, -i*5);
    scene.add(wallRight);
}

// Logos / Crowd
const logoGeo=new THREE.SphereGeometry(0.3,16,16);
const logoMat=new THREE.MeshBasicMaterial({color:0xff9a3f});
const logos=[];
for(let i=0;i<30;i++){
    const logo=new THREE.Mesh(logoGeo,logoMat);
    logo.position.set(Math.random()*8-4,Math.random()*3+0.5,-Math.random()*50);
    logos.push(logo);
    scene.add(logo);
}

// Kamera Fahrt Variablen
let clock=new THREE.Clock();
let t=0;

function animate(){
    requestAnimationFrame(animate);

    let delta=clock.getDelta();
    t+=delta*0.5;

    // Kamera fährt vorwärts
    camera.position.z=-t*10;
    camera.position.y=1.5+Math.sin(t*0.5)*0.5;
    camera.lookAt(0,1.5,-t*10-5);

    // Logos bewegen sich leicht
    logos.forEach(l=>{
        l.rotation.y+=0.02;
        l.position.y+=Math.sin(t+l.position.x)*0.01;
    });

    renderer.render(scene,camera);

    // App einblenden am Ende
    if(t>6){
        document.getElementById("app").style.opacity=1;
    }
}

animate();

// Fenster Resize
window.addEventListener('resize',()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
});

// Rap Generator Funktion
function generateRap(){
    const topics=document.getElementById("topics").value;
    const artist=document.getElementById("artist").value;
    const lyrics=document.getElementById("lyrics").value;
    const beat=document.getElementById("beatInput").value;

    const rap=`🎤 RAP

Thema: ${topics}
Stil: ${artist}
Beat: ${beat}

${lyrics}

Flow geht hart,
Beat geht rein,
AstroPlays Generator
macht den Rap zu dein.`;

    document.getElementById("output").textContent=rap;
}
