
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2,ground2,wall3;
var angle = 20;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground2 = Bodies.rectangle(400,200,400,20,ground_options);
  World.add(world,ground2);

  ball2 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball2);

  wall3 = Bodies.rectangle(200,100,100,20,ground_options);
  World.add(world,wall3);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  fill("red");
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground2.position.x,ground2.position.y,400,20);
  
  Matter.Body.rotate(wall3,angle);
  push();
  translate(wall3.position.x,wall3.position.y);
  rotate(angle);
  rect(0,0,100,20);

  pop();
  angle += 0.1;

 
}

