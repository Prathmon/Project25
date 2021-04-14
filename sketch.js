
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (400, 560, 800, 10);
	paper = new Paper (200, 550, 70);
	dustbinl = new Dustbin(600, 470, 110, 150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  paper.display();
  dustbinl.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 670, y : -750})
	}
}

