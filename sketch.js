var path, boy_running, boy
var pathImage, boyImage
var invisibleGround1, invisibleGround2

function preload(){
  //pre-load images
pathImage = loadImage ("path.png")
boy_running = loadAnimation ("Runner-1.png", "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200)
  path.addImage (pathImage)
  path.velocityY = 4
  path.scale = 1.5

  boy = createSprite (50, 200, 200, 200)
  boy.addAnimation ("running", boy_running)
  boy.scale = 0.1

  invisibleGround1 = createSprite (380, 400, 400, 10)
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite (10, 400, 400, 10)
  invisibleGround2.visible = false;
}

function draw() {
  background(0);

if (path.y > 400){
  path.y = height/2
}

boy.x = World.mouseX;
boy.collide (invisibleGround1)
boy.collide (invisibleGround2)

drawSprites()
}
