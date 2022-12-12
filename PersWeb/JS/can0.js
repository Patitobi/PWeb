var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.height=400;
canvas.widt=300;

c.beginPath();
c.moveTo(20,400);
c.bezierCurveTo(20, 200, 280, 200, 280, 400);
c.fillStyle='#FF852B';
c.fill();

c.beginPath();
c.arc(150, 150, 50, 0, Math.PI*2, false);
c.fillStyle='#FF852B';
c.fill();