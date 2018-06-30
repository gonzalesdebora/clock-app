let miHora;
let rotaHora;
let miSegundo;
let rotaSegundo;
let miMinuto;
let rotaMinuto;
let rotaLuna;

let miLuna;
let c;
let e;
let td;
let b;
let m;
let y;
let d;


function setup() {

createCanvas(400, 400);

}

function draw () {
  background(0);

  miHora = hour();
  rotaHora = map(miHora, 0, 23, 0, 720);
  miSegundo = second();
  rotaSegundo = map(miSegundo, 0, 59, 0, 359);
  miMinuto = minute();
  rotaMinuto = map(miMinuto, 0, 59, 0, 359);

  // fases de la luna
  miLuna = day(); month(); year();
  rotaLuna = map(miLuna, 0, 29, 0, 360);

  //estrutura reloj
  noFill();
  stroke(255);
  ellipse(200,200, 384, 384);

  noFill();
  stroke(255);
  ellipse(200,200, 318, 318);

  //12h
  noFill();
  stroke(255);
  rect(222, 56, 9, 36);

  noFill();
  stroke(255);
  rect(208, 56, 9, 36);

  noFill();
  stroke(255);
  beginShape();
  vertex(172, 56);
  vertex(208, 92);
  vertex(176, 92);
  vertex(208, 56);
  endShape(CLOSE);

  //6h
  noFill();
  stroke(255);
  beginShape();
  vertex(176, 311);
  vertex(198, 347);
  vertex(215, 311);
  endShape(CLOSE);

  noFill();
  stroke(255);
  rect(215, 311, 9, 36);

  //3h
  noFill();
  stroke(255);
  rect(310, 180, 9, 36);

  noFill();
  stroke(255);
  rect(325, 180, 9, 36);

  noFill();
  stroke(255);
  rect(340, 180, 9, 36);

  //9h
  noFill();
  stroke(255);
  rect(52, 180, 9, 36);

  noFill();
  stroke(255);
  beginShape();
  vertex(59, 180);
  vertex(95, 216);
  vertex(59, 216);
  vertex(59, 216);
  vertex(95, 180);
  endShape(CLOSE);

  //lunas
  noFill();
  stroke(255);
  ellipse(135, 200, 38, 38);

  fill(255);
  stroke(255);
  ellipse(270, 200, 38, 38);

  fill(255);
  arc(200, 140, 38, 38, -PI+QUARTER_PI*2, HALF_PI, CHORD);

  fill(255);
  arc(200, 260, 38, 38, HALF_PI, PI+QUARTER_PI*2, CHORD);

  //ponteros
  push();
  translate(200, 200);
  rotate(radians(rotaHora));
  stroke(0, 255, 0);
  line(0, 0, 0, -100);
  pop();

  push();
  translate(200, 200);
  rotate(radians(rotaSegundo));
  stroke(0, 255, 255);
  line(191, 0, 160, 0);
  pop();

  push();
  translate(200, 200);
  rotate(radians(rotaMinuto));
  stroke(255, 0, 255);
  line(0, 0, 0, -157);
  pop();

  //puntero luna con estrellita
  push();
  translate(200, 200);
  rotate(radians(rotaLuna));
  stroke(255, 255, 0);
  line(0, 0, 0, -50);
  noStroke();
  fill(255, 255, 0);
  beginShape();
  vertex(0, -50);
  vertex(-6, -46);
  vertex(-5, -53);
  vertex(-10, -58);
  vertex(-3, -59);
  vertex(0, -65);
  vertex(3, -59);
  vertex(9, -58);
  vertex(10, -58);
  vertex(4, -53);
  vertex(6, -46);
  endShape(CLOSE);
  pop();

}
