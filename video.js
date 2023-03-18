let video;
let 사이즈 = 20;
let 회전각도 = 0;
let colors = ["#f2efea", "#fc7753", "#66d7d1", "#403d58", "#dbd56e"];
let randomIndex = 0;  // colors 리스트 인덱스: 0~4사이의 정수여야 함.

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  // video = createCapture(VIDEO);
  // video.size(width, height)
  rectMode(CENTER)
  angleMode(DEGREES)
	
  video = createVideo(['Capsule.MOV']);
  video.size(width, height)
	video.hide(); 
  video.loop();
}

function draw() {
	background(0);  // 배경색을 지정합니다.
    stroke(255);
  
	// 비디오에서 영상 데이터를 가져오고 업데이트합니다.
	video.loadPixels();
	video.updatePixels();
	
	// 비디오의 너비와 높이 픽셀을 for 반복문으로 훑으면서 픽셀 정보를 읽는다.
	for (let y = 0; y < video.height; y = y + 20) {
    for (let x = 0; x < video.width; x = x + 20) {
			let pixel_index = (y * video.width + x) * 4;
      let darkness = (255 - video.pixels[pixel_index]) / 255;
					
	  // 도형의 지름 값에 활용할 변수를 만듭니다.
      let 지름 = 10 * darkness;
			
			push();
			translate(x, y);
			/* 도형 함수 원하는 대로 바꿔보기 */
			// darkness가 0.8보다 크다.
			if(darkness > 0.8) {
				rect(0, 0, 지름, 지름);
			}
			// darkness가 0.8보다 작거나 같고, and 0.5보다는 크거나 같다
			if(darkness <= 0.8 && darkness >= 0.5) {
				ellipse(0, 0, 지름, 지름);
			}
			// darkness가 0.5보다 작다.
			if(darkness < 0.5) {
				line(0, 0, 지름, 지름);
			}
			pop();
		}
	}

}