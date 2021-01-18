var fixedrect, movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200,200,50,70);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(300,100,70,40);
  movingrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect.debug = true;
  
}

function draw() {
  background(255,255,255);  
  console.log(movingrect.x- fixedrect.x)
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 
    && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 
    && movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2){
    movingrect.shapeColor ="red";
    fixedrect.shapeColor = "red";
  }
  else {
    movingrect.shapeColor ="green";
    fixedrect.shapeColor ="green";
  }
  drawSprites();
}