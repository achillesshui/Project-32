const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var bg;
var hour;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Platform(500,600,1000,20);
    plat1 = new Platform(400,450,300,20);
    plat2 = new Platform(750,300,200,20);

    //plat1 first row
    block1 = new Box(310,410,30,60);
    block2 = new Box(340,410,30,60);
    block3 = new Box(370,410,30,60);
    block4 = new Box(400,410,30,60);
    block5 = new Box(430,410,30,60);
    block6 = new Box(460,410,30,60);
    block7 = new Box(490,410,30,60);
    //plat1 second row
    block8 = new Box(340,350,30,60);
    block9 = new Box(370,350,30,60);
    block10 = new Box(400,350,30,60);
    block11 = new Box(430,350,30,60);
    block12 = new Box(460,350,30,60);
    //plat1 thrid row
    block13 = new Box(370,290,30,60);
    block14 = new Box(400,290,30,60);
    block15 = new Box(430,290,30,60);
    //plat1 4th row
    block16 = new Box(400,230,30,60);
    //plat2 first row
    block17 = new Box(690,260,30,60);
    block18 = new Box(720,260,30,60);
    block19 = new Box(750,260,30,60);
    block20 = new Box(780,260,30,60);
    block21 = new Box(810,260,30,60);
    //plat2 second row
    block22 = new Box(720,200,30,60);
    block23 = new Box(750,200,30,60);
    block24 = new Box(780,200,30,60);
    //plat2 third row
    block25 = new Box(750,140,30,60);

    polygon = new Polygon(100,300,6,35);
    sling = new SlingShot(polygon.body,{x:100,y:300})

	Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
    if(6<hour&& hour<18) {
        bg = "white";
    }
    else{
        bg = "black";
    }
    background(bg);
    textSize(20);
    fill("red");
    text("Score: "+score, 870,40);

    ground.display();
    plat1.display();
    plat2.display();

    //plat1 first row
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    //plat1 second row
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    //plat1 third row
    block13.display();
    block14.display();
    block15.display();
    //plat1 4th row
    block16.display();
    //plat2 first row
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    //plat2 second row
    block22.display();
    block23.display();
    block24.display();
    //plat2 third row
    block25.display();

    polygon.display();
    sling.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY})
}

function mouseReleased() {
    sling.fly();
}


function keyPressed() {
    if(keyCode == 32) {
        sling.attach(polygon.body);
    }
}

async function getbg() {
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
   
    var datetime = responseJSON.currentDateTime;
    
    hour = datetime.slice(11,13);
    //2020-12-15T20:33-05:00
    if(6<hour&& hour<18) {
        bg = "black";
    }
    else{
        bg = "white";
    }
    console.log(bg);
    
} 