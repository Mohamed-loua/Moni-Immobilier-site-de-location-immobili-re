

/*c.beginPath();
c.fillStyle= 'blue';
c.moveTo(0,0);
c.lineTo(50,50);
c.lineTo(70,30);
c.lineTo(0,0);
c.stroke();
c.fill();
*/
/*var Rmax=40;
var Rmin=2;
function Circle(x,y,rayon,dx,dy){
    this.x=x;
    this.y=y;
    this.rayon=rayon;
    this.dx=dx;
    this.dy=dy;
    this.color=ColorArray[Math.floor(Math.random()*ColorArray.length)];
    this.Rmin=rayon;
    this.draw= function(){
        c.beginPath();
    c.arc(this.x,this.y,this.rayon,0,Math.PI*2,false);
    c.strokeStyle='blue';
    c.stroke();
    c.fillStyle=this.color;
    c.fill();
    }
    this.update= function(){
        if (this.x+this.rayon > innerWidth || this.x+this.rayon < 0){
            this.dx=-this.dx;
            }
            if (this.y+this.rayon > innerHeight || this.y + this.rayon<0){
                this.dy=-this.dy;}
                this.y+=this.dy;
                this.x+=this.dx;
                this.draw();
            if(mouse.x-this.x <50 && mouse.x-this.x>-50 && mouse.y -this.y <50 && mouse.y-this.y>-50){
                if(this.rayon<Rmax){
                    this.rayon+=1;  
                }
                
            }else if(this.rayon>this.Rmin){ this.rayon=this.rayon-1;}
            }
                
    }

var mouse ={
    x: undefined,
    y:undefined
}
window.addEventListener('mousemove',
function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(mouse);
})
console.log(mouse);
var CircleArray= [];
var ColorArray=['blue','pink','red','green','black']
for(var i=0; i<800; i++){
    
    var x=Math.random() * innerWidth;
var y=Math.random() * innerHeight;
var dx=(Math.random()-0.5)*6;
var dy=(Math.random()-0.5)*6;
var rayon=Math.random()*3 +1;
    CircleArray.push(new Circle(x,y,rayon,dx,dy));
}

var circle = new Circle(200,200,30,3,3)
function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0,0, innerWidth,innerHeight);
    for (var i=0; i<CircleArray.length;i++){
        CircleArray[i].update();
        
        
    }
    
   
    }

animate();

*/
const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

        
// create circles to draw
var circles = [
  {
    x: 40,
    y: 40,
    radius: 10,
    color: 'rgb(255,0,0)',
    id:'0'
  },
  {
    x: 70,
    y: 70,
    radius: 10,
    color: 'rgb(0,255,0)',
    id:'1'
  }
];

// draw circles
circles.forEach(circle => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
});

canvas.addEventListener('click', () => {
   console.log('canvas click');
});

function isIntersect(point, circle) {
  return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
}

var mouse ={
    x: undefined,
    y:undefined
}
canvas.addEventListener('mousemove',
function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(mouse);
    if (Math.sqrt((event.x-40) ** 2 + (event.y - 40) ** 2) < 10) {
       
        alert('click on circle: ');
        ctx.beginPath();
        ctx.rect(100,100,100,100);
        ctx.fillStyle='red';
        ctx.fill();
        ctx.closePath();
        
      }
})


canvas.addEventListener('click', (e) => {
  const pos = {
    x: e.clientX,
    y: e.clientY
  };
  circles.forEach(circle => {
    if (isIntersect(pos, circle)) {
       
      alert('click on circle: ' + circle.id);
      
    }
  });
});


/*const rects = [{
    x:100, 
    y:100, 
    h:100, 
    w:100,
    color:'red'
        }
        ,
        {x:300, y:300,h:100,w:100,color:'green'}];

rects.forEach(rec => {
    ctx.beginPath();
    ctx.rect(rects.x, rects.y, rects.h, rects.w);
    ctx.fillStyle = rects.color;
    ctx.fill();
  });*/