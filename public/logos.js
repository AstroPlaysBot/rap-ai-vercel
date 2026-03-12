const container=document.getElementById("logo-container")

const logoURL="assets/roolexx.png"

function spawnLogo(){

const logo=document.createElement("div")

logo.className="logo"

logo.style.left=Math.random()*100+"vw"

logo.style.animationDuration=(6+Math.random()*6)+"s"

logo.style.backgroundImage=`url(${logoURL})`

container.appendChild(logo)

setTimeout(()=>{

logo.remove()

},12000)

}

setInterval(spawnLogo,600)
