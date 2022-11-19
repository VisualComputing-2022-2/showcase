const density='Ñ@#9876543210?!abc;:+=-,._ ';

let img;
let img_idx=0;
let size = 7;
let startx = 0;
let starty = 0;
let ascii=false;

let images=[];

function preload() {
  //img = loadImage('https://i.imgur.com/LcG0R9w.jpg');
  let imag1 = loadImage('https://i.imgur.com/ZQN0ZWb.jpeg');
  let imag2 = loadImage('https://i.imgur.com/s1t9lke.jpeg');
  let imag3 = loadImage('https://i.imgur.com/nx1tU5d.jpeg');
  let imag4 = loadImage('https://i.imgur.com/X9KpdLl.jpeg');
  let imag5 = loadImage('https://i.imgur.com/vgQiIxe.jpeg');
  let imag6 = loadImage('https://i.imgur.com/lRLpaVX.jpeg');
  let imag7 = loadImage('https://i.imgur.com/p82FpvG.jpeg');
  images=[imag1,imag2,imag3,imag4,imag5,imag6,imag7]
}

function setup() {
  createCanvas(400, 400);
  slider=createSlider(3, 70, 3, 2);  
  slider.position(2, 10);
  
  checkbox = createCheckbox('ascii', false);
  checkbox.changed(myCheckedEvent);
  checkbox.position(2, 30);
  checkbox.style('color', 'white');
}

function myCheckedEvent() {
  if (checkbox.checked()) {
    ascii=true;
  } else {
    ascii=false;
  }
}

function keyPressed() {
  switch (key) {
    case "c":
      img_idx=(img_idx+1)%7;
      break;
  }
}

function draw() {
  background(0);
  imageMode(CENTER);

  let img=images[img_idx];
  img.loadPixels();
  img.resize(400, 0);
  img.updatePixels();
  
  let w=width/img.width;
  let h=height/img.height;

  let size = slider.value();

  for (var starty = 0; starty < img.height; starty++) {
    for (var startx = 0; startx < img.width; startx++) {
      var index = (startx + starty * img.width) * 4;
      
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
      var luminance = r*0.3 + g*0.59 + b*0.11;
      
      if (ascii==false){
        fill(r,g,b);
        noStroke();
        rect(startx, starty, size, size)        
      }      
      else{
        const density_len=density.length;
        const charIndex= floor(map(luminance,0,255,density_len,0));
        fill(255);
        textSize(size);
        textAlign(CENTER,CENTER);
        text(density.charAt(charIndex),startx*w+w*0.5,starty*h+h*0.5);
      }
      
      startx = startx + size -1
    }
    starty = starty + size -1
  }
  console.log(size);
}