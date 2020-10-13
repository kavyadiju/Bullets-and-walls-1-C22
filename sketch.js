
var wall, thickness;
var bullet,speed, weight;
var redw,greenw,greyw;
var b1,b2,b3,b4;
var fireSound;

function preload()
{
	redw=loadAnimation("redwall.jpg");
	greenw=loadAnimation("greenwall.jpg");
    greyw=loadAnimation("greywall.jpg");
	b1=loadAnimation("9.png","10.png","11.png","12.png");
	fireSound=loadSound("explosion.mp3");

}

function setup() {
  createCanvas(1600, 350);

  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));

  
	bullet=createSprite(50, 200, 50,5);  
	bullet.addAnimation("fire",b1);
	bullet.scale=3;
    bullet.velocityX = speed;
    fireSound.play();

	wall=createSprite(width-thickness, 170, thickness, height/2);  
	wall.addAnimation("grey",greyw);
	wall.addAnimation("red",redw);
	wall.addAnimation("green",greenw);
	wall.scale=0.5;
}


function draw() {
  background(0);  
  textFont("timesnewroman",30);
  strokeWeight(3);
  stroke("purple");
  fill("white");
  text("SPEED :"+speed,1000,50);
  text("THICKNESS :"+thickness,1000,100);
  text("WEIGHT :"+weight,1000,150);

  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
	
		wall.changeAnimation("red",redw);
		text("DANGER!!! :",400,100);
	
	}

	

	if(damage<10)
	{
		wall.changeAnimation("green",greenw);
		wall.scale=1.5;
		text("SAFE!!! :",400,100);
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}


