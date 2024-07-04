// let IMG;
let curvas = [];
let claras = [];
let oscuras = [];

let listoClaras = false;
let listoOscuras = false;
let listoCurvas = false;

let monitorear = false;
let pitch;
let audioContext;
let gestorAmp;
let gestorPitch;
const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

let FREC_MIN = 130;
let FREC_MAX = 1400;
let frec_min = FREC_MIN;
let frec_max = FREC_MAX;

let AMP_MIN = 0.02;
let AMP_MAX = 0.3;
let mic;
let amp; //amplitud/volumen
let IMPRIMIR = true;
let silbar;
let grito;
let haySonido;
let frecuencia;
let antesHabiaSonido;
let playing = true;
let empece = 0;
let queCurvas = [];
let queOscuras = [];
let queClaras = [];

let maskImage;

function setup() {
  createCanvas (windowWidth, windowHeight);

  //prueba
  let nombre = "data/trazoFondo.mov";
  prueba = new m_Video(nombre);

  //-----claras
  for(let i=0; i<7; i++ ) {
    let nombre2 = "data/claras/c"+nf( i, 2)+".webm";
    claras[i] = new m_Video(nombre2);
  }

  //------oscuras
  for(let i=0; i<6; i++ ) {
    let nombre3 = "data/oscuras/osc"+nf( i, 2)+".webm";
    oscuras[i] = new m_Video(nombre3);
  }

  
  //-----curvas
  for(let i=0; i<6; i++ ) {
    let nombre1 = "data/curvas/cur"+nf( i, 2)+".webm";
    curvas[i] = new v_Video(nombre1);
  } 



  //-------RANDOM
  while(queCurvas.length<2){
    let existe = false;
    let cual = int(random(curvas.length));
    for(let i=0; i<queCurvas.length; i++){
      if(queCurvas[i] == cual){
          existe = true;
        }
    }
    if (!existe){
      queCurvas.push(cual);
      }
  }
  while(queOscuras.length<3){
    let existe1 = false;
    let cual1 = int(random(oscuras.length));
    for(let i=0; i<queOscuras.length; i++){
      if(queOscuras[i] == cual1){
          existe1 = true;
        }
    }
    if (!existe1){
      queOscuras.push(cual1);
      }
  }
  while(queClaras.length<2){
    let existe1 = false;
    let cual1 = int(random(claras.length));
    for(let i=0; i<queClaras.length; i++){
      if(queClaras[i] == cual1){
          existe1 = true;
        }
    }
    if (!existe1){
      queClaras.push(cual1);
      }
  }

  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  userStartAudio();
  gestorAmp =  new GestorSenial( AMP_MIN, AMP_MAX);
  gestorPitch = new GestorSenial( FREC_MIN, FREC_MAX);

  background(225, 225, 192);

}

function draw() {
  fill(225, 225, 192);
  rect(0, 0, 400, 50);
  if (monitorear){
    gestorAmp.dibujar(100, 100);
    gestorPitch.dibujar(100, 300);
  }

  amp = mic.getLevel();
  gestorAmp.actualizar(amp);

  if (IMPRIMIR){
    printData();
  }
  haySonido = gestorAmp.filtrada > AMP_MIN;  //haySonido=true
  grito = gestorAmp.filtrada > AMP_MAX; // grito = true
  let empezoElSonido = haySonido && !antesHabiaSonido;
  let finDelSonido = !haySonido && antesHabiaSonido;
  
  if (empezoElSonido){  
    console.log("empezo sonido");
    empece = Date.now() ;
  }

  for(let i=0; i<queCurvas.length; i++ ) {
    curvas[queCurvas[i]].dibujar();
  }    

  for(let i=0; i<queOscuras.length; i++ ) {
    oscuras[queOscuras[i]].dibujar();
  }    

  for(let i=0; i<queClaras.length; i++ ) {
    claras[queClaras[i]].dibujar();
  } 

  // for(let i=0; i<6; i++ ) {
  //   oscuras[i].dibujar();
  // }     

  // for(let i=0; i<7; i++ ) {
  //   claras[i].dibujar();
  // }   

  // prueba.dibujar();

  if (finDelSonido){  
    console.log("termino sonido");
    let cuantoDuro = (Date.now()-empece)/1000.0;
    console.log(cuantoDuro)
    if(cuantoDuro>2){
// --------------- CURVAS --------------------
      if(cuantoDuro>4){
        console.log("sonido largo");
        for(let i=0; i<queCurvas.length; i++ ) {
          curvas[queCurvas[i]].play();
          listoCurvas = true;
        }
//-------------- LINEAS OSCURAS ------------------ 
      }else{
        console.log("sonido corto");
        // prueba.play();

        for(let i=0; i<queOscuras.length; i++ ) {
          oscuras[queOscuras[i]].play();
          listoOscuras = true;
        }

        // for(let i=0; i<5; i++ ) {
        //   oscuras[i].play();
        //   listoOscuras = true;
        // }  
      }
    } 
  }
// ----------LINEAS CLARAS-----------
  if (grito){ 
    // for(let i=0; i<7; i++ ) {
    //   claras[i].play();
    //   listoClaras = true;
    // }
    console.log("GRITO");
    for(let i=0; i<queClaras.length; i++ ) {
      claras[queClaras[i]].play();
      listoClaras = true;
    }


  }
  antesHabiaSonido = haySonido; //guardo el estado del fotograma anterior en "antesHabiaSonido" ---> pasa a ser true


  //reiniciar
  if(listoClaras && listoCurvas && listoOscuras){
    reiniciarObra();
  }
}

function reiniciarObra() {
  setTimeout(() => {
    listoClaras = false;
    listoOscuras = false;
    listoCurvas = false;
    queCurvas = [];
    setup();
  }, 8000); // 8000 milisegundos = 8 segundos
}
//------------------- PITCH -----------------------
function startPitch() {
  pitch = ml5.pitchDetection(model_url, audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      gestorPitch.actualizar(frequency);
    } 
    getPitch();
  })
}

function printData(){
  push();
  textSize(16);
  fill(0);
  let texto;
  texto = 'amplitud: ' + amp;
  text (texto, 20, 20);
  pop();
}