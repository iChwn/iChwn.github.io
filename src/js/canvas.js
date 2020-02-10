let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

const updateCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
updateCanvas();
window.addEventListener("resize", () => {
  updateCanvas();
  initParticle();
});

let mouse = {
  x: undefined,
  y: undefined
};
canvas.addEventListener("mousemove", event => {
  mouse.x = event.x;
  mouse.y = event.y;
});

let = maxRadius = 50;
let colorBulets = ["#0d1127", "#ffdc48", "#394359", "#000000", "#ffffff"];

//animated
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.generateColor =
    colorBulets[Math.floor(Math.random() * colorBulets.length)];

  this.draw = function() {
    context.beginPath();
    // context.strokeText("DVD", this.x - 10, this.y + 5);
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.generateColor;

    // context.strokeStyle = "#000";
    // context.stroke();
    context.fill();
    return this;
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    //interactive mouse hover
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
  };
}

var circleArray = [];
function initParticle() {
  circleArray = [];
  for (let i = 0; i < 50; i++) {
    var radius = Math.random() * 5 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 3;
    var dy = (Math.random() - 0.5) * 3;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}
initParticle();

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].draw().update();
  }
}
animate();
