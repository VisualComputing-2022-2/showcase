let easycam;
let edge = 80;
let flag = 1;
let edge1 = 160;
let edge2 = 100;
let edge3 = edge2 * Math.sqrt(3);

let coin;
let coinTex;
let spaceship;
let spaceshipTex;
let skull;
let skullTex;
let container;
let containerTex;
let alien;
let alienTex;
let rose;
let roseTex;
let helmet;
let helmetTex;
let ball;
let ballTex;
let texShader;

function preload() {
  // no varyings need to be emitted from the vertex shader
  texShader = readShader('/showcase/sketches/shaders/non_euclidean.frag',
                         { varyings: Tree.NONE });  
  coin = loadModel('/showcase/sketches/shaders/coin.obj', true);
  spaceship = loadModel('/showcase/sketches/shaders/spaceship.obj', true);
  skull = loadModel('/showcase/sketches/shaders/skull.obj', true);
  container = loadModel('/showcase/sketches/shaders/container.obj', true);
  alien = loadModel('/showcase/sketches/shaders/alien.obj', true);
  rose = loadModel('/showcase/sketches/shaders/rose.obj', true);
  ball = loadModel('/showcase/sketches/shaders/ball.obj', true);
  helmet = loadModel('/showcase/sketches/shaders/helmet.obj', true);
}  

function setup() {
  createCanvas(550, 550, WEBGL);  
  shader(texShader);
  emitResolution(texShader);
  easycam = createEasyCam();
  coinTex = createGraphics(width, height, WEBGL);
  spaceshipTex = createGraphics(width, height, WEBGL);
  skullTex = createGraphics(width, height, WEBGL);
  containerTex = createGraphics(width, height, WEBGL);
  alienTex = createGraphics(width, height, WEBGL);
  roseTex = createGraphics(width, height, WEBGL);
  helmetTex = createGraphics(width, height, WEBGL);
  ballTex = createGraphics(width, height, WEBGL);
}

function draw() {
  // 1. compute current main canvas camera params
  let position = treeLocation();
  let center = p5.Vector.add(position, treeDisplacement());
  let up = treeDisplacement(Tree.j);
  // in case the current camera projection params are needed check:
  // https://github.com/VisualComputing/p5.treegl#frustum-queries
  
  // 2. offscreen rendering
  
  // coin
  coinTex.background(200);
  coinTex.reset();
  coinTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  coinTex.push();
  coinTex.noStroke();
  coinTex.normalMaterial();
  coinTex.scale(1, -1);
  coinTex.scale(0.5);
  coinTex.model(coin);
  coinTex.pop();
  
  // spaceship
  spaceshipTex.background(200);
  spaceshipTex.reset();
  spaceshipTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  spaceshipTex.push();
  spaceshipTex.noStroke();
  spaceshipTex.normalMaterial();
  spaceshipTex.scale(1, -1);
  spaceshipTex.scale(0.8);
  spaceshipTex.model(spaceship);
  spaceshipTex.pop();
  
  // skull
  skullTex.background(200);
  skullTex.reset();
  skullTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  skullTex.push();
  skullTex.noStroke();
  skullTex.normalMaterial();
  skullTex.scale(1, -1);
  skullTex.scale(0.8);
  skullTex.model(skull);
  skullTex.pop();
  
  // container
  containerTex.background(200);
  containerTex.reset();
  containerTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  containerTex.push();
  containerTex.noStroke();
  containerTex.normalMaterial();
  containerTex.scale(1, -1);
  containerTex.scale(0.8);
  containerTex.model(container);
  containerTex.pop();
  
  // alien
  alienTex.background(200);
  alienTex.reset();
  alienTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  alienTex.push();
  alienTex.noStroke();
  alienTex.normalMaterial();
  alienTex.scale(1, -1);
  alienTex.scale(0.8);
  alienTex.model(alien);
  alienTex.pop();
  
  // helmet
  helmetTex.background(200);
  helmetTex.reset();
  helmetTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  helmetTex.push();
  helmetTex.noStroke();
  helmetTex.normalMaterial();
  helmetTex.scale(1, -1);
  helmetTex.scale(0.8);
  helmetTex.model(helmet);
  helmetTex.pop();
  
  // ball
  ballTex.background(200);
  ballTex.reset();
  ballTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  ballTex.push();
  ballTex.noStroke();
  ballTex.normalMaterial();
  ballTex.scale(1, -1);
  ballTex.scale(0.8);
  ballTex.model(ball);
  ballTex.pop();
  
  // rose
  roseTex.background(200);
  roseTex.reset();
  roseTex.camera(position.x, position.y, position.z,
                  center.x, center.y, center.z,
                  up.x, up.y, up.z);
  roseTex.push();
  roseTex.noStroke();
  roseTex.normalMaterial();
  roseTex.scale(1, -1);
  roseTex.scale(0.8);
  roseTex.model(rose);
  roseTex.pop();
  
  if (flag == 1) {
      cube();
  } 
  else if(flag == 2) {
      octa();
  }
}
  
  
function cube(){
    // 3. main canvas
    background(255);
    push();
    stroke('#3b0ebc');
    strokeWeight(5);

    // right (+x)
    texShader.setUniform('texture', roseTex);
    beginShape();
    vertex(+edge, -edge, +edge);
    vertex(+edge, -edge, -edge);
    vertex(+edge, +edge, -edge);
    vertex(+edge, +edge, +edge);
    endShape(CLOSE);

    // left (-x)
    texShader.setUniform('texture', alienTex);
    beginShape();
    vertex(-edge, -edge, +edge);
    vertex(-edge, +edge, +edge);
    vertex(-edge, +edge, -edge);
    vertex(-edge, -edge, -edge);
    endShape(CLOSE);    

    // bottom (+y)
    texShader.setUniform('texture', spaceshipTex);
    beginShape();
    vertex(-edge, +edge, +edge);
    vertex(+edge, +edge, +edge);
    vertex(+edge, +edge, -edge);
    vertex(-edge, +edge, -edge);
    endShape(CLOSE);

    // top (-y)
    texShader.setUniform('texture', coinTex);
    beginShape();
    vertex(-edge, -edge, +edge);
    vertex(+edge, -edge, +edge);
    vertex(+edge, -edge, -edge);
    vertex(-edge, -edge, -edge);
    endShape(CLOSE);    

    // front (z+)
    texShader.setUniform('texture', helmetTex);
    beginShape();
    vertex(-edge, -edge, +edge);
    vertex(+edge, -edge, +edge);
    vertex(+edge, +edge, +edge);
    vertex(-edge, +edge, +edge);
    endShape(CLOSE);

    // back (-z)
    texShader.setUniform('texture', containerTex);
    beginShape();
    vertex(-edge, -edge, -edge);
    vertex(-edge, +edge, -edge);
    vertex(+edge, +edge, -edge);
    vertex(+edge, -edge, -edge);
    endShape(CLOSE);
    pop();
  }

