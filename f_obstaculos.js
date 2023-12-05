class obstaculos {

  constructor(x, y, ancho, alto, x2, y2, ancho2, alto2, x3, y3, ancho3, alto3) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.x2 = x2;
    this.y2 = y2;
    this.ancho2= ancho2;
    this.alto2 = alto2;
    this.x3 = x3;
    this.y3 = y3;
    this.ancho3 = ancho3;
    this.alto3 = alto3
  }

  mostrar() {
    noFill();
    noStroke();
    rect (this.x, this.y, this.ancho, this.alto);
    rect (this.x2, this.y2, this.ancho2, this.alto2);
    rect (this.x3, this.y3, this.ancho3, this.alto3);
  }

  colisiona(protagonista) {
    if (protagonista.x + protagonista.ancho >= this.x && protagonista.x <= this.x + this.ancho && protagonista.y + protagonista.alto >= this.y && protagonista.y <= this.y + this.alto) {
      return true;
    }

    if (protagonista.x + protagonista.ancho >= this.x2 && protagonista.x <= this.x2 + this.ancho2 && protagonista.y + protagonista.alto >= this.y2 && protagonista.y <= this.y2 + this.alto2) {
      return true;
    }

    if (protagonista.x + protagonista.ancho >= this.x3 && protagonista.x <= this.x3 + this.ancho3 && protagonista.y + protagonista.alto >= this.y3 && protagonista.y <= this.y3 + this.alto3) {
      return true;
    }

    return false;
  }
}
