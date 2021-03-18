var garden;
var cat1,cat2,cat3,cat4;
var mouse1,mouse2,mouse3,mouse4;
function preload() {
    //load the images here
    garden = loadImage("garden.png");
    cat1=loadImage("cat1.png");
    mouse1=loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(100,100,500,400);
    jerry=createSprite(200,200,500,400);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      
  }

}
