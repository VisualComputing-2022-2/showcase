function preload() {
	file = loadImage("http://1.bp.blogspot.com/_u-LXMEsMK5Y/TBBDO_n7dLI/AAAAAAAAABw/6N_puS2taAQ/s1600/ames+room.jpg");	
}
function setup() {
	createCanvas(556, 414);
	background(255);
	pixelDensity(1);
}

function draw() {
    image(file, 0, 0);
}