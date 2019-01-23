console.log('reading js');

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
