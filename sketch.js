
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball; 

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(200,200,20, ball_options);
  World.add(world,ball);

  

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	groundObj= new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120);

	var ball_options = {
		restitution: 0.95
	}



	
	

	Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  background(0);

	ellipse(ball.position.x, ball.position.y, 20);

  groundObj.display();
  leftSide.display();
  rightSide.display();
	Engine.update(engine);
  drawSprites();
 
}




function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})	
	}
}







