let x = 0.01;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  slider = createSlider(0, 0.09,0.01,0.01);
  slider.position(0, 0);
  

}

function draw() {
x+= slider.value();
background(255);
push();
noStroke();
fill(0,0,255)
circle(width/2, height/2, 30);
pop();
push();
noStroke();
translate (width/2, height/2);
fill(0,0,255)
rotate(x)
rect(0,50,5,80)
pop();
if(frameCount % 50 == 0){
push();
noStroke();
translate (width/2, height/2);
fill(0,0,255)
rotate(x)
rect(0,140,5,85)
pop();  
}

}