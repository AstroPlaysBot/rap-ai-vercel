const logoUrls = [
    'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png'
];

const container = document.getElementById('logo-container');

for (let i = 0; i < 15; i++) {
    const div = document.createElement('div');
    div.className = 'logo';
    div.style.backgroundImage = `url(${logoUrls[Math.floor(Math.random()*logoUrls.length)]})`;
    div.style.left = Math.random() * 100 + 'vw';
    div.style.animationDuration = (5 + Math.random()*10) + 's';
    div.style.width = 30 + Math.random()*20 + 'px';
    div.style.height = 30 + Math.random()*20 + 'px';
    container.appendChild(div);
}
