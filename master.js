var k = 0,
    PI = Math.PI,
    mag = 300,
    delta = 0.01;

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var requestAnimationFrame = window.requestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.msRequestAnimationFrame;

function init() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
    
  canvas.setAttribute('width', WIDTH);
  canvas.setAttribute('height', HEIGHT);
  
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.closePath();

  ctx.translate(WIDTH/2, HEIGHT/2);
  ctx.strokeStyle = "white";
  
  ani();
}

function ani() {
    ctx.fillRect(-WIDTH/2, -HEIGHT/2, WIDTH, HEIGHT);
    ctx.beginPath();
    ctx.moveTo(300, 0);
    for (var i = 0; i<= PI*2; i+= delta) {
      var r = Math.cos(k * i) * mag;
  
      var pos = Vector.fromAngle(i).mult(r);
      ctx.lineTo(pos.x, pos.y);
  
      // point(pos.x, pos.y, 'white', 1);
    }
    ctx.stroke();
    ctx.closePath();

    k += 0.005;
  
  requestAnimationFrame(ani);
}

init();