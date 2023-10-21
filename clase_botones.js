class Botones {
  
  constructor(bx, by, ancho, alto) {
    this.bx = bx;
    this.by = by;
    this.ancho = ancho;
    this.alto = alto;
  }
  dibujarBoton( A, P) { 
    this.A = A;
    this.P = P;
    noFill();
    noStroke();
    rect(this.bx, this.by, this.ancho, this.alto);
  }
  
   presionarBotones( bx, by, ancho, alto){
    return mouseX>this.bx && mouseX<this.bx+this.ancho && mouseY>this.by && mouseY<this.by+this.alto;
  }

}
