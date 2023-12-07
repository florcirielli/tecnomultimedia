class Boton {
  
  constructor(bx, by, ancho, alto) {
    this.bx = bx;
    this.by = by;
    this.ancho = ancho;
    this.alto = alto;
  }

  dibujarBoton( A, P, T) {
    textSize(15);
    this.A = A;
    this.P = P;
    this.T = T;
    fill(255, 255, 255, 80);
    rect(this.bx, this.by, this.ancho, this.alto);
    fill(0);
    text(this.T, this.bx+this.ancho/4, this.by+this.alto/2);
  }

  presionarBotones( bx, by, ancho, alto) {
    return mouseX>this.bx && mouseX<this.bx+this.ancho && mouseY>this.by && mouseY<this.by+this.alto;
  }
}
