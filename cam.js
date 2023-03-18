// 참고 예제: https://p5js.org/ko/examples/dom-video-pixels.html
// https://p5js.org/ko/examples/dom-video-capture.html

let video;  						// 비디오 변수
function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	angleMode(DEGREES);
	
	// 웹캠 비디오를 세팅하고, 사이즈를 지정합니다.
	video = createCapture(VIDEO);
  video.size(width, height);
	// 원본 웹캠 영상을 가립니다.
	video.hide();
}

function draw() {
	background(255); // 잔상 남기려면 255, 20처럼 알파값 주기
	
	// 웹캠에서 영상 데이터를 가져오고 업데이트합니다.
	video.loadPixels();
	// video.updatePixels(); // 써도 되고 안 써도 될듯
	
	// 비디오의 너비와 높이 픽셀을 for 반복문으로 훑으면서 픽셀 정보를 읽는다.
	for (let y = 0; y < video.height; y = y + 20) {
    for (let x = 0; x < video.width; x = x + 20) {
			let pixel_index = (y * video.width + x) * 4;
      let darkness = (255 - video.pixels[pixel_index]) / 255;
			
			push();
			translate(x, y);
			
			if(darkness > 0.8)
				push();
				scale(0.1);
				myArcC();
				pop();
			}
		
			// darkness가 0.8보다 작거나 같고, and 0.5보다는 크거나 같다
			if(darkness <= 0.8 && darkness >= 0.5) {
				push();
				scale(0.1);
				renderRectT();
				pop();
			}
		
			// darkness가 0.5보다 작다.
			if(darkness < 0.5) {
				push();
				scale(0.1);
				myArcD();
				pop();
			}
			pop();
		}
	}
	// noLoop();  // 반복하지 않게 스탑. 
}
