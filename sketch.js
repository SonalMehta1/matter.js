const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  
  ground=Bodies.rectangle(200,380,400,20,{isStatic:true});
  World.add(world,ground)

  console.log(ground);

}

function draw() {
  background(200);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
}