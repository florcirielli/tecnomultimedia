//tp4
//Comision 1
//Florencia Cirielli 92820/6
//Video Explicativo : https://youtu.be/VUlA-IgxiAs

let pant = 0;
let num = 5;
let puntos = 0;
let derribadas = 0;
let cant;
let bx, by, bancho, balto; // variables de la base
let px, py, ptam; // variables de pelota
let lx, ly, lancho, lalto; // variables del ladrillo
let  dx, dy; // rebotes pelota
let expulsa;
let pelotaenbase = true;
let MouseBoton = false;
let llx = [];
let lly = [];
let lEliminado = [];
let fondo = [];


function preload() {
  for (let i=0; i<num; i++) {
    fondo.push(loadImage('data/pant'+i+'.png'));
  }
}

function setup() {
  createCanvas(600, 600);
  bancho = 80;
  balto = 10;
  bx = width / 2;
  by = height - balto / 2;
  px = bx;
  py = by;
  ptam = 20;
  expulsa = false;
  lx = 0;
  ly = 0;
  lancho = 80;
  lalto = 30;
  dx = random(-3, 3);
  dy = random(-3, 3);
  cant = 8;
  Cladrillos();
 
}

function draw() {
  if (pant === 0) {
    background(0);
    fill(255, 255, 255, 20);
    image(fondo[0], 0, 0, 600, 600);
    MouseEnBoton (200, 325, 200, 30, 250, 355, 340, 355);
    MouseEnBoton (200, 375, 200, 30, 200, 410, 400, 410);
    MouseEnBoton (200, 435, 200, 30, 230, 470, 370, 470);
   }
  
  if (pant === 1) {
    background(0);
    fill(255);
    base(bx, by, bancho, balto);
    pelota(px, py, ptam);

    if (keyIsPressed === true) {
      if (keyCode === RIGHT_ARROW && bx < width - bancho / 2) {
        bx += 2*3;
      }
      if (keyCode === LEFT_ARROW && bx > width / 15) {
        bx -= 2*3;
      }
    }

     px += dx ;
     py += dy ;

    if (px >= width - ptam / 2 || px <= ptam / 2) {
      dx = -dx;
    }
    
    if (py - ptam/2 <= 0){
      dy = +5
    }
    
    if (py >= height - balto - ptam / 2 && px >= bx - bancho / 2 && px <= bx + bancho / 2) {
      dy = -dy;
    }

    if (expulsa ) {
      py -= 2;
    } else {
      px = bx;
      py = by;
      expulsa = false;
    }
    
      mostrarImpacto();
      textSize(30);
      fill(255);
      text ('Puntos ' + derribadas*5, 25, 300);
    
      if (py > height){
      image(fondo[4], 0, 0, 600, 600);
      noLoop();
      retornarvalores()
      Cladrillos();  
      }

     if( derribadas >= 64) { 
      image (fondo[3], 0, 0, 600, 600);
      noLoop();
      retornarvalores()
      Cladrillos();   
     }
    }

  if (pant === 2) {
    image(fondo[2], 0, 0, 600, 600);
    MouseEnBoton(180, 540, 260, 30, 180, 590, 410, 590);
  }
  
  if (pant === 3){
    image(fondo[1], 0, 0, 600, 600);
     MouseEnBoton(140, 550, 250, 30, 170, 580, 430, 580);
  }
}
