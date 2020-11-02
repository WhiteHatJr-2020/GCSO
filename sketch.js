var car,wall;
var s,w;
function setup() {
  createCanvas(1600,400);
  s=random(50,90);
  w=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX=s;
  car.shapeColor=color(255);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  if(wall.x-car.x < car.width/2 + wall.width/2)
  {
    car.velocityX=0;
    var d=0.5*w*s*s/22500;
    if(d>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(d<180 && d>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(d<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}