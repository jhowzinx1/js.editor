let cor;
let cor2;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {

  createCanvas(900, 800);
   background("black");
  cor = color(random(0, 225), random(0, 225), random(0, 225))
  cor2 = color(random(0, 225), random(0, 225), random(0, 225))
  posicaoHorizontal = 400;
  posicaoVertical = 400;
}

function draw() {

  fill(cor)
  stroke(cor2)
  circle(posicaoHorizontal, posicaoVertical, 75);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
  }
    
  if(mouseY < posicaoVertical) {
    posicaoVertical--;
    
  }
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
}
  
  if(mouseIsPressed) {
    cor = color(random(0, 225), random(0, 225), random(0, 225));
    cor2 = color(random(0, 225), random(0, 225), random(0, 225));
    
  }
}