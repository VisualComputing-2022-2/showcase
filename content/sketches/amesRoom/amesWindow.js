// let img;

// function preload(){
//   img = loadImage('https://i.imgur.com/zrcaKGs.jpg')
// }

// function setup() {
//   createCanvas(500, 400, WEBGL);
//   //createEasyCam({distance : 150, center:[0,-46,0]});
// }

// function draw() {
//   background(255);  
//   rotateY(frameCount * 0.03);
//   translate(50,0)
//   rect(-300, -200, 600, 400);
//   noStroke();
//   texture(img);
// }5

let angle = 0;
let cam;
let spher = false;
let sti = false;
let lig = false;

function setup() {
  createCanvas(500, 500, WEBGL);  
  cam = createCamera();  
}

function draw() {
  background(255);
  orbitControl(0,5,0); 
  cam.ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 1000);  
  push();
  rotateY(frameCount * 0.03);
  beginShape();
  push();
  
  translate(-180,-150);  
  
  // vertex(10,95,0,0.17,0.34);
  // vertex(10,160,0,0.17,0.66);
  // vertex(310,210,0,0.8,1);
  // vertex(310,10,0,0.8,0);  

  endShape(CLOSE);
  push(); 
  angle += 0.02;
  if (spher)
  {    
    sph();
  }
  pop();
  pop();
  if (sti)
  {
    stick();
  }  
  ambientLight(255);
  ambientMaterial(117,170,219);
  noStroke();
  if (lig)
  {
    normalMaterial();      
  }
  translate(-20,-30);
  rotateY(PI/2);   
  
  push();
  rotateX(PI/50);
  box(20,20,300);
  pop();
  
  
  push();
  translate(0,60); 
  rotateX(-PI/24);
  box(20,20,300);  
  pop();
  
  push();
  translate(0,-60);
  rotateX(PI/14);
  box(20,20,300);
  pop();
  
  push();
  translate(0,-7,140);
  rotateX(PI/2);
  box(20,20,189);
  pop();
  
  push();
  translate(0,7,-140);
  rotateX(PI/2);
  box(20,20,89);
  pop();
  
  push();
  translate(0,5,-80);
  rotateX(PI/2);
  box(20,20,103);
  pop();
  
  push();
  translate(0,0,0);
  rotateX(PI/2);
  box(20,20,113);
  pop();
}

function stick()
{
  push();
  translate(-50,-2);
  rotateX(PI/8)
  normalMaterial();
  box(20,20,200);
  pop();
}

function sph()
{
  translate(0,175);
  normalMaterial();
  sphere(20); 
}

function keyPressed() {

    switch (key) {
        case "e":            
            spher=!spher;            
            break;
        case "s":
            sti=!sti;
            break;   
        case "m":
            lig=!lig;
            break;
    }
}