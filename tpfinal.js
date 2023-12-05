//Florencia Cirielli y Guillermina Peña
//Vendran lluvias suaves
let p = [];
let Pr;

function setup() {
  createCanvas(600, 600);
  Pr = new Principal();
}

function draw() {
  Pr.dibujar();
}

function mousePressed() {
  Pr.AccionarPantallas();
}

function keyPressed() {
  Pr.moverPersonaje(keyCode);
}

function preload() {
  for (let i=0; i<22; i++) {
    p.push(loadImage('data/foto'+i+'.png'));
  }
}
