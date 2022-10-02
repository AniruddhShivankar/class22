const Render = Matter.Render;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backGround, tower, towerImg;
var canon,angle=20;



function preload() {
  backGround=loadImage("assets/background.gif");
  towerImg=loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  canon=new Canon(180,110,100,130,angle);


 options={
 isStatic:true
 
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground); 	
 

 tower= Bodies.rectangle(120, 370
  ,200,300, options);
 World.add(world,tower);
 var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Matter.Render.run(render);
}


function draw() {
  image(backGround,0,0, 1200, 600);
  canon.display();
  push();
  imageMode(CENTER);
  image(towerImg, tower.position.x,tower.position.y, 200,300)
  pop();
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
  
 text(mouseX + "," + mouseY, mouseX, mouseY);
}
