class Pantallas {

  constructor() {
    this.pantalla = 0;
    this.anchoBot = 120;
    this.altoBot = 30;
    this.bot1 = new Botones(250, this.altoBot+270, this.anchoBot, this.altoBot );
    this.bot2 = new Botones(225, this.altoBot+330, this.anchoBot+65, this.altoBot);
    this.bot3 = new Botones(250, this.altoBot+400, this.anchoBot, this.altoBot );
    this.bot4 = new Botones(533, this.altoBot+510, this.anchoBot-80, this.altoBot+10 );
    this.bot5 = new Botones(520, this.altoBot+500, this.anchoBot-80, this.altoBot+15 );
    this.bot6 = new Botones(220, this.altoBot+290, this.anchoBot+15, this.altoBot);
    this.bot7 = new Botones(220, this.altoBot+360, this.anchoBot+10, this.altoBot);
    this.bot8 = new Botones(220, this.altoBot+270, this.anchoBot+15, this.altoBot);
    this.bot9 = new Botones(220, this.altoBot+330, this.anchoBot+10, this.altoBot);
    this.bot10 = new Botones(220, this.altoBot+530, this.anchoBot+10, this.altoBot);    
    this.J = new juego();

  }

  reiniciarJuego() {
    this.pantalla = 0;
    this.J = new juego();
  }

  dibujar() {
    if (this.pantalla===0) {
       image(p[0], 0, 0, 600, 600);
       this.bot1.dibujarBoton(0, 1);
       this.bot2.dibujarBoton(0, 2);
       this.bot3.dibujarBoton(0, 4);
       this.J.reiniciar();
    } 
      else if (this.pantalla===1) {
      image(p[1], 0, 0, 600, 600);
      this.bot4.dibujarBoton(1, 2);
    } 
      else if (this.pantalla===2) {
      image(p[2], 0, 0, 600, 600);
      this.bot5.dibujarBoton(2, 3);
      
    }
      else if (this.pantalla===3) {
      image(p[3], 0, 0, 600, 600);     
      this.J.dibujar();
      this.J.detectarColision();
      this.ganar();
      this.perder();
    } 
     else if (this.pantalla ===4) {
      image(p[4], 0, 0, 600, 600);
      this.bot10.dibujarBoton(4, 0);
     } 
  }

   ganar(){    
     if (this.J.ganaste && this.pantalla === 3) {
        image(p[5], 0, 0, 600, 600);
        this.bot6.dibujarBoton(3, 0);
        this.bot7.dibujarBoton(3, 4);
     } 
   }
   
   perder(){
       if (this.J.perdiste && this.pantalla === 3) {
        image(p[6], 0, 0, 600, 600);
        this.bot8.dibujarBoton(3, 0);
        this.bot9.dibujarBoton(3, 4);
   } 
  }


   
  AcBotones() {
    
    if (this.bot1.presionarBotones(250, this.altoBot+270, this.anchoBot, this.altoBot) && this.pantalla===this.bot1.A) {
      this.pantalla = this.bot1.P;
    }
    if (this.bot2.presionarBotones(225, this.altoBot+330, this.anchoBot+65, this.altoBot)&&this.pantalla===this.bot2.A) {
      this.pantalla = this.bot2.P;
    }
    if (this.bot3.presionarBotones(0, this.altoBot, this.anchoBot, this.altoBot)&& this.pantalla===this.bot3.A) {
      this.pantalla = this.bot3.P;
    } 
     if (this.bot4.presionarBotones(533, this.altoBot+510, this.anchoBot-80, this.altoBot+10 )&& this.pantalla===this.bot4.A) {
      this.pantalla = this.bot4.P;
    }
    
     if (this.bot5.presionarBotones(520, this.altoBot+500, this.anchoBot-80, this.altoBot+15 )&& this.pantalla===this.bot5.A) {
      this.pantalla = this.bot5.P;
    } 
     if (this.bot6.presionarBotones(320, this.altoBot+270, this.anchoBot, this.altoBot) && this.pantalla===this.bot6.A) {
     this.pantalla = this.bot6.P;
      }
      
     if (this.bot7.presionarBotones(220, this.altoBot+320, this.anchoBot+10, this.altoBot) && this.pantalla===this.bot7.A) {
      this.pantalla = this.bot7.P;
      }
      
     if (this.bot8.presionarBotones(220, this.altoBot+270, this.anchoBot+15, this.altoBot) && this.pantalla===this.bot8.A) {
      this.pantalla = this.bot8.P;
      }
      
     if (this.bot9.presionarBotones(220, this.altoBot+330, this.anchoBot+10, this.altoBot) && this.pantalla===this.bot9.A) {
      this.pantalla = this.bot9.P;
      }
      
       if (this.bot10.presionarBotones(220, this.altoBot+530, this.anchoBot+10, this.altoBot) && this.pantalla===this.bot10.A) {
      this.pantalla = this.bot10.P;
      }
   }
 
}
