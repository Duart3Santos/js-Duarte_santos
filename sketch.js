function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  stroke("purple");
  fill("white");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
 
