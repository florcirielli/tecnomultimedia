class Principal {

  constructor() {
    this.pantalla = 0;
    this.anchoBot = 120;
    this.altoBot = 30;
    this.botonM = new Boton (250, this.altoBot+470, this.anchoBot, this.altoBot );
    this.botonD = new Boton (450, this.altoBot+490, this.anchoBot, this.altoBot );
    this.botonI = new Boton (30, this.altoBot+490, this.anchoBot, this.altoBot );
    this.J = new juego();
  }

  dibujar() {
    if (this.pantalla === 0) {
      image(p[0], 0, 0, 600, 600);
      this.botonM.dibujarBoton(0, 1, "Inicio" );
    }

    if (this.pantalla === 1) {
      image(p[1], 0, 0, 600, 600);
      this.botonD.dibujarBoton(1, 2, "Continuar");
    }

    if (this.pantalla === 2) {
      image(p[2], 0, 0, 600, 600);
      this.botonD.dibujarBoton(2, 3, "Permanecer");
      this.botonI.dibujarBoton(2, 4, "Abandonar");
    }

    if (this.pantalla === 3) {
      image(p[3], 0, 0, 600, 600);
      this.botonM.dibujarBoton (3, 2, "Volver");
    }

    if (this.pantalla === 4) {
      image(p[4], 0, 0, 600, 600);
      this.botonD.dibujarBoton (4, 5, "Continuar");
    }

    if (this.pantalla === 5) {
      image(p[5], 0, 0, 600, 600);
      this.botonD.dibujarBoton (5, 6, "Continuar");
    }


    if (this.pantalla === 6) {
      image(p[6], 0, 0, 600, 600);
      this.botonD.dibujarBoton (6, 7, "No activar");
      this.botonI.dibujarBoton(6, 8, "Activar");
    }

    if (this.pantalla === 7) {
      image(p[7], 0, 0, 600, 600);
      this.botonM.dibujarBoton (7, 6, "Volver");
    }

    if (this.pantalla === 8) {
      image(p[8], 0, 0, 600, 600);
      this.botonD.dibujarBoton (8, 9, "Continuar");
    }

    if (this.pantalla === 9) {
      image(p[9], 0, 0, 600, 600);
      this.botonD.dibujarBoton (9, 10, "Continuar");
    } else if (this.pantalla === 10) {
      image(p[10], 0, 0, 600, 600);
      this.botonD.dibujarBoton (10, 11, "Continuar");
    } else if (this.pantalla === 11) {
      image(p[11], 0, 0, 600, 600);
      this.botonD.dibujarBoton (11, 12, "Comenzar");
      this.J.reiniciar();
    } else if (this.pantalla === 12) {
      image(p[12], 0, 0, 600, 600);
      this.J.dibujar();
      this.J.detectarColision();
      this.ganar();
      this.perder();
    }

    if (this.pantalla === 13) {
      image(p[15], 0, 0, 600, 600);
      this.botonD.dibujarBoton (13, 14, "Continuar");
    }

    if (this.pantalla === 14) {
      image(p[16], 0, 0, 600, 600);
      this.botonD.dibujarBoton (14, 16, "Apagar");
      this.botonI.dibujarBoton(14, 15, "No apagar");
    }
    if (this.pantalla === 15) {
      image(p[17], 0, 0, 600, 600);
      this.botonM.dibujarBoton (15, 14, "Volver");
    }
    if (this.pantalla === 16) {
      image(p[18], 0, 0, 600, 600);
      this.botonD.dibujarBoton (16, 17, "Continuar");
    }
    if (this.pantalla === 17) {
      image(p[19], 0, 0, 600, 600);
      this.botonD.dibujarBoton (17, 18, "Continuar");
    }

    if (this.pantalla === 18) {
      image(p[20], 0, 0, 600, 600);
      this.botonM.dibujarBoton (18, 0, "Reiniciar");
    }
  }

  ganar() {
    if (this.J.ganaste && this.pantalla === 12) { //si ganaste de la clase juego es true y
      image(p[14], 0, 0, 600, 600);
      this.botonD.dibujarBoton (12, 13, "Continuar");
    }
  }

  perder() {
    if (this.J.perdiste && this.pantalla === 12) {
      image(p[13], 0, 0, 600, 600);
      this.botonI.dibujarBoton(12, 11, "Reiniciar");
    }
  }

  AccionarPantallas() {
    if (this.botonM.presionarBotones(250, this.altoBot+490, this.anchoBot, this.altoBot) && this.pantalla===this.botonM.A) { //si botonM, presionarBotones en dichos parametros y estoy en la pantalla Actual
      this.pantalla = this.botonM.P; 
    }

    if (this.botonD.presionarBotones(500, this.altoBot+490, this.anchoBot, this.altoBot) && this.pantalla===this.botonD.A) {
      this.pantalla = this.botonD.P;
    }

    if (this.botonI.presionarBotones(125, this.altoBot+490, this.anchoBot, this.altoBot) && this.pantalla===this.botonI.A) {
      this.pantalla = this.botonI.P;
    }
  }

  moverPersonaje(tecla) {
    this.J.moverProtagonista(tecla)
  }
}
