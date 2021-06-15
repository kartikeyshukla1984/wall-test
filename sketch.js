var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1400,600);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet = createSprite(100, 200, 50, 50);
  bullet.shapeColor="pink;"
  bullet.velocityX=speed;

  wall=createSprite(1300,300,thickness,height/2); 






}

function draw() {
  background("black"); 
  
  if(wall.x-bullet.x<(wall.width+bullet.width)/2);
{

damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>11)
{
  wall.shapeColor=color("green");
}
if(damage<10)
{
  wall.shapeColor=color("red");
}
}  






  drawSprites();
}

