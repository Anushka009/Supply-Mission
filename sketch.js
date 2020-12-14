// creates the variables
var helicopterIMG, helicopterSprite, package,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	// loads the images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	// creates the canvas
	createCanvas(800, 700);

	// makes the rectangle in center
	rectMode(CENTER);
	
    // creates the package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2
	
	// creates the helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	// creates the ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    // add engine to the world
	engine = Engine.create();
	world = engine.world;
	
	// makes the bodies bounce
    package=Bodies.rectangle(200,100,50,50);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	
	// add package to world
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	// runs engine
	Engine.run(engine);
}

function draw() {
  
  rectMode(CENTER);
  background(0);

  // assigns the x and y positions
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();

  // draws the sprites
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
 }
}
