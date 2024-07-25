var barco, fondo, ship, ground;

function preload(){
ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
ground = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  fondo = createSprite(400,200,200,200);
  fondo.addImage(ground);
  fondo.scale = 0.24;
  fondo.velocityX = -8;

  barco = createSprite(200,200);
  barco.addAnimation("move", ship);
  barco.scale = 0.2;
}

function draw() {
  background("blue");

  if (fondo.x < 0) {
    fondo.x = 400;
  }

  drawSprites();
}