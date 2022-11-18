const density='Ñ@#9876543210?!abc;:+=-,._ ';
let cat_image;

function preload(){
  cat_image=loadImage("https://i.imgur.com/YncCi2N.jpg")
}
function setup() {
  createCanvas(700, 392);
}

function draw() {
  background(0);
  //image(cat_image, 0,0, width,height);
  cat_image.loadPixels();
  
  
  let w=width/cat_image.width;
  let h=height/cat_image.height;
  
  for(let i=0; i<cat_image.width;i++){
    for(let j=0; j<cat_image.height;j++){
      const pixel_index = (i+j*cat_image.width)*4;
      const r = cat_image.pixels[pixel_index+0];
      const g = cat_image.pixels[pixel_index+1];
      const b = cat_image.pixels[pixel_index+2];      
      const luminance = r*0.3 + g*0.59 + b*0.11;
      
      noStroke();
      fill(255);
      //square(i*w,j*h,w);
      
      const density_len=density.length;
      const charIndex= floor(map(luminance,0,255,density_len,0));
      
      textSize(w);
      textAlign(CENTER,CENTER);
      text(density.charAt(charIndex),i*w+w*0.5,j*h+h*0.5);
    }
  }
  
}