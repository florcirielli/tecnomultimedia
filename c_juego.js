class juego {
  
  constructor() {
    this.prot = new Protagonista(width/2, 500, 20, 100, 120, 100);
    this.Lluvia = [];
    for (let i=0; i<20; i++) {
      this.Lluvia[i] = new lluvia(i*30, i-30, 5, 20);
    }
    this.O = new obstaculos(100, 335, 100, 100, 170, 270, 70, 60, 350, 135, 200, 140);
    this.golpes = 0;
    this.perdiste = false;
    this.ganaste = false;
  }

  reiniciar() {
    this.prot = new Protagonista(width/2, 500, 20, 100, 120, 100);
    this.Lluvia = [];
    for (let i=0; i<20; i++) {
      this.Lluvia[i] = new lluvia(i*30, i-30, 5, 20);
    }
    this.golpes = 0;
    this.perdiste = false;
    this.ganaste = false;
  }

  dibujar() {
    this.prot.mostrar();
    for (let i=0; i<20; i++) {
      this.Lluvia[i].mostrarLluvia();
      this.Lluvia[i].Cae();
    }
    this.O.mostrar();
  }

  moverProtagonista(tecla) {
    this.tec = tecla;
    if (this.tec === UP_ARROW) {
      this.prot.moverAr();
    } else if (this.tec === DOWN_ARROW) {
      this.prot.moverAb();
    } else if (this.tec=== LEFT_ARROW) {
      this.prot.moverI();
    } else if (this.tec=== RIGHT_ARROW) {
      this.prot.moverD();
    }
  }

  detectarColision() {
    for (let i = 0; i < 20; i++) {
      if (this.Lluvia[i].golpea) {
        if (this.prot.colisiona(this.Lluvia[i])) {
          this.Lluvia[i].golpea = false;
          background(0, 200, 25);
          this.Lluvia[i].ly = -this.Lluvia[i].lalto;
          this.golpes ++;
        }
        if (this.golpes >= 3) {
          this.perdiste = true;
        }

        if (this.prot.y < 0) {
          this.ganaste = true;
        }
        this.detectarColisionObstaculos();
      }
    }
  }

  detectarColisionObstaculos() {
    if (this.O.colisiona(this.prot)) {
      background(255, 0, 0);
      this.golpes ++;
    }
  }
}
