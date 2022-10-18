const rotate_x_matrix = [];
var angle=3;
var tallBoxes=true;
var tallCones=false;
var tallTorus=false;
var compare=false;

function setup() {
    createCanvas(600, 400,WEBGL);
    createEasyCam({distance : 150, center:[0,-46,0]});
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
    fill(255);
    stroke(0);
    beginShape(); 
    vertex(0,0,0);
    vertex(80,60,10);
    vertex(100,100,0);
    vertex(0,100,0);
    endShape();
    
    //izq
    fill(168,218,220);
    stroke(0);
    beginShape(); 
    vertex(0,0,0);
    vertex(0,100,0);
    vertex(0,100,100);
    vertex(0,0,100); 
    endShape();

    //derecha
    fill(168,218,220);
    stroke(0);
    beginShape(); 
    vertex(100,100,0);
    vertex(80,60,10);
    vertex(80,60,90);
    vertex(100,100,100);
    endShape();

    //fondo
    fill(168,218,220);
    stroke(0);
    beginShape(); 
    vertex(0,0,0);
    vertex(80,60,10);
    vertex(80,60,90);
    vertex(0,0,100);
    endShape();

    line(0, 0, 0, 0, 0, 100)

    //lineas del piso
    line(0, 0, 0, 0, 100, 0)
    line(20,17, 2.5, 25, 100, 0)
    line(40,30, 5, 50, 100, 0)
    line(60, 45, 7.5, 75, 100, 0)

    if(tallBoxes){
        drawTallBoxes();
    }
    else if(tallCones){
        drawTallCones();
    }
    else if(tallTorus){
        drawTorus();
    }
    angle+=0.5;


}


function drawTallBoxes(){  
  
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
    translate(8,18,26);
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

function drawTallCones(){  
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
    translate(8,18,26);
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

function drawTorus(){  
  
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
      translate(15,25,15);
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