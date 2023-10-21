//Florencia Cirielli-Comision 1
//92820/6
//Video: https://youtu.be/Rn1VIQb7UuA

let P; 
let J;
let p = [];
function setup() {
  createCanvas(600, 600);
  P= new Pantallas();
  J = new juego();
}

function draw() {
 background(220);
 P.dibujar();
}

function keyPressed() {
  P.J.moverProtagonista(keyCode);
}

function mousePressed(){
  P.AcBotones();
 
}

function preload(){
  for(let i=0; i<7; i++){
    p.push(loadImage('data/p'+i+'.png'));
  }
}
