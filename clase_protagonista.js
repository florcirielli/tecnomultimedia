class Protagonista {
  
  constructor(x, y, ancho, alto, x2, y2, ancho2, alto2, x3, y3, ancho3, alto3) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.x2 = x2;
    this.y2 = y2;
    this.ancho2 = ancho2;
    this.alto2 = alto2;
    this.x3 = x3;
    this.y3 = y3;
    this.ancho3 = ancho3;
    this.alto3 = alto3;
  }

  mostrar() {
    stroke(1);
    fill(255, 236, 126);
    rect(this.x, this.y, this.ancho, this.alto);
    rect(this.x2, this.y2, this.ancho2, this.alto2);
    rect(this.x3, this.y3, this.ancho3, this.alto3);
  }

  moverAr() {
    this.y-= 20;
    this.y2 -=20;
    this.y3 -=20;
  }
  
  moverAb(){
    this.y+= 20;
    this.y2+=20;
    this.y3+=20;
  }
  
  moverD(){
    this.x += 20;
    this.x2 +=20;
    this.x3 +=20;
  }
  
  moverI(){
    this.x -=20;
    this.x2 -=20;
    this.x3 -=20;
  }
  
   colisiona(lluvia) {
    if (this.x + this.ancho >= lluvia.lx && this.x <= lluvia.lx + lluvia.lancho && this.y + this.alto >= lluvia.ly && this.y <= lluvia.ly + lluvia.lalto) {
      return true;
    }
    return false;
  }
}
