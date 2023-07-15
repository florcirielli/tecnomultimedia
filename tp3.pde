//Cirielli Florencia
//legajo 92820/6
//tp3, comision 1
//Video: https://youtu.be/uyruSVHFy-w
int cant = 14;
PImage [] pantallasI = new PImage[cant];
PImage [] opcionesI = new PImage[3];
String [] textos = {"Vendran lluvias suaves", "En un hogar futurista, en el año 2026. Vivían los McClellan, una familia común rodeada de tecnología avanzada.", "Un trágico día una lluvia radioactiva azotó la ciudad y los McClellan, se ven obligados a abandonar el hogar.","La casa queda sola", "La tecnología continúa funcionando a pesar de que la familia no está, todos los robots de la casa hacen su trabajo, cuentan la hora, limpian, continúan con la rutina de la familia a pesar de que esta no se encuentre.", "La lluvia continúa en la ciudad, la casa frente a esta puede activar un sistema de seguridad",
"La casa permanece en pie y la tecnología continúa funcionando", "Un mediodía, el perro  de la familia aparece en la puerta aullando y llorando, no tiene muy buena pinta, parece desnutrido y muy angustiado", "El perro desesperado comienza a buscar a su familia, hasta que finalmente muere debido a la angustia y la desesperación", "Unas horas después, los sistemas de las casa comienzan a fallar, la naturaleza comienza a tomar las calles y la casa.", "El sistema de la casa comienza a prenderse fuego.", " La casa cede y deja de existir para siempre, la tecnología no puede contra la naturaleza ni puede existir sin humanos", "Fin", "Creditos:"} ;
String [] opciones = { "Toda la familia muere luego de un tiempo", "La casa cede más rápido a la naturaleza y la tecnología dentro de ella termina por dejar de funcionar.", "La casa continúa en pie, y la tecnología continúa fallando hasta que luego de un tiempo termina por dejar de funcionar igualmente"};
String [] creditos = { "Director: Florencia Cirielli 92820/6", "Programador: Florencia Cirielli 92820/6", "Imagenes: IA / Google", "Autor: Ray Bradbury"};
int pantalla = 0;
int opcionesB = 0;

void setup(){
  size (600, 600);
    for (int i=0; i<cant; i++) {
    pantallasI[i] = loadImage("foto"+i+".jpg");
    }
    
       for (int i=0; i<3; i++) {
    opcionesI[i] = loadImage("foto"+i+"(B).jpg");
    }
textSize(25);
}
  
void draw(){
   if(pantalla==0){
    image( pantallasI [0], 0, 0, 600, 600);
    Botones(500, 550, 150, 60, "INICIO", 150, 60);
    Botones(125, 550, 200, 60, "CREDITOS", 200, 60);
   }
  
   if(pantalla==1 ){
    image( pantallasI [1], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 150, 550, 175, 50);
    fill(0);
    text (textos [1], 300, 275, 500, 400);
    Botones (500, 300, 160, 60, "CONTINUAR", 160, 60);
   }
  
   if(pantalla==2){
    image( pantallasI [2], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 150, 550, 175, 50);
    fill(0);
    text (textos [2], 300, 275 ,500, 400);
    Botones(500, 300, 160, 60, "PERMANECER", 160, 60);
    Botones(100, 300, 160, 60, "ABANDONAR", 160, 60);
   }
  
   if( pantalla == 3){
    image( pantallasI [3], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 150, 350, 100, 50);
    fill(0);
    text (textos [3], 300, 325 ,500, 400);
    Botones(100, 300, 160, 60, "VOLVER", 160, 60);
    Botones (500, 300, 160, 60, "CONTINUAR", 160, 60);
   }
 
     else if( opcionesB == 3){
      image( opcionesI [0], 0, 0, 600, 600);
      fill(255, 255, 255, 100);
      rect( 300, 150, 450, 150, 50);
      fill(0);
      text (opciones [0], 300, 300, 500, 400);
      Botones (300, 550, 150, 60, "VOLVER", 150, 60);
     }
 
   if(pantalla==4){
    image( pantallasI [4], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 130, 500, 250, 50);
    fill(0);
    text (textos [4], 300, 225, 500, 400);
    Botones (500, 300, 160, 60, "CONTINUAR", 160, 60);
   }
  
   if(pantalla==5){
    image( pantallasI [5], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 70, 500, 120, 50);
    fill(0);
    text (textos [5], 300, 225, 500, 400);
    Botones (100, 300, 160, 60, "ACTIVAR", 160, 60);
    Botones(500, 300, 160, 60, "NO ACTIVAR", 160, 60);
   }

   if(pantalla==6){
    image( pantallasI [6], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 70, 500, 120, 50);
    fill(0);
    text (textos [6], 290, 230, 500, 400);
    Botones(100, 300, 160, 60, "VOLVER", 160, 60);
    Botones (500, 300, 160, 60, "CONTINUAR", 160, 60);
   }
 
      else if( opcionesB == 6){
       image( opcionesI [1], 0, 0, 600, 600);
       fill(255, 255, 255, 100);
       rect( 300, 70, 500, 150, 50);
       fill(0);
       text (opciones [1], 290, 210, 500, 400);
       Botones (300, 550, 150, 60, "VOLVER", 150, 60);
      }
 
   if(pantalla==7){
    image( pantallasI [7], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 100, 500, 200, 50);
    fill(0);
    text (textos [7], 300, 220, 500, 400);
    Botones (500, 300, 160, 60, "CONTINUAR", 160, 60);
   }
 
   if(pantalla==8){
    image( pantallasI [8], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 100, 500, 200, 50);
    fill(0);
    text (textos [8], 300, 220, 500, 400);
    Botones (500, 300, 160, 60, "CONTINUAR", 160, 60);
   }
 
   if(pantalla==9){
    image( pantallasI [9], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 100, 500, 200, 50);
    fill(0);
    text (textos [9], 300, 220, 500, 400);
    Botones (500, 300, 160, 60, "CONTINUAR", 160, 60);
   }
 
   if(pantalla==10){
    image( pantallasI [10], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 100, 500, 150, 50);
    fill(0);
    text (textos [10], 300, 270, 500, 400);
    Botones (500, 300, 160, 60, "APAGAR", 160, 60);
    Botones(100, 300, 160, 60, "NO APAGAR", 160, 60);
   }
   
   if(pantalla==11){
    image( pantallasI [11], 0, 0, 600, 600);
    fill(255, 255, 255, 100);
    rect( 300, 100, 500, 150, 50);
    fill(0);
    text (textos [11], 300, 260, 500, 400);
    Botones(100, 300, 160, 60, "VOLVER", 160, 60);
    Botones (500, 300, 160, 60, "CONTINUAR", 160, 60);
   }
    
      else if(opcionesB== 11){
       image( opcionesI [2], 0, 0, 600, 600);
       fill(255, 255, 255, 100);
       rect( 300, 100, 500, 150, 50);
       fill(0);
       text (opciones [2], 300, 250, 500, 400);
       Botones (300, 550, 150, 60, "VOLVER", 150, 60);   
      }
 
   if( pantalla == 12){
    image( pantallasI [12], 0, 0, 600, 600);
    Botones (300, 550, 150, 60, "CONTINUAR", 160, 60);
   }

   if( pantalla == 13){
    image( pantallasI [13], 0, 0, 600, 600);
    text (textos [13], 150, 100);
       for (int i=0; i<4; i++) {
        text(creditos[i], 300, 200+i*70);
       }
    Botones(300, 550, 150, 60, "INICIO", 150, 60);
   }
}
