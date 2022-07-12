window.addEventListener('load', function () {

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Canvas settings
    ctx.fillStyle = 'green';
    ctx.lineCap = 'round';
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowOffsetX = 10;

    //effect settings 

    let size = canvas.width < canvas.height ? canvas.width * 0.3 : canvas.height * 0.3; // opérateur ternaire pour le responsive de la fractale
    let maxLevel = 3;
    let branches = 3;
    let sides = 5;
    let scale = 0.5;
    let spread = Math.floor(Math.random());
    let color = 'hsl(' + Math.random() * 360 + '0,100%,50%)';
    let lineWidth =  Math.floor(Math.random() * 20 + 10)  ;



    //controles 
    const randomize = document.getElementById('randomize');


    function drawBranch(level) {
        if (level > maxLevel) return;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(size, 0);
        ctx.stroke();


        for (let i = 0; i < branches; i++) {
            ctx.save()
            
            ctx.translate(size - (size / branches) * i, 0);
            ctx.scale(scale, scale);

            ctx.save()
            ctx.rotate(spread);
            drawBranch(level + 1);
            ctx.restore();

            ctx.save()
            ctx.rotate(-spread);
            drawBranch(level + 1);
            ctx.restore();
            ctx.restore();



        }

    }



    function drawFractal() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.lineWidth = lineWidth;

        ctx.strokeStyle = color;

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(1, 1);
        ctx.rotate(0);
        for (let i = 0; i < sides; i++) {
            ctx.rotate((Math.PI * 2) / sides);
            drawBranch(0);


        }
        ctx.restore();

    }


    function randomizeFractal() {
        sides = Math.floor(Math.random() * 7 + 2);
        scale = Math.random() * 0.2 + 0.4;
        spread = Math.random() * 2.9 + 0.1;
        color = 'hsl(' + Math.random() * 360 + '0,100%,50%)';
        lineWidth =  Math.floor(Math.random() * 20 + 10)  ;

        drawFractal();


    }

    randomize.addEventListener('click', function(){
        randomizeFractal();
        drawFractal();
    });

});

