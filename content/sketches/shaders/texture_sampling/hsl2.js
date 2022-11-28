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
    tortuga = loadImage("https://i.imgur.com/Jvh1OQm.jpeg");
  }
  
  
function setup() {
    createCanvas(650, 500, WEBGL);
    noStroke();
    textureMode(NORMAL);
    shader(Shader);
  
    hsvSelect = createSelect();
    hsvSelect.position(10, 10);
    hsvSelect.option("Original", 0);
    hsvSelect.option("a HGV", 1);
    hsvSelect.option("a HSL", 2);
    hsvSelect.selected("none");
    hsvSelect.changed(() => {
      Shader.setUniform("selectedTool", hsvSelect.value());
    });
    Shader.setUniform("texture", tortuga);


  }
  
  function draw() {
    Shader.setUniform("mousePos", [map(mouseX, 0, width, 0.0, 1.0), map(mouseY, 0, width, 0.0, 1.0)]);
    background(0);
    quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2 );
  }