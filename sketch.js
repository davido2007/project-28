
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stoneobj;
var boy;
var ground;
var mango1, mango2, mango3, mango4, mango5;
function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy=createSprite(270,440,60,30);

	ground = new ground(200,390,800,20);

	//Create the Bodies Here.
    stoneobj=new stone(235,420,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display();
  ground.display();
  drawSprites();
 
}



