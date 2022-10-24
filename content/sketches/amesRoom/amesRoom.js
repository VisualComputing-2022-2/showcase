const rotate_x_matrix = [];
var x=0;
var y=0;
var z=0;
var x2 = 0;
var y2 = 0;
var z2 = 0;

var tallBoxes=true;
var tallCones=false;
var tallTorus=false;
var compare=false;

//Paredes
var leftW=true;
var rightW=true;
var floorH=true;
var ceiling=true;
var back=true;

var movement=false;
//Botones 
let buttonL;
let buttonR;
let buttonB;
let buttonC;
let buttonF;

let buttonM;

function setup() {
    createCanvas(600, 400,WEBGL);
    createEasyCam({distance : 150, center:[0,-50,0], rotation:[1,0.11, 0, 0]});
    document.oncontextmenu = ()=>false;
    
  
    //Botones
    //Techo
    buttonC = createButton('');
    buttonC.position(550,0);
    buttonC.size(10,10);
    buttonC.mousePressed(changeCeiling);
    //Izquierda
    buttonL = createButton('');
    buttonL.position(530,12);
    buttonL.size(10,10);
    buttonL.mousePressed(changeLeft);
    //Derecha
    buttonR = createButton('');
    buttonR.position(570,12);
    buttonR.size(10,10);
    buttonR.mousePressed(changeRight);
    //Fondo
    buttonB = createButton('');
    buttonB.position(550,12);
    buttonB.size(10,10);
    buttonB.mousePressed(changeBack);
    //Piso
    buttonF = createButton('');
    buttonF.position(550,24);
    buttonF.size(10,10);
    buttonF.mousePressed(changeFloor);
  
  
    //Movimiento
    buttonF = createButton('Movimiento');
    buttonF.position(515,50);
    buttonF.size(80,30);
    buttonF.mousePressed(changeMovement);
}

function rotateXaxis(angle){  
    let ct=cos(angle);
    let st=sin(angle);
    applyMatrix(  1, 0.0,  0.0,  0.0,
                0.0, ct, -st,  0.0,
                0.0, st,  ct,  0.0,
                0.0, 0.0, 0.0,  1.0);  
}

function draw() {
    background(175);
    angleMode(DEGREES);

  rotateXaxis(-84);
  //rotateX(angle);
  //rotateX(82);
  //rotateY(1.5);

    translate(-50,-50,0);


  
    //piso
    if(floorH){
    fill(255);
    stroke(0);
    beginShape(); 
    vertex(0,0,0);
    vertex(80,60,10);
    vertex(100,100,0);
    vertex(0,100,0);
    endShape();
      
    //lineas del piso
    line(0, 0, 0, 0, 100, 0)
    line(20,17, 2.5, 25, 100, 0)
    line(40,30, 5, 50, 100, 0)
    line(60, 45, 7.5, 75, 100, 0)
      
    }
    
    //techo
    if(ceiling){
    fill(100,211,230);
    stroke(0);
    beginShape(); 
    vertex(0,0,100);
    vertex(80,60,80);
    vertex(100,100,100);
    vertex(0,100,100);
    endShape();
    }
  
  
    //izq
    if(leftW){
    fill(168,218,220);
    stroke(0);
    beginShape(); 
    vertex(0,0,0);
    vertex(0,100,0);
    vertex(0,100,100);
    vertex(0,0,100); 
    endShape();
    }

    //derecha
    if(rightW){
    fill(168,218,220);
    stroke(0);
    beginShape(); 
    vertex(100,100,0);
    vertex(80,60,10);
    vertex(80,60,80);
    vertex(100,100,100);
    endShape();
    }

    //fondo
    if(back){
    fill(168,218,220);
    stroke(0);
    beginShape(); 
    vertex(0,0,0);
    vertex(80,60,10);
    vertex(80,60,80);
    vertex(0,0,100);
    endShape();
    line(0, 0, 0, 0, 0, 100)
    }

    

    

    if(tallBoxes){
        drawTallBoxes();
    }
    else if(tallCones){
        drawTallCones();
    }
    else if(tallTorus){
        drawTorus();
    }
    
  
    if(x>55){
      x2=-0.1;
      y2=-0.011;
      z2=-0.025;
    }

    if(x<3){
      x2=0.1;
      y2=0.011;
      z2=0.025;
     } 
    x = x2+x
    y = y2+y
    z = z2+z


}


function drawTallBoxes(){  
  
  if(movement){
    push();
    translate(12+x,45+z,26+y);
    fill(120);
    box(10, 10, 50);
    pop();  
  }else{
    
  
  if(compare){
    //figura del fondo
    push();
    translate(8,95,26);
    fill(120);
    box(10, 10, 50);
    pop();
    
    //figura de adelante
    push();
    translate(73,95,26);
    fill(120);
    box(10, 10, 50);
    pop(); 
  }else{
   //figura del fondo
    push();
    translate(12,45,26);
    fill(120);
    box(10, 10, 50);
    pop();
    
    //figura de adelante
    push();
    translate(73,72,31);
    fill(120);
    box(10, 10, 50);
    pop(); 
  }
  }
       
}

function drawTallCones(){ 
  if(movement){
    push();
    translate(12+x,45+z,26+y);
    rotateXaxis(-90)
    fill(0);
    cone(5, 50);  
    pop();
  }else{
    
  
  if(compare){
    //figura del fondo
    push();
    translate(8,95,26);
    rotateXaxis(-90)
    fill(0);
    cone(5, 50);  
    pop();
    
    //figura de adelante
    push();
    translate(73,95,26);
    rotateXaxis(-90)
    fill(0);
    cone(5, 50);
    pop();   
  }else{
   //figura del fondo
    push();
    translate(12,45,26);
    rotateXaxis(-90)
    fill(0);
    cone(5, 50);  
    pop();
    
    //figura de adelante
    push();
    translate(73,70,31);
    rotateXaxis(-90)
    fill(0);
    cone(5, 50);
    pop();    
  }
  }
}

function drawTorus(){  
  
  if(movement){
    push();
      translate(20+(x*0.8),30+(z*2.5),15+y);
      rotateXaxis(-90);
      fill(0);
      torus(10, 4); 
      pop();
  }else{
    
  
    if(compare){
      //figura del fondo
      push();
      translate(15,95,15);
      rotateXaxis(-90);
      fill(0);
      torus(10, 4); 
      pop();

      //figura de adelante
      push();
      translate(66,95,15);
      rotateXaxis(-90);
      fill(0);
      torus(10, 4);
      pop();  
    }else{
      //figura del fondo
      push();
      translate(20,30,15);
      rotateXaxis(-90);
      fill(0);
      torus(10, 4); 
      pop();

      //figura de adelante
      push();
      translate(66,63,20);
      rotateXaxis(-90);
      fill(0);
      torus(10, 4);
      pop();  
    }
  } 
}


function resetFigures(){
    tallBoxes=false;
    tallCones=false;
    tallTorus=false;
}


function keyPressed() {

    switch (key) {
        case "b":
            resetFigures();
            tallBoxes=true;            
            break;
        case "c":
            resetFigures();
            tallCones=true;
            break;
        case "t":
            resetFigures();
            tallTorus=true;
            break;            
        case "r":
            resetFigures();            
            break;
        case "f":
            compare = !compare          
            break;
    }
}

function changeLeft() {
  leftW = !leftW;
}
function changeRight() {
  rightW = !rightW;
}
function changeCeiling() {
  ceiling = !ceiling;
}
function changeFloor() {
  floorH = !floorH;
}
function changeBack() {
  back = !back;
}
function changeMovement() {
  movement = !movement;
}
