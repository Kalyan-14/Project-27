
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, bob1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobA = new Bob(20,100,50,20);
	bobB = new Bob(40,100,50,20);
	bobC = new Bob(60,100,50,20);
	bobD = new Bob(80,100,50,20);
	bobE = new Bob(100,100,50,20);


	
	ground = createSprite(400,250,600,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobA.display();
  bobB.display();
  bobC.display();
  bobD.display();
  bobE.display();


  drawSprites(); 
}



