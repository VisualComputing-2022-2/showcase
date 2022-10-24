function preload() {
	file = loadImage("https://i.imgur.com/sNrljjS.jpg");	
}
function setup() {
	createCanvas(556, 414);
	background(255);
	pixelDensity(1);
}

function draw() {
    image(file, 0, 0);
}