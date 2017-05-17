isLeft = function(field,row,col) {
  if(field[row][col-2] != undefined && field[row][col-1] == "o" && field[row][col-2] == "w") {
    return true;
  }
}

isUp = function(field,row,col) {
  if(field[row-2] != undefined && field[row-1][col] == "o" && field[row-2][col] == "w") {
    return true;
  }
}

isRight = function(field,row,col) {
  if(field[row][col+2] != undefined && field[row][col+1] == "o" && field[row][col+2] == "w") {
    return true;
  }
}

isDown = function(field,row,col) {
  if(field[row+2] != undefined && field[row+1][col] == "o" && field[row+2][col] == "w") {
    return true;
  }
}

cowSetup = function(field) {
  var left = 0, up = 0, right = 0, down = 0;
  var setup = [];
  for(var row = 0; row<field.length ; row++) {
    for(var col = 0; col<field[0].length ; col++) {
      if(field[row][col] == "c") {
        // left facing cow
        if(isLeft(field,row,col)) {
          left +=1;
        }
        // up facing cow
        if(isUp(field,row,col)) {
          up +=1;
        }
        // right facing cow
        if(isRight(field,row,col)) {
          right +=1;
        }
        // down facing cow
        if(isDown(field,row,col)) {
          down +=1;
        }
      }
    }
  }
  setup.push(left, up, right, down);
  return setup;
}

findWrongWayCow = function(field) {
  var loneCow = cowSetup(field).indexOf(1);

  for(var row = 0; row<field.length ; row++) {
    for(var col = 0; col<field[0].length ; col++) {
      if(field[row][col] == "c") {
        switch (loneCow) {
          case 0:
            if(isLeft(field,row,col)) {
              return [col,row];
            }
            break;
          case 1:
            if(isUp(field,row,col)) {
              return [col,row];
            }
            break;
          case 2:
            if(isRight(field,row,col)) {
              return [col,row];
            }
            break;
          case 3:
            if(isDown(field,row,col)) {
              return [col,row];
            }
            break;
          default:
            return "no wrong way cow";
            break;
        }
      }
    }
  }
}
