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
    flowField.animate();
}

window.addEventListener('resize', function () { // pour rendre le canvas responsive
    this.cancelAnimationFrame(flowFieldAnimation)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();

})

//creation de la class 
class FlowFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = "white";
        this.#height = height;
        this.#width = width;
        this.angle = 0;
        // console.log('effect loaded');
        // this.#draw(100, 100);

    }

    #draw(x, y) {
        const length = 300;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + length, y + length);
        this.#ctx.stroke();
    }

    animate() {
        this.angle += 0.8;
        this.#ctx.clearRect(0, 0, this.#width, this.#height)
        this.#draw(this.#width/ 2 + Math.sin(this.angle) * 100, this.#height/2 + Math.cos(this.angle) * 100 );
        console.log('animating');
        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));

    }
}







