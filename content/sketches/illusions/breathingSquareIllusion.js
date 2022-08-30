var x = 0; //Rotación
let t = 0; //Velociad de los amarillos
let t2 = 750;//Tamaño maximo de los amarillos
let esquinas = true;//Con o sin los amarillos

function setup() { 
  createCanvas(800, 800);
  rectMode(CENTER);
  button = createButton('Esquinas');
  button.position(0, 0);
  button.mousePressed(changeBG);
} 

function draw() { 
  background(220);
  
  //Aqui se hace la rotación del cuadrado azul
  push();
  x+= 0.01;
  translate (width/2, height/2);
  rotate(x);
  fill(0,0,255);
  rect(0, 0, 400, 400);
  pop();
  
  if(esquinas){
    push();
    fill(255,255,0);
    rect(0, 0, (t2), (t2))
    rect(width, 0, (t2), (t2));
    rect(width, height, (t2), (t2));
    rect(0, height, (t2), (t2));
    pop();   
  }
  //Si el tamaño de los amarillos llega al limite deseado, volvemos a t negativo
  //lo que hace que el tamñao empiece a decrecer hasta que entre al proximo if y se repite.
  if(t2==750){
    t=-0.25;
  }

  if(t2==500){
    t=0.25;
   } 
  t2 = t2+t
}

function changeBG() {
   if(esquinas){
    esquinas = false;
  }else{
    esquinas = true;
  }
}