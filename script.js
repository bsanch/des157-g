console.log('reading js');

// function setup() {
//   //Size() is createCanvas() in p5!
//   //create a variable to reference createCanvas
//
//   var myCanvas = createCanvas(800, 250);
//
//   //connect myCanvas to mySketch
//
//   myCanvas.parent('mySketch');
// }
//
// function draw() {
//   ellipse(mouseX, mouseY, 50, 50);
// }

function setup() {
 var myCanvas = createCanvas(800, 250);
 myCanvas.parent('mySketch');
}

function draw()
{
 line(0, pmouseX, 400, pmouseY);
 line(400, pmouseX, 0, pmouseY);
 line(400, pmouseX, 800, pmouseY);
 line(800, pmouseX, 400, pmouseY);

 textSize(24);
 text("Click", 10, 30);
 fill(255);
 text("anywhere", 10, 60);
 fill(255);
 text("to", 10, 90);
 fill(255);
 text("reset", 10, 120);

 if (mouseIsPressed){
   background(204);
 }
}
