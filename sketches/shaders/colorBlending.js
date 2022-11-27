var blendModes;
var blendModeIndex;
var col=1;
  blendModeIndex = 0;

function setup() {
  blendModes = [
    BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD
  ];

  createCanvas(400, 400);
  blendMode(blendModes[blendModeIndex]);
  strokeWeight(0);  
    fill(255,0,0);
    square(0,0,200);
    fill(0,255,0);
    square(200,0,200);
    fill(0,0,255);
    square(0,200,200);
    fill(125,125,125);
    square(200,200,200);
}

function mousePressed() { 
  
  blendModeIndex = (blendModeIndex + 1) % blendModes.length;
  console.log(blendModes[blendModeIndex]);
  
  if(col==1){
    col++;
  }
  else if(col==2){
    col++;
  }
  else if(col==3){
    col=1;
  }
}

function draw() {
  blendMode(LIGHTEST);  
  if (col==1){
 
    setup();fill('red')
    circle(200,200,200)   
  }
  else if (col==2){

    setup();fill('blue')
    circle(200,200,200)   
  }
  else if (col==3){

    setup();fill(0,255,0)
    circle(200,200,200)
 
  }
}