function octa(){
    // 3. main canvas
    background(255);
    push();  
    stroke('#3b0ebc');
    strokeWeight(5);

    // frontup (+z+x)
    texShader.setUniform('texture', helmetTex);
    beginShape();
    vertex(-edge2, 0, +edge2);
    vertex(+edge2, 0, +edge2);
    vertex(0, -edge3, 0);
    endShape(CLOSE);

    // backup (+z-x)
    texShader.setUniform('texture', ballTex);
    beginShape();
    vertex(-edge2, 0, -edge2);
    vertex(+edge2, 0, -edge2);
    vertex(0, -edge3, 0);
    endShape(CLOSE);

    // rightup (+z+y)
    texShader.setUniform('texture', roseTex);
    beginShape();
    vertex(+edge2, 0, +edge2);
    vertex(+edge2, 0, -edge2);
    vertex(0, -edge3, 0);
    endShape(CLOSE);

    // leftup (+z-y)
    texShader.setUniform('texture', alienTex);
    beginShape();
    vertex(-edge2, 0, +edge2);
    vertex(-edge2, 0, -edge2);
    vertex(0, -edge3, 0);
    endShape(CLOSE);    
  
    // frontdw (-z+x)
    strokeWeight(5);
    texShader.setUniform('texture', spaceshipTex);
    beginShape();
    vertex(-edge2, 0, +edge2);
    vertex(+edge2, 0, +edge2);
    vertex(0, +edge3, 0);
    endShape(CLOSE);

    // backdw (-z-x)
    texShader.setUniform('texture', coinTex);
    beginShape();
    vertex(-edge2, 0, -edge2);
    vertex(+edge2, 0, -edge2);
    vertex(0, +edge3, 0);
    endShape(CLOSE);

    // rightdw (-z+y)
    texShader.setUniform('texture', skullTex);
    beginShape();
    vertex(+edge2, 0, +edge2);
    vertex(+edge2, 0, -edge2);
    vertex(0, +edge3, 0);
    endShape(CLOSE);

    // leftdw (-z-y)
    texShader.setUniform('texture', containerTex);
    beginShape();
    vertex(-edge2, 0, +edge2);
    vertex(-edge2, 0, -edge2);
    vertex(0, +edge3, 0);
    endShape(CLOSE);
    pop();
}

function keyPressed() {
    switch (key) {
      case "c":        
          flag=1;         
          break;
      case "o":
          flag=2;
          break;      
    }
}