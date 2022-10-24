let img;

function preload(){
  img = loadImage('https://i.imgur.com/zrcaKGs.jpg')
}

function setup() {
  createCanvas(500, 400, WEBGL);
  createEasyCam({distance : 400, center:[0,0,0]});
}

function draw() {
  background(255);  
  rotateY(frameCount * 0.03);
  translate(50,0)
  rect(-300, -200, 600, 400);
  noStroke();
  //image(img);
  texture(img);
}5