const World=Matter.World;
const Engine=Matter.Engine;
const Body=Matter.Body;
const Bodies=Matter.Bodies;


var blower,blowermouth,ball;
var engine, world;
var btn;
function setup() {
  createCanvas(500,500);

  engine=Engine.create();
  world=engine.world;

  ball = new Ball(280,height/2-80,30,30);
  blower = new Blower(160,height/2,150,16);
  blowermouth = new BlowerMouth(280,height/2-37,90,90);

  btn = createButton("Blow");
  btn.position(width/2-20,height-150);
  btn.size(90,40);
  btn.mousePressed(blow);

}

function draw() {
  background(61,61,61);  
  Engine.update(engine);

  ball.display();
  blower.display();
  blowermouth.display();

}
function blow() {
  Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}