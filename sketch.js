const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events
const Bodies = Matter.Bodies;



var particles=[];
var plinkos = [];
var divisions = [];
var score = 0

//not hardcoding the value300
var divisionHeight=300;
var particle;


var count =0;
var gameState="start",points=0;


function setup() {
  createCanvas(1800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


  //create divisions
//800-150 == height-divisionheight/2, width = 10, 300 

//x= 0 to width 800


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }
   //plinkos green stationary balls for four rows on the top
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 100; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 100; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");

  Engine.update(engine);
  ground.display();
  textSize(35)
  text("score"+score,20,40)
  text("500",15,550)
  text("500",90,550)
  text("500",170,550)
  text("500",250,550)
  text("100",410,550)
  text("100",490,550)
  text("200",570,550)
  text("200",650,550)
  text("100",330,550)
  text("200",730,550)
  Engine.update(engine);
  ground.display();

  if(gameState=="end"){
    textSize(50);
    text("Game Over",150,250)
  }
  for (var i = 0; i < plinkos.length; i++) 
  { 
    plinkos[i].display();
   } 

  if(particle!=null){
    
    particle.display();

    if(particle.body.position.y>760){


    
    if(particle.body.position.y<300){
      score=score+500;
      particle=null;
      if ( count>= 5) {
        gameState ="end"
      }
    }
      else if(particle.body.position.y<600 && particle.body.position.y>301){
        score=score+100;
        particle=null;
        if ( count>= 5) {
          gameState ="end"
      }
    }
      else if(particle.body.position.y<900 && particle.body.position.y>601){
        score=score+200;
        particle=null;
        if ( count>= 5) {
          gameState ="end"
        }
     }
    }
  }
  for (var j = 0; j < divisions.length; j++) 
  { divisions[j].display(); } 
//  drawSprites();
}

function mousePressed() {
    if(gameState!=="end") { 
      count++;
       particle = new Particle(mouseX, 10, 10, 10); 
   
    }
  }

/*
function mousePressed() { 
  
  } 
}
*/