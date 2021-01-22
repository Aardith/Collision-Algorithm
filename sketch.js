var fixedrect, movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200,100,50,70);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(450,100,70,40);
  movingrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect.debug = true;
  o1 = createSprite(100,100,20,70);
  o1.shapeColor ="green";
  o1.debug = true;
  o2 = createSprite(300,100,60,40);
  o2.shapeColor ="green";
  o2.debug= true;
  //fixedrect.velocityX = 3;
  //movingrect.velocityX = -1;
  
}

function draw() {
  background(255,255,255);  
  console.log(movingrect.x- fixedrect.x)
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(isTouching(movingrect, o2)){
    movingrect.shapeColor ="red";
    o2.shapeColor = "red";
  }
  else{
    movingrect.shapeColor ="green";
    o2.shapeColor ="green";
  }
  
  
  drawSprites();
}
function isTouching(a, b){
  if(a.x - b.x < a.width/2 + b.width/2
    && b.x - a.x < a.width/2 + b.width/2 
    && b.y - a.y < a.height/2 +b.height/2 
    &&a.y - b.y < a.height/2 + b.height/2){
    return true;
    //fixedrect.velocityX = -3;
    //movingrect.velocityX = 1;
  }
  else {
    return false;
  }
}