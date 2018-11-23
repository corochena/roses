var n = 5;
var d = 3;
var L = 280;
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.getAttribute('width');
var h = canvas.getAttribute('height');

draw();

document.querySelectorAll('input').forEach(function(el, i) {
  el.addEventListener('change', function(e) {
    var x = Number(e.target.value);
    if (i==0) n = x; else d = x;
    draw();
  })
});

function draw() {
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(w/2 + L, h/2);
  for (var i=0; i<360*d; i+=0.5) {
    var ang = i*Math.PI/180;
    var r = L*Math.cos(n/d*ang);
    var x = r*Math.cos(ang) + w/2;
    var y = r*Math.sin(ang) + h/2;
    ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.font = '20px Arial';
  ctx.strokeText('n = ' + n, w/2 - 1.5*L, h/2);
  ctx.strokeText('d = ' + d, w/2 + 1.4*L, h/2);
}