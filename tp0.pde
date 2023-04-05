//Cirielli Florencia
//tp0 comision 1 

PImage paisaje;  
PImage grilla;
size(800, 400);
paisaje = loadImage("mountains.jpg");
grilla = loadImage("grilla.png");
paisaje.resize(400, 400);


background(67, 72, 185);
noStroke();
image(paisaje, 0, 0, 400, 400);
fill(200, 225, 234);
ellipse(800, 135, 300, 250);
fill(54, 173, 69);
rect(400, 170, 400, 650);
fill(255);
triangle(400, 170, 525, 25, 700, 170);
fill(240, 243, 245);
triangle(450, 170, 585, 25, 750, 170);
fill(225, 233, 234);
quad(625, 170, 700, 120, 800, 120, 800, 170);
fill(49, 175, 0);
quad(700, 170, 775, 150, 800, 150, 800, 170);
fill(131, 59, 0);
rect(500, 150, 3, 30);
fill(222, 20, 172);
ellipse(500, 135, 35, 45);
rect(400, 170, 400, 10);
//image(grilla, 0, 0);
//image(grilla, 400, 0);
