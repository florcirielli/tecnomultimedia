//Cirielli Florencia
//legajo 92820/6
//tp1, comision 1

PImage imagen1, Imagen2, Imagen3;
int segundos;
float posX;
float posY;
PFont t;
int px, py, ancho, alto;
int px2, py2, ancho2, alto2;
boolean inicio;

void setup() {
 size( 640, 480);
 imagen1 = loadImage("imagen 1.jpg");
 Imagen2 = loadImage("Imagen 2.jpg");
 Imagen3 = loadImage("Imagen 3.jpg");
 t = loadFont("GloucesterMT-ExtraCondensed-48.vlw");
 textFont(t, 35);
 textAlign(CENTER, CENTER);
 textSize(40);
 posX = 700;
 posY = 400;
 px = 500;
 py = 400;
 px2 = 250;
 py2 = 200;
 ancho = 100;
 alto = 50;
 ancho2 = 150;
 alto2 = 100;
 inicio = false; 
}
void draw() {
 image(imagen1, 0, 0, 640, 480);
 image(Imagen2, 0, 0, 640, 480);
 image(Imagen3, 0, 0, 640, 480);
 fill(0);
  
 if (frameCount%60==0) {
  segundos++;
 }
 
 if (inicio == false){
  background (255);
  fill(0);
  rect (110, 75, 400, 50);
  fill (255);
  text ("Presionar el boton rojo para iniciar", 310, 100);
  fill (200, 0, 0);
  rect(px2, py2, ancho2, alto2);
  fill (255);
  text ("inicio", px2, py2, ancho2, alto2);
  segundos = 0;
 }
 
  if (inicio == true) {
   if (segundos <=5){
   image(imagen1,  0, 0, 640, 480);
   fill (255);
   text("Glaciar Perito Moreno", posX, height/2);
  } 
   
   else if (segundos <=11){
   image(Imagen2,  0, 0, 640, 480);
   fill (0);
   text("Lugar turistico de Argentina en la provincia de Santa Cruz", width/2, posY);
  }
  
   else {
   image(Imagen3,  0, 0, 640, 480);
   fill (0);
   text("Es muy frio y tiene mucha nieve, ¡A abrigarse mucho!", width/2, posX);
  }
  
   if (posX>(width/2)) {
    posX --;
  }
  if (segundos ==5){
    posY = 500;
  }
  if (posY>(height/2)){
    posY --;
  }
  if (segundos ==6){
    posY = 500;
    posX = 200;
  }
   if (segundos ==11){
    posX = -20;
  }
  if (posX<(width/2)) {
    posX ++;
  }
}
 if (segundos >=18){
 fill(200, 0, 0);
 rect(px, py, ancho, alto);
 fill(255);
 text("reinicio", px, py, ancho, alto);
 }
}
void mousePressed() {
  if (mouseX>px && mouseX<px+ancho && mouseY>py && mouseY<py+alto) {
  segundos =0;
  posX = 500;
  inicio = false;
  }
  
  if (mouseX>px2 && mouseX<px2+ancho2 && mouseY>py2 && mouseY<py2+alto2) {
   inicio = true;
  }
}
