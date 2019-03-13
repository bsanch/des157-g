
// Does not work in Chrome..... Please use Firefox.

'use strict';
console.log('reading js');

var mySound, fft, mic;
var visButton = document.querySelector('#visButton'); //visButton = charlieTH picture
var visualizer = document.querySelector('#visualizer'); //visualizer = overlay
var home = document.querySelector('#home');
var close = document.querySelector('#close');

visButton.addEventListener('click',function(){
  visualizer.style.display='block';
  home.style.display='none';
},false);

close.addEventListener('click',function(){
  visualizer.style.display='none';
  home.style.display='block';
},false);

// function onclick(event) {
//   if (confirm('Format the hard disk?'))
//     alert('You are very brave!');
//   else alert('A wise decision!')
// }

function preload(){
  mySound = loadSound('FifthStory.mp3');
}

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight/2);
  //mySound.play();
  // mic = new p5.AudioIn();
  // mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);

  myCanvas.parent('mySketch');
}

// function draw() {
//   background(200);
//
//   let spectrum = fft.analyze();
//
//   beginShape();
//   for (var i = 0; i < spectrum.length; i++) {
//     vertex(i, map(spectrum[i], 0, 255, height, 0));
//   }
//   endShape();
// }

function mousePressed() {
    mySound.play();
}

function draw (){

  background(200);
  strokeWeight(1);
  stroke(255,255,255);

  // Cursor
  line(mouseX,0,mouseX,windowHeight);
  line(0,mouseY,windowWidth,mouseY);

  if ((mouseX > 555) && (mouseX < 810 )) {
    background(96);
    stroke(60,60,60)
    line(mouseX,0,mouseX,windowHeight);
    line(0,mouseY,windowWidth,mouseY);
  }

  // Click
  if (mouseIsPressed) {
      background(160,160,160);
      stroke(0);
    }

  var volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume,0,1);
  mySound.amp(volume);

  var speed = map(mouseY, 0, height, 0, 2);
  speed = constrain(speed, 0, 2);
  mySound.rate(speed);

// Create waveform
  var waveform = fft.waveform();
  fft.smooth();
  noFill();
  beginShape();
  stroke(128,128,128);
  strokeWeight(3);
    for (var i = 0; i< waveform.length; i++){
      var x = map(i, 0, waveform.length, 0, width);
      var y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
    if ((mouseX > 555) && (mouseX < 810 )) {
      stroke(192,192,192);
      strokeWeight(6);
    }
    endShape();
}

// Pause and play music
function mousePressed() {
  if ( mySound.isPlaying() ) {
    mySound.stop();
  } else {
    mySound.play();
  }
}
