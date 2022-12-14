let boxKernel = [
	[1 / 9, 1 / 9, 1 / 9],
	[1 / 9, 1 / 9, 1 / 9],
	[1 / 9, 1 / 9, 1 / 9],
];

let sharpenKernel = [
	[0, -1, 0],
	[-1, 5, -1],
	[0, -1, 0],
];

let edgeKernel = [
	[-1, -1, -1],
	[-1, 8, -1],
	[-1, -1, -1],
];

let horizontalEdge = [
	[1, 0, -1],
	[1, 0, -1],
	[1, 0, -1],
];

let verticalEdge = [
	[1, 1, 1],
	[0, 0, 0],
	[-1, -1, -1],
];

let gaussianKernel = [
	[1 / 16, 1 / 8, 1 / 16],
	[1 / 8, 1 / 4, 1 / 8],
	[1 / 16, 1 / 8, 1 / 16],
];

let sobelKernel = [
	[1, 2, 1],
	[0, 0, 0],
	[-1, -2, -1],
];

let file;
let img;
let histogram;

function preload() {
	file = loadImage("https://i.imgur.com/llRwbqf.jpeg");
	img = loadImage("https://i.imgur.com/llRwbqf.jpeg");
}

function setup() {
	createCanvas(600, 900);
	background(255);
	pixelDensity(1);
}

function draw() {
    
    img.resize(0,600);
    file.resize(0,600);
	image(img, 0, 0, img.width, img.height);
}

function calculateConvolution(x, y, kernel, kernelSize) {
	let r = 0.0;
	let g = 0.0;
	let b = 0.0;

	for (let i = 0; i < kernelSize; i++) {
		for (let j = 0; j < kernelSize; j++) {
			let location = (x + i + img.width * (y + j)) * 4;

			location = constrain(location, 0, img.pixels.length - 1);

			r += img.pixels[location] * kernel[i][j];
			g += img.pixels[location + 1] * kernel[i][j];
			b += img.pixels[location + 2] * kernel[i][j];
		}
	}

	return {
		r: constrain(r, 0, 255),
		g: constrain(g, 0, 255),
		b: constrain(b, 0, 255),
	};
}

function drawHistogram(){
    clear();
    background(255);
    var maxRange = 256
    colorMode(HSL, maxRange);

    histogram = new Array(maxRange);
    for (i = 0; i <= maxRange; i++) {
		histogram[i] = 0
    }

    img.loadPixels();

    for (var x = 0; x < img.width; x+=5) {
		for (var y = 0; y < img.height; y+=5) {
			var loc = (x + y * img.width) * 4;
			var h = img.pixels[loc];
			var s = img.pixels[loc + 1];
			var l = img.pixels[loc + 2];
			var a = img.pixels[loc + 3];
			b = int(l);
			histogram[b]++
		}
    }
    
    push()
    translate(10,0)
    for (x = 0; x <= maxRange; x++) {
		index = histogram[x];

		y1=int(map(index, 0, max(histogram), height, height-200));
			y2 = height
		xPos = map(x,0,maxRange,0, width-20)
		line(xPos, y1, xPos, y2);
    }
    pop()

	img.updatePixels();
}

function convolveImage(kernel, kernelSize) {
	img.copy(file, 0, 0, file.width, file.height, 0, 0, file.width, file.height);

	img.loadPixels();


	for (let x = 1; x < img.width - 1; x++) {
		for (let y = 1; y < img.height - 1; y++) {
			let newPixel = calculateConvolution(x, y, kernel, kernelSize);
			let loc = (x + y * img.width) * 4;

			img.pixels[loc] = newPixel.r;
			img.pixels[loc + 1] = newPixel.g;
			img.pixels[loc + 2] = newPixel.b;
			img.pixels[loc + 3] = alpha(
				color(newPixel.r, newPixel.g, newPixel.b)
			);
		}
	}

    stroke(300,100,80)    
    img.updatePixels();
    drawHistogram();

}

function changeBrigness(changeFlag) {

    img.loadPixels();
    
    for (let x = 0; x < img.width; x++) {
        for(let y = 0; y < img.height; y++) {
            let loc = (x + y * img.width) * 4;
            if(changeFlag){
                img.pixels[loc] = constrain(img.pixels[loc]/1.1 , 0, 255);
			    img.pixels[loc + 1] = constrain(img.pixels[loc+1]/1.1 , 0, 255);
			    img.pixels[loc + 2] = constrain(img.pixels[loc+2]/1.1 , 0, 255);
            }else{
                img.pixels[loc] = constrain(img.pixels[loc]*1.1 , 0, 255);
                img.pixels[loc + 1] = constrain(img.pixels[loc+1]*1.1 , 0, 255);
                img.pixels[loc + 2] = constrain(img.pixels[loc+2]*1.1 , 0, 255);
            }

        }
    }

    img.updatePixels();
    drawHistogram();

}



function resetImage() {
	img.copy(file, 0, 0, file.width, file.height, 0, 0, file.width, file.height);
	drawHistogram();
}

function keyPressed() {

    switch (key) {
        case "v":
            convolveImage(verticalEdge, 3);
            break;
        case "h":
            convolveImage(horizontalEdge, 3);
            break;
        case "e":
            convolveImage(edgeKernel, 3);
            break;
        case "b":
            convolveImage(boxKernel, 3);
            break;
        case "s":
            convolveImage(sharpenKernel, 3);
            break;
        case "g":
            convolveImage(gaussianKernel, 3);
            break;
        case "z":
            convolveImage(sobelKernel, 3);
            break;
        case "f":
            resetImage();
            break;
        case "c":
            changeBrigness(true);
            break;
        case "d":
            changeBrigness(false);
            break;
    }

}
