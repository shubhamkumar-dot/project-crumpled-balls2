
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      paper = new Paper();
	  ground = new Ground(0,690,8000,20);
	  ground.visible = true;
	  dustbin = new Dustbin(1400,605,150,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100});
	}
}



