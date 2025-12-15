/* ----- SCROLL REVEAL ----- */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

/* ----- PARTICLE BACKGROUND ----- */
const pCanvas = document.getElementById("particleCanvas");
const pCtx = pCanvas.getContext("2d");

pCanvas.width = innerWidth;
pCanvas.height = innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
    particles.push({
        x: Math.random() * pCanvas.width,
        y: Math.random() * pCanvas.height,
        size: Math.random() * 3 + 4,
        speedX: (Math.random() - 0.4) * 0.7,
        speedY: (Math.random() - 0.4) * 0.7
    });
}

function animateParticles() {
    pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > pCanvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > pCanvas.height) p.speedY *= -1;

        pCtx.beginPath();
        pCtx.fillStyle = "rgba(220,180,255,0.8)";
        pCtx.shadowBlur = 15;
        pCtx.shadowColor = "#c78aff";
        pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        pCtx.fill();
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();

/* ----- WAVY BACKGROUND ----- */
const wCanvas = document.getElementById("waveCanvas");
const wCtx = wCanvas.getContext("2d");

wCanvas.width = innerWidth;
wCanvas.height = innerHeight;

let t = 0;

// function drawWave() {
//     t += 0.01;
//     wCtx.clearRect(0, 0, wCanvas.width, wCanvas.height);

//     wCtx.beginPath();
//     wCtx.moveTo(0, wCanvas.height / 2);

//     for (let x = 0; x < wCanvas.width; x++) {
//         let y =
//             Math.sin(x * 0.008 + t) * 20 +
//             Math.cos(x * 0.01 + t * 2) * 15 +
//             wCanvas.height / 2;
//         wCtx.lineTo(x, y);
//     }

//     wCtx.strokeStyle = "rgba(190,120,255,0.3)";
//     wCtx.lineWidth = 3;
//     wCtx.stroke();

//     requestAnimationFrame(drawWave);
// }
drawWave();
