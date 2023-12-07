class Protagonista {

  constructor(x, y, ancho, alto, anchoI, altoI) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.anchoI= anchoI;
    this.altoI= altoI;
  }

  mostrar() {
    image(p[21], this.x-50, this.y, this.anchoI, this.altoI);
    noFill();
    noStroke();
    rect(this.x, this.y, this.ancho, this.alto);
  }

  moverAr() {
    this.y-= 20;
  }

  moverAb() {
    this.y+= 20;
  }

  moverD() {
    this.x += 20;
  }

  moverI() {
    this.x -=20;
  }

  colisiona(lluvia) {
    if (this.x + this.ancho >= lluvia.lx && this.x <= lluvia.lx + lluvia.lancho && this.y + this.alto >= lluvia.ly && this.y <= lluvia.ly + lluvia.lalto) {
      return true;
    }
    return false;
  }
}
