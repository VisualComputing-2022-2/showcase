let maskShader;
let focustmaskShader;
let normalmaskShader;
let img;
let img1;
let img2;
let video_src;
let region;
let mask;
let radio;


function preload() {
    
	
	video_src = createVideo(["https://i.imgur.com/1JaUX0b.mp4"]);
    video_src.hide();
    maskShader = readShader("/showcase/sketches/shaders/image_processing/magmask.frag", { varyings: Tree.texcoords2,});
    img = loadImage("https://i.imgur.com/FxSAIDV.jpeg");
	
}

function setup() {
	// shaders require WEBGL mode to work
	createCanvas(650, 500, WEBGL);
	noStroke();
	textureMode(NORMAL);
	video_on = createCheckbox('video', false);
	video_on.style('color', 'white');
	video_on.changed(() => {
		if (video_on.checked()) {
		maskShader.setUniform('texture', video_src);
		video_src.loop();
		} else {
		maskShader.setUniform('texture', img);
		video_src.pause();
		}
	});
	
	video_on.position(10, 10);
    radio = createSlider(100, 400, 50.0);
    radio.position(100, 10);
    //matrices de convolucion
	shader(maskShader);
    maskShader.setUniform('texture', img);
	maskShader.setUniform('mask', [0.0, 0.0, 0.0, 0.0, 1., 0.0, 0.0, 0.0, 0.0]); // Identity
	emitResolution(maskShader, 'u_resolution');
}

function draw() {
	background(0);
    maskShader.setUniform('radio',radio.value());
	emitMousePosition(maskShader, 'u_mouse');
	
	quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2);
	

}
