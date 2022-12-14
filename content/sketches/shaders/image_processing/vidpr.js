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
    
    video_src = createVideo(["https://i.imgur.com/t0teqCk.mp4"]);
    video_src.hide();
    maskShader = readShader("/showcase/sketches/shaders/image_processing/mask.frag", { varyings: Tree.texcoords2,});
}

function setup() {
	// shaders require WEBGL mode to work
	createCanvas(650, 500, WEBGL);
	noStroke();
	textureMode(NORMAL);
    video_src.loop();
    radio = createSlider(100, 400, 50.0);
    radio.position(200, 10);
    //foco
	foco = createCheckbox('foco', false);
	foco.style('color', 'blue');
	foco.changed(() => {
		if (foco.checked()) {
			maskShader.setUniform('foco',true)
		} else {
			maskShader.setUniform('foco',false)
		}
	});
	foco.position(10, 30);
    
    //matrices de convolucion
	mask = createSelect();
	mask.option('None', 0);
	mask.option('Ridge', 1);
	mask.option('Box Blur', 2);
	mask.option('Gaussian Blur', 3);
	mask.option('Enfoque', 4); 
	mask.option('Repujado', 5);
	mask.option('Sharpen', 6);
	mask.option('Realzar bordes', 7);
	mask.position(10, 10);

	shader(maskShader);
    maskShader.setUniform('texture', video_src);
    emitTexOffset(maskShader, video_src, 'texOffset');
	maskShader.setUniform('mask', [0.0, 0.0, 0.0, 0.0, 1., 0.0, 0.0, 0.0, 0.0]); // Identity
	emitResolution(maskShader, 'u_resolution');
}

function draw() {
	background(0);
	mask.changed(() => {
		switch (mask.value()) {
			case '0':
				maskShader.setUniform('mask', [0.0, 0.0, 0.0, 0.0, 1., 0.0, 0.0, 0.0, 0.0]); // Identity
				break;
			case '1':
				maskShader.setUniform('mask', [-1.0, -1.0, -1.0, -1.0, 8.0, -1.0, -1.0, -1.0, -1.0]); // Ridge
				break;
			case '2':
				maskShader.setUniform('mask', [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]); // Box blur
				break;
			case '3':
				maskShader.setUniform('mask', [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625]); // Gaussian blur
				break;
			case '4':
				maskShader.setUniform('mask', [1.0, 0.0, 1.0, 0.0, -4.0, 0.0, 1.0, 0.0, 1.0]); // Enfoque 
				break;
			case '5':
				maskShader.setUniform('mask', [-2.0, -1.0, 0.0, -1.0, 1.0, 1.0, 0.0, 1.0, 2.0]); // Repujado
				break;
			case '6':
				maskShader.setUniform('mask', [-1.0, 0.0, -1.0, 0.0, 5.0, 0.0, -1.0, 0.0, -1.0]); // Sharpen
				break;
			case '7':
				maskShader.setUniform('mask', [0.0, 0.0, 0.0, -1.0, 1.0, 0.0, 0.0, 0.0, -0.0]); // Realzar bordes
				break;
			default:
				console.log(mask.value());
				break;
		}
	});
    maskShader.setUniform('radio',radio.value());
	emitMousePosition(maskShader, 'u_mouse');
	quad(-width / 2, -height / 2, width / 2, -height / 2, width / 2, height / 2, -width / 2, height / 2);
}
