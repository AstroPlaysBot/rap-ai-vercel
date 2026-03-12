function generateRap(){

const topics=document.getElementById("topics").value

const artist=document.getElementById("artist").value

const lyrics=document.getElementById("lyrics").value

const beat=document.getElementById("beatInput").value

const rap=

`🎤 RAP

Thema: ${topics}
Stil: ${artist}
Beat: ${beat}

${lyrics}

Flow geht hart,
Beat geht rein,
AstroPlays Generator
macht den Rap zu dein.`

document.getElementById("output").textContent=rap

}
