
function ladrillos(x, y, ancho, alto) {
  fill(37, 146, 232);
  rect(x, y, ancho, alto);
}

function base(x, y, ancho, alto) {
  fill(65, 11, 216);
  rectMode(CENTER);
  rect(x, y, ancho, alto);
}

function pelota(x, y, tam) {
  fill(211, 50, 237);
  circle(x, y, tam);
}


function dentrodeBoton(x, y, ancho, alto) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    return true;
  } else {
    return false;
  }
}

function keyPressed() {
    if (keyCode === 32) {
      expulsa = true;
    }
   else {
    pelotaenbase = true;
  }
}

function impacto(x, y, px, py, ancho, alto) {
  return (x > px - ancho / 2 && x < px + ancho / 2 && y > py - alto / 2 && y < py + alto / 2);
}

function Cladrillos(){
    for (let i = 0; i < cant; i++) {
    llx[i] = i * lancho;
    lly[i] = i * lalto;
    lEliminado[i] = [];
    for (let j = 0; j < cant; j++) {
      lEliminado[i][j] = false;
    }  
  }
}

function mostrarImpacto(){
    for (let i = 0; i < cant; i++) {
      for (let j = 0; j < cant; j++) {
        if (!lEliminado[i][j]) {
          ladrillos(llx[i], lly[j], lancho, lalto);
          if (impacto(px, py, llx[i], lly[j], lancho, lalto)) {
            expulsa = true;
            lEliminado[i][j] = true;
            dy =random(5, 7);
            dx=random(5, 7);
            derribadas++;
          }
        }
      }
    }
}

function retornarvalores(){
      bx = width / 2;
      by = height - balto / 2;
      px = bx;
      py = by;
      ptam = 20;
      dx = random(-3, 3);
      dy = random(-3, 3);
      expulsa = false;
      derribadas=0
}

function MouseEnBoton (x, y, ancho, alto, p1, p2, p3, p4){
  if(dentrodeBoton(x, y, ancho, alto)){
    MouseBoton = true;
    stroke(255);
    line(p1, p2, p3, p4);
  } else {
   MouseBoton =  false
 }
}
    
function mousePressed() {
  if (pant === 0 && dentrodeBoton(200, 325, 200, 30)){
    pant = 1;
    
  }
 
  if (pant === 0 && dentrodeBoton (200, 375, 200, 30)){
    pant = 2;
  }
  
  if (pant === 0 && dentrodeBoton (200, 435, 200, 30)){
    pant= 3
  }
  
  if (pant === 1  && dentrodeBoton(300, 310, 200, 30)) {
     pant = 0;
    loop();
  }
  
  if(pant ===1 &&  dentrodeBoton(300, 370, 200, 30)){
    pant = 3
    loop();
  }
  
  if(pant === 1  && dentrodeBoton(300, 340, 200, 30)) {
    pant = 0;
    loop();
  }
  
  if(pant ===1 &&  dentrodeBoton(300, 400, 200, 30)){
    pant = 3
    loop();
  }

 if(pant ===2 &&  dentrodeBoton (180, 540, 260, 30)){
   pant = 0
 }
 
if(pant ===3 &&  dentrodeBoton (170, 550, 250, 30)){
   pant = 0
 }
} 
