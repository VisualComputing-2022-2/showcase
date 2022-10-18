const rotate_x_matrix = [];
var angle=3;
var tallBoxes=true;
var tallCones=false;
var tallTorus=false;

function setup() {
    createCanvas(600, 400,WEBGL);
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

  //rotateX(angle);
  //rotateX(84);
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
  //figura del fondo
    push();
    translate(8,18,26);
    fill(120);
    box(10, 10, 50);
    pop();
    
    //figura de adelante
    push();
    translate(73,63,31);
    fill(120);
    box(10, 10, 50);
    pop();     
}

function drawTallCones(){  
  //figura del fondo
    push();
    translate(8,18,26);
    fill(0);
    cone(5, 50);  
    pop();
    
    //figura de adelante
    push();
    translate(73,63,31);
    fill(0);
    cone(5, 50);
    pop();     
}

function drawTorus(){  
  //figura del fondo
    
    push();
    rotateXaxis(-90);
    translate(8,18,26);
    fill(0);
    torus(10, 4); 
    pop();
    
    //figura de adelante
    push();
    rotateXaxis(-90);
    translate(73,63,31);
    fill(0);
    torus(10, 4);
    pop();     
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
    }
}