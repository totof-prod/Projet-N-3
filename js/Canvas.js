let mousePressed = false;
let lastX, lastY;
let ctx;


class Canvas{

    InitThis() {

        ctx = document.getElementById('signature').getContext("2d");

        document.querySelector("#signature").addEventListener("mousedown", function (e) {
            mousePressed = true;
            Draw(e.offsetX , e.offsetY , false);
        });

        document.querySelector("#signature").addEventListener("mousemove", function (e) {
            if (mousePressed) {
                Draw(e.offsetX  , e.offsetY , true);
            }

        });

        document.querySelector("#signature").addEventListener("mouseup", function () {
            mousePressed = false;
        });
        document.querySelector("#signature").addEventListener("mouseleave", function () {
            mousePressed = false;
        });
        function Draw(x, y, isDown) {
            if (isDown) {
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.lineJoin = "round";
                ctx.moveTo(lastX, lastY);
                ctx.lineTo(x, y);
                ctx.closePath();
                ctx.stroke();
            }
            lastX = x; lastY = y;

        }
    }
    clearArea() {
        document.querySelector("#clear").addEventListener("click", function () {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        });
    }
}



