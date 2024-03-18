const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

resizeCanvas();

const chars = "ABCDEFGHJKILSDASDV<SD>?:|]==-0101010101!@#$%^&*()_+";

function resizeCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

class Letter {
    constructor(x) {
        this.letter// = chars.charAt(Math.round(Math.random() * chars.length));
        this.x = x;
        this.y = Math.random() * canvas.height;
    }
    draw() {
        if (Math.random() > 0.9) this.letter = chars.charAt(Math.round(Math.random() * chars.length));

        ctx.fillStyle = "green";
        ctx.font = "bold 18px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(this.letter, this.x, this.y);

        this.y += 5;

        if (this.y > window.innerHeight && Math.random() > 0.95) {
            this.y = -20
        } 
    }
}

let letters = [];

let letterAmount = 200;

for(let i = 0; i < window.innerWidth; i += window.innerWidth/letterAmount) {
    letters.push(new Letter(i));
}

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(loop);

    letters.forEach((letter) => {
        letter.draw();
    })
}

loop();

document.onclick = function() {
    canvas.requestFullscreen();
}

window.onresize = function() {
    resizeCanvas();
}