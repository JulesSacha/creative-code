let canvas;
let ctx;
let flowField;
let flowFieldAnimation;
// Initiation du canvas 
window.onload = function () {
    canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);
}

window.addEventListener('resize', function () { // pour rendre le canvas responsive
    this.cancelAnimationFrame(flowFieldAnimation)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);

});

const mouse = {
    x: 0,
    y: 0,
}
window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
})

//creation de la class 
class FlowFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
<<<<<<< HEAD
<<<<<<< HEAD
        this.#ctx.lineWidth = 3;
=======
        this.#ctx.lineWidth = 5;
>>>>>>> 6ac2349c4696392950a0e1e3eb0d01907b2565fb
=======
        this.#ctx.lineWidth = 5;
>>>>>>> 6ac2349c4696392950a0e1e3eb0d01907b2565fb
        this.#height = height;
        this.#width = width;
        this.lastTime = 0;
        this.interval = 1000 / 300;
        this.timer = 0;
        this.cellSize = 15;
        this.gradient;
        this.#createGradient();
        this.#ctx.strokeStyle = this.gradient;
<<<<<<< HEAD
<<<<<<< HEAD
        this.radius = 0;
=======
        this. radius = 0;
>>>>>>> 6ac2349c4696392950a0e1e3eb0d01907b2565fb
=======
        this. radius = 0;
>>>>>>> 6ac2349c4696392950a0e1e3eb0d01907b2565fb
        this.vr = 0.03;
        // console.log('effect loaded');

    }

    #createGradient() {
        this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
<<<<<<< HEAD
<<<<<<< HEAD
        this.gradient.addColorStop("0.9", "#ffff33");
=======
        this.gradient.addColorStop("0.1", "#ff4c33");
>>>>>>> 6ac2349c4696392950a0e1e3eb0d01907b2565fb
=======
        this.gradient.addColorStop("0.1", "#ff4c33");
>>>>>>> 6ac2349c4696392950a0e1e3eb0d01907b2565fb
        this.gradient.addColorStop("0.2", "#ff66b3");
        this.gradient.addColorStop("0.4", "#ccccff");
        this.gradient.addColorStop("0.6", "#b3ffff");
        this.gradient.addColorStop("0.8", "#80FF80");
        this.gradient.addColorStop("0.9", "#ffff33");
    }

    #drawLine(angle, x, y) {
<<<<<<< HEAD
<<<<<<< HEAD
         let positionX = x;
         let positionY = y;
         let dy = mouse.y - positionY ;
         let dx = mouse.x - positionX ;
         let distance = dx * dx + dy * dy;

        const length = distance / 70000;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
=======
=======
>>>>>>> 6ac2349c4696392950a0e1e3eb0d01907b2565fb
        const length = 300;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + Math.cos(angle) * 30, y + Math.sin(angle) * 30);
<<<<<<< HEAD
>>>>>>> 6ac2349c4696392950a0e1e3eb0d01907b2565fb
=======
>>>>>>> 6ac2349c4696392950a0e1e3eb0d01907b2565fb
        this.#ctx.stroke();
    }

    animate(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        if (this.timer > this.interval) {
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            this.radius += this.vr;
            for (let y = 0; y < this.#height; y += this.cellSize) {
                for (let x = 0; x < this.#width; x += this.cellSize) {
                    const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius;
                    this.#drawLine(angle, x, y);

                }
            }
            this.timer = 0;

        } else {
            this.timer += deltaTime;
        }
        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));

    }
}







