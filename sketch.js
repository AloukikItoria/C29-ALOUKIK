//name spacing
const  Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var ground,box;
var ball;
var ground1;
var box1,box2,box3,box4;
var pig1,pig2,pig3,pig4;
var bird1;
var log1,log2,log3,log4;
var bgImage;
var chain1;

function preload(){

    bgImage= loadImage("sprites/bg.png");
    
}



function setup(){
createCanvas(800,500)
//creating our engine
engine = Engine.create();
//creating our wrld
world = engine.world;


//adding bodies to the world










//BLUEPRINT OF GROUND
ground1= new Ground(400,480,800,40);
platform = new Ground(100, 400, 300,200)
box1 = new Box(600,410,50,50)

box2 = new Box(700,410,50,50)

pig1 = new Pig(650,410)

//log1 = new Log(650,385,10,PI)


box3 = new Box(600,360,50,50)

box4 = new Box(700,360,50,50)

pig2 = new Pig(650,360)


log2 = new Log(650,340,10,PI)


pig3 = new Pig(620,320)

pig4 = new Pig(650,320)

pig5 = new Pig(680,320)


bird1 = new Bird(70,150)

chain1 = new SlingShot(bird1.body, {x:70 , y:150});


}

function draw(){
background(bgImage);
//rectMode(CENTER)
Engine.update(engine)

ground1.display();
box1.display();
box2.display();
//log1.display();
pig1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
pig3.display();
pig4.display();
bird1.display();
pig5.display();
platform.display();
chain1.display();
}

//event triggered functions

function mouseDragged(){
    Matter.Body.setPosition(bird1.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
    chain1.fly();
}