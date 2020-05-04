function tri(x,y,len,lineT){
  triV1x=x-len+len;
  triV1y=y-len;
  triV2x=x+len;
  triV2y=y+len;
  triV3x=x-len;
  triV3y=y+len;
  stroke(0);
  strokeWeight(lineT);
    beginShape(TRIANGLES);
  vertex(triV1x,triV1y);
  vertex(triV2x,triV2y);
  vertex(triV3x,triV3y);
    endShape();
}

function setup() {
  createCanvas(800,400);
  createSprite(100, 300, 50, 300);
  createSprite(155, 300, 50, 250);
  createSprite(315, 300, 250, 200);
  createSprite(475, 300, 50, 250);
  createSprite(535, 300, 50, 300);

}

function draw() {
  background(255,255,255);  
  tri(100,300,50,1);

  drawSprites();
}