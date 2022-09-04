let d = 0.5;//La velocidad de los rectangulos
let bars = true;//Con barras o sin barras
let d2 = 0;//Valor para seber si los rectangulos iran hacia adelante o hacia atras

function setup() {
  createCanvas(700, 600);
  
  button = createButton('Grid');
  button.position(0, 0);
  button.mousePressed(changeBG);
}

function draw() {
  
  if(bars){//Dejo un fondo blanco y agrego barras negras
    
  background(0)
  
  push();
  fill(255)
   for (let i = 0; i < 30;i++) {
     rect((width/15)*i,0,width/30, height)
   }
  pop();  
    
  }else{
  background(255);
  }
  
  //Dibujando los rectangulos que se moveran
  
  push();
  fill(0,0,76)
  rect(d2,(height/5)*2,(width/30)*2, 25)
  pop();
  
  push();
  fill(255,255,0)
  stroke(255,255,0)
  rect(d2,(height/5)*3,(width/30)*2, 25)
  pop();
  
  d2+= d //uso d2 para que se muevan hacia adelante y atras
  
  if(d2 == (width-50)){//Aqui que ajusta si se moveran hacia adelante o hacia atras.
    d = -0.5
  }
  if(d2 == 0){
    d = 0.5
  }
  
  
  
  }

function changeBG() {//Aqui solo se cambian las barras
  if(bars){
    bars = false;
  }else{
    bars = true;
  }
}