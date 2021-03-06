const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];

//nadle mouse 

const mouse = {
    x: null,
    y: null,
    radius: 200
}

window.addEventListener('mousemove', function (event) {

    mouse.x = event.x;
    mouse.y = event.y;
})
ctx.fillStyle = 'blue';
ctx.font = '30px Verdana';
ctx.fillText('oui', 30, 30);
const textCoordinate = ctx.getImageData(0, 0, 100, 100);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 2) ;
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

    }

    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;


        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 5;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 5;
            }
        }

    }

}

function init() {
    particlesArray = [];
    for (let y = 0, y2 = textCoordinate.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinate.width; x < x2; x++) {
            if (textCoordinate.data[(y * 4 * textCoordinate.width) + (x * 4) + 3] > 128) {
                let positionX = x;
                let positionY = y;
                particlesArray.push(new Particle(positionX * 20, positionY *20));
            }
        }
    }
}



init();
console.log(particlesArray);


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
    }
    requestAnimationFrame(animate);
}
animate();


window.addEventListener('resize', function () { // pour rendre le canvas responsive
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});