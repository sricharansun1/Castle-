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
  createSprite(315, 300, 200, 200);
  createSprite(475, 300, 50, 250);
  createSprite(535, 300, 50, 300);

}

function draw() {
  background("blue");
  fill("red"); 
  tri(100,120,30,1);
  tri(155,145,30,1);
  tri(315,160,100,0.20);
  tri(475,145,30,1);
  tri(535,120,30,1);



 
  drawSprites();
}