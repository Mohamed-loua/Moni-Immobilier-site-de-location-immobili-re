
const canvas = document.getElementById('canvatest');
const ctx = canvas.getContext('2d');
canvas.width=800;
canvas.height=500;
canvas.addEventListener('mousemove', function(event) {
    var rect= canvas.getBoundingClientRect();
    return{
        x:event.clientX - rect.left,
        y:event.clientY - rect.top};
        console.log(x);
    }
    
    );


// Create circle
var final=0;

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';
}


function pièce(x,y,h,w,stat,id){

    this.x=x;
    this.y=y;
    this.h=h;
    this.w=w;
    this.stat=stat;
    this.draw= function(){
        ctx.beginPath();
        ctx.rect(x,y,h,w);
        ctx.strokeStyle='blue';
        ctx.stroke();
        ctx.fillStyle='white';
        ctx.fill();
    
    
        canvas.addEventListener('mousemove', function(event) {
            if(event.x<x+h && event.x>x && event.y-40<y+w && event.y-40>y){
            console.log(event.x,event.y);
            ctx.beginPath();
            ctx.rect(x,y,h,w);
            ctx.fillStyle=stat;
            ctx.fill();
            ctx.closePath();
            }else{
            ctx.beginPath();
            ctx.strokeStyle='blue';
            ctx.stroke();
            ctx.rect(x,y,h,w);
            ctx.fillStyle='white';
            ctx.fill();
            ctx.closePath();
            }
            })
            canvas.addEventListener('click', function(ev) {
                
                if(ev.clientX<x+h && ev.clientX>x && ev.clientY-90<y+w && ev.clientY-90>y && stat!='red'){
                    
                    final=id;
                    var nom= document.getElementById("box");
                    nom.textContent+="Vous avez choisi la pièce "+id;
                    toggle_visibility('popupBoxOnePosition');
                    console.log('Vous avez cliquer dans la pièce :'+id);
            }})}
}

    



ctx.beginPath();
ctx.strokeStyle='blue'
ctx.moveTo(50,50);
ctx.lineTo(650,50);
ctx.lineTo(650,300);
ctx.lineTo(350,300);
ctx.lineTo(350,450);
ctx.lineTo(150,450);
ctx.lineTo(150,300);
ctx.lineTo(50,300);
ctx.lineTo(50,50);
ctx.stroke();
ctx.closePath

/*
var pièce2= new pièce(0,0,200,200,'green',2);
pièce1.draw();
pièce2.draw();
console.log(final);*/
var pièce1= new pièce(175,275,150,150,'green',1);
var pièce2= new pièce(370,70,130,100,'green',2);
var pièce3= new pièce(370,190,130,100,'red',3);
var  pièce4= new pièce(510,70,130,100,'green',4);

pièce1.draw();
pièce2.draw();
pièce3.draw();
pièce4.draw();
