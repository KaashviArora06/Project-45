var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg1,zombieImg2,zombieImg3,zombieImg4,zombieGroup

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImg1 = loadImage("assets/zombie1.png");
  zombieImg2 = loadImage("assets/zombie2.png")
  zombieImg3 = loadImage("assets/zombie3.png");
  zombieImg4 = loadImage("assets/zombie4.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
  
   zombieGroup = new Group();

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){ // touches is an array , detecting the touch on the sreen 
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
enemy();
drawSprites();

}

function enemy(){

  if (frameCount%100===0){
    zombie = createSprite(windowWidth-30,random(100,500),40,40)
    var r = Math.round(random(1,4));
    switch(r){

      case 1: zombie.addImage(zombieImg1);
      break;
      case 2: zombie.addImage(zombieImg2);
      break;
      case 3: zombie.addImage(zombieImg3);
      break;
      case 4: zombie.addImage(zombieImg4);
      break;
    }
    
    zombie.scale= 0.15;
    zombie.velocityX=-3;
    zombieGroup.add(zombie);

  }
}