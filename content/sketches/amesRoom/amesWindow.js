let img;

function preload(){
  img = loadImage('content/docs/shortcodes/resources/images/window.jpg')
}

function setup() {
  createCanvas(500, 400, WEBGL);
}

function draw() {
  background(255);  
  rotateY(frameCount * 0.01);
  translate(50,0)
  rect(-300, -200, 600, 400);
  noStroke();
  //image(img);
  texture(img);
}