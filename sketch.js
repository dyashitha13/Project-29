var ground;

var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21;
var b22,b23,b24;
var b25;

var b26,b27,b28,b29,b30,b31,b32,b33,b34;
var b35,b36,b37,b38,b39,b40,b41;
var b42,b43,b44,b45,b46;
var b47,b48,b49;
var b50;

var polygon,polygonImage;

var slingshot;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
polygonImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
	world = engine.world;
	
  ground = new Ground(600,338,200,15);
  ground2 = new Ground(300,167,200,15);

  b1 = new Box(520,320,20,20);
  b2 = new Box(540,320,20,20);
  b3 = new Box(560,320,20,20);
  b4 = new Box(580,320,20,20);
  b5 = new Box(600,320,20,20);
  b6 = new Box(620,320,20,20);
  b7 = new Box(640,320,20,20);
  b8 = new Box(660,320,20,20);
  b9 = new Box(680,320,20,20);
  
  b10 = new Box(540,300,20,20);
  b11 = new Box(560,300,20,20);
  b12 = new Box(580,300,20,20);
  b13 = new Box(600,300,20,20);
  b14 = new Box(620,300,20,20);
  b15 = new Box(640,300,20,20);
  b16 = new Box(660,300,20,20);

  
  b17 = new Box(560,280,20,20);
  b18 = new Box(580,280,20,20);
  b19 = new Box(600,280,20,20);
  b20 = new Box(620,280,20,20);
  b21 = new Box(640,280,20,20);

  b22 = new Box(580,260,20,20);
  b23 = new Box(600,260,20,20);
  b24 = new Box(620,260,20,20);

  b25 = new Box(600,240,20,20);

  b26 = new Box(220,150,20,20);
  b27 = new Box(240,150,20,20);
  b28 = new Box(260,150,20,20);
  b29 = new Box(280,150,20,20);
  b30 = new Box(300,150,20,20);
  b31 = new Box(320,150,20,20);
  b32 = new Box(340,150,20,20);
  b33 = new Box(360,150,20,20);
  b34 = new Box(380,150,20,20);
  
  b35 = new Box(240,130,20,20);
  b36 = new Box(260,130,20,20);
  b37 = new Box(280,130,20,20);
  b38 = new Box(300,130,20,20);
  b39 = new Box(320,130,20,20);
  b40 = new Box(340,130,20,20);
  b41 = new Box(360,130,20,20);

  
  b42 = new Box(260,110,20,20);
  b43 = new Box(280,110,20,20);
  b44 = new Box(300,110,20,20);
  b45 = new Box(320,110,20,20);
  b46 = new Box(340,110,20,20);

  b47 = new Box(280,90,20,20);
  b48 = new Box(300,90,20,20);
  b49 = new Box(320,90,20,20);

  b50 = new Box(300,70,20,20);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:300});

  Engine.run(engine);
}

function draw() {
  background(0);  

  ground.display();
  ground2.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();

  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  b22.display();
  b23.display();
  b24.display();

  b25.display();

  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();

  b35.display();
  b36.display();
  b37.display();
  b38.display();
  b39.display();
  b40.display();
  b41.display();

  b42.display();
  b43.display();
  b44.display();
  b45.display();
  b46.display();

  b47.display();
  b48.display();
  b49.display();

  b50.display();



  slingshot.display();

  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,45,45);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased (){
  slingshot.fly();
}