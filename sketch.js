var ghost, ghostImage, towerImage, tg;
var climber, climberImage, door, doorImage
function preload() {
  towerImage = loadImage("tower.png");
  climberImage = loadImage("climber.png");
  doorImage = loadImage("door.png");
  climbersGroup = new Group();
  doorsGroup = new Group();
  
  ghostImage = loadImage("ghost-standing.png");
}
function setup() {
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY = 1
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale = 0.5
}
function draw() {
  background(0);
  
  if(tower.y>400) {
    tower.y = 300;
  }
  
  if(keyDown("left_arrow")) {
    ghost.x = ghost.x-3;
  }
  
  if(keyDown("right_arrow")) {
    ghost.x = ghost.x+3;
  }
  
  if(keyDown("space")) {
    ghost.velocityY = -5;
  }
  
  spawnDoors();
  drawSprites();
}

function spawnDoors() {
  if(frameCount % 240 === 0){
    door = createSprite(200,-50);
    door.addImage(doorImage);
    door.x = Math.round(random(120,400));
    door.velocityY = 1;
    door.lifetime = 800;
    
    climber = createSprite(200,10);
    climber.addImage(climberImage);
    climber.x = door.x;
    climber.velocityY = 1;
    climber.lifetime = 800;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
  }
}