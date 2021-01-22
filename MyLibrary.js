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