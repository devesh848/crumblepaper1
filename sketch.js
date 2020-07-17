
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700); 
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,1200,20);
	paper = new Paper(200,200,20); 
	dustbin = new Dustbin(900,670,100,20);  
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display(); 
  paper.display();   
  dustbin.display();  
 
  
  drawSprites();
 
}

function keyPressed(){ 
    if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70}); 
		

	} 
}

