var car,wall;
// var speed,weight;

function setup() {
  createCanvas(800,400);
  
  // speed=random(50,90);
  // weight=random(400,1500);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background(0,10,0); 

  car.x=World.mouseX;
  car.y=World.MouseY;
   
  car.display();
  wall.display();   

  
bounceOff(car,wall);
  
  drawSprites();
}  