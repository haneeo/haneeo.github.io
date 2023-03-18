let img;
function preload() {
	img = loadImage('Rain.jpg');
}

function setup() {
	createCanvas(600,800);
	img.resize(width, height);
	// image(img, 0, 0, width, height); // 이미지 빼려면 이 줄 가리기
	img.loadPixels();
	
	rectMode(CENTER);
	angleMode(DEGREES);
}

function draw() {
	// background(255);
	
	for (let y = 0; y < img.height; y = y + 10) {
		for (let x = 0; x < img.width; x = x + 10) {
		let pixel_index = (y * img.width + x)*4;
		let darkness = (255 - img.pixels[pixel_index]) / 255;
	
		let original_col = img.get(x,y);
			
			push();
			translate(x,y);
			
			if(darkness > 0.5) {
				push();
				scale(0.1);
				// fill(original_col);
				stroke(original_col);
				strokeWeight(3);
				myRectA();
				pop();
			}
			
			if(darkness <= 0.5) {
				push();
				scale(0.1);
				fill(original_col);
				stroke(original_col);
				myEllB();
				pop();
			}
			
			pop();
			
		}
	}

}