var steps = 0
function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    slider = createSlider(0, 20 ,1, 1)
    slider.position(0, 0);
  }
  function draw() {
    steps = slider.value(); 
    translate(width / 2, height / 2); 
    //Vamos a pintar los cuadrados desde el más grande hasta el más chico en base al numero
    //de pasos
    for (let i = steps; i >= 1; i--) { 
    noStroke()//Quiramos los bordes
    push()//Aislamos unos cuadrados de otros
    colorMode(HSB);//La formula del color nace de mucha prueba y error :v
    fill(200, 100-(5*(steps-i)), 100);
    rect(0, 0, width*(i*(1/steps)),width*(i*(1/steps)));//La formula del tamaño es para ajustar
    //Todos los cuadrados segun el numero de pasos, entre más pasos, mayor tamaño tendra el cuadrado
    pop()
    }
  
  }