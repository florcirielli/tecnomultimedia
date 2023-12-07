//Florencia Cirielli y Guillermina Peña
//Vendran lluvias suaves
let p = [];
let Pr;

function setup() {
  createCanvas(600, 600);
  Pr = new Principal(); //crea una nueva clase principal
}

function draw() {
  Pr.dibujar();//dibuja a clase principal
}

function mousePressed() {
  Pr.AccionarPantallas(); //de la clase principal, llama al metodo
}

function keyPressed() {
  Pr.moverPersonaje(keyCode);
}

function preload() {
  for (let i=0; i<22; i++) {
    p.push(loadImage('data/foto'+i+'.png'));
  }
}
