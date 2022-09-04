let bars = true;
function setup() {
  createCanvas(400, 400);
  
  button = createButton('Bars');
  button.position(0, 0);
  button.mousePressed(changeBG);
}

function draw() {
  background(255);
   //Arbol 1
  push();
  fill(0,255,0)
  noStroke()
  triangle(30, 250, 100, 250, 65, 100);
  rect(60,250,15,40)
  pop();
  push();
  fill(0,255,0)
  noStroke()
  triangle(270, 290, 340, 290, 305, 150);
  rect(300,290,15,40)
  pop();
  
  if(bars){
   //Primera mitad de las barras azules
  for(let i = 0;i <(height/10);i++){
    noStroke();
    fill(0,0,255)
    rect(0,(height/20)*i,width/2,height/20)
  } 
  }
  
  push();
  fill(0,255,0)
  noStroke()
  triangle(30, 250, 100, 250, 65, 100);
  rect(60,250,15,40)
  pop();
  
  if(bars){
   //Primera mitad de las barras amarillas
  for(let i = 0;i <(height/10);i++){
    noStroke()
    fill(255,255,0)
    rect(0,(height/10)*i,width/2,height/20)
  }
  
  //Segunda mitad de las barras amarillas
  for(let i = 0;i <(height/10);i++){
    noStroke();
    fill(255,255,0)
    rect(width/2,(height/20)*i,width/2,height/20)
  } 
  }
  
  //Arbol 2
  push();
  fill(0,255,0)
  noStroke()
  triangle(270, 290, 340, 290, 305, 150);
  rect(300,290,15,40)
  pop();
  
  if(bars){
   //Segunda mitad de las barras azules
  for(let i = 0;i <(height/10);i++){
    noStroke();
    fill(0,0,255)
    rect(width/2,(height/10)*i+(height/20),width/2,height/20)
  } 
  }
  
  
}

function changeBG() {
  if(bars){
    bars = false;
  }else{
    bars = true;
  }
}