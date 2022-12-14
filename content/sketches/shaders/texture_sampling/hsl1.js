let Shader;
let fiesta;
let tortuga;
let hsvSelect;
let colorTexture;
let imageSelect;
let mousePos;

function preload() {
  Shader = readShader("/showcase/sketches/shaders/texture_sampling/hsl.frag", { varyings: Tree.texcoords2 }
  );
  fiesta = loadImage("https://i.imgur.com/Jvh1OQm.jpeg");
}



function setup() {
  createCanvas(650, 500, WEBGL);
  noStroke();
  textureMode(NORMAL);
  shader(Shader);

  colorTexture = createSelect();
  colorTexture.position(10, 10);
  colorTexture.option("Original", 0);
  colorTexture.option("0° [1,0,0]", 1);
  colorTexture.option("60° [1,1,0]", 2);
  colorTexture.option("120° [0,1,0]", 3);
  colorTexture.option("180° [0,1,1]", 4);
  colorTexture.option("240° [0,0,1]", 5);
  colorTexture.option("300° [1,0,1]", 6);
  colorTexture.changed(() => {
    Shader.setUniform("colorTexture", colorTexture.value());
  });

  Shader.setUniform("texture", fiesta);


}

function draw() {
  Shader.setUniform("mousePos", [map(mouseX, 0, width, 0.0, 1.0), map(mouseY, 0, width, 0.0, 1.0)]);
  background(0);
  quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2 );
}