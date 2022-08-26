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

function preload() {
	file = loadImage("https://i.imgur.com/llRwbqf.jpeg");
	img = loadImage("https://i.imgur.com/llRwbqf.jpeg");
}

function setup() {
	createCanvas(734, 744);
	pixelDensity(1);
}

function draw() {
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

function convolveImage(kernel, kernelSize) {
	img.copy(
		file,
		0,
		0,
		file.width,
		file.height,
		0,
		0,
		file.width,
		file.height
	);

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

	img.updatePixels();
}

function resetImage() {
	img.copy(
		file,
		0,
		0,
		file.width,
		file.height,
		0,
		0,
		file.width,
		file.height
	);
}

function keyPressed() {
	if (key == "v") {
		convolveImage(verticalEdge, 3);
	} else if (key == "h") {
		convolveImage(horizontalEdge, 3);
	} else if (key == "e") {
		convolveImage(edgeKernel, 3);
	} else if (key == "b") {
		convolveImage(boxKernel, 3);
	} else if (key == "s") {
		convolveImage(sharpenKernel, 3);
	} else if (key == "g") {
		convolveImage(gaussianKernel, 3);
	} else if (key == "z") {
		convolveImage(sobelKernel, 3);
	} else if (key == "f") {
		resetImage();
	}
}
