var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,40) ;
  box.velocityX = 3;
  box.velocityY = 4;  
  

  
}

function draw() 
{
  background(30);
  
   

  drawSprites();
  

}




