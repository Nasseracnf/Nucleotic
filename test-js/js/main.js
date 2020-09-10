setInterval(createWhiteBubbles,2000);

function createWhiteBubbles() {
    const whitebubble = document.createElement('div');
    const size = Math.random()*150 + 'px';
    const color = ['#00a6a6', '#fff', '#000', '#fff', '#fff', '#F9FF70'];

    whitebubble.classList.add('white');
    whitebubble.classList.add('wt1');
    whitebubble.style.left = Math.random() * window.innerWidth + 'px';
    whitebubble.style.bottom = Math.random() * window.innerHeight + 'px';
    whitebubble.style.animationDuration = Math.random() * 6 + 15 + 's';
    whitebubble.style.animationDirection = Math.random() * 2 + 4 + 'vw';
    whitebubble.style.opacity = Math.random()* 1;
    whitebubble.style.width = size;
    whitebubble.style.height = whitebubble.style.width;
    whitebubble.style.borderRadius = size;
    whitebubble.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
    whitebubble.style.webkitFilter = "blur(20px)";

    document.body.appendChild(whitebubble);

    setTimeout(() => {
        whitebubble.remove();
    }, 50000)
}