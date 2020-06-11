var Rain;
var array;

var randomN = random(1,255);
function setup() {
  createCanvas(800,400);
  array = ['a','b','c'];
}

function draw() {
  background(255, 215, 0); 
  
  Rain();
  
  drawSprites();
}
function Rain(){
  if(frameCount % 15 === 0){
    for(var i = 50;i<800;i = i + 20){
      var Rain = createSprite(random(1,800) - 10,0,1.5,random(1,400))
      
      Rain.velocityY = 12;
      Rain.lifetime = 34;
      Rain.shapeColor = rgb(128,0,128);
      
      
  }
 } 
}