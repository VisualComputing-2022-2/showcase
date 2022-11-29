var blendModes;
var blendModeIndex = 0;
var col=1;

function setup() {
    blendModes = [ADD, DIFFERENCE, LIGHTEST, DARKEST];
    createCanvas(400, 400);

    blendMode(blendModes[blendModeIndex]);

    text(blendModes[blendModeIndex],180,25);  
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
  setup();  
  circle(200,200,200); 
}

function draw() {  
}

function keyPressed() {
    switch (key) {
      case "r":            
          setup();
          fill('red');
          circle(200,200,200);  
          col=1;
          break;
      case "b":
          setup();
          fill('blue');
          circle(200,200,200);
          col=2;
          break;   
      case "g":
          setup();
          fill(0,255,0);
          circle(200,200,200);
          col=3;
          break;
    }
}