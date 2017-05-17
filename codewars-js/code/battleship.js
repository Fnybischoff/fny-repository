function addBorder(array) {
  for(var i=0; i<array.length;i++) {
    array[i].unshift(0);
    array[i].push(0);
  }
  array.unshift([0,0,0,0,0,0,0,0,0,0,0,0]);
  array.push([0,0,0,0,0,0,0,0,0,0,0,0]);
  return array;
}

function isSubmarine(arr, x, y) {
  if(arr[x-1][y-1]==0 && arr[x-1][y]==0 && arr[x-1][y+1]==0 && arr[x][y+1]==0 && arr[x+1][y+1]==0 && arr[x+1][y]==0 && arr[x+1][y-1]==0 && arr[x][y-1]==0){
    return true;
  }
  else {
    return false;
  }
}

function isBiggerShip(arr, x, y) {
  if(arr[x+1][y-1]==0 && arr[x][y-1]==0 && arr[x-1][y-1]==0 && arr[x-1][y]==0 && arr[x-1][y+1]==0){
    //horizontal?
    if(arr[x][y+1]==1 && arr[x-1][y+2]==0 && arr[x+1][y+2]==0 && arr[x+1][y+1]==0 && arr[x+1][y]==0){
      if(arr[x][y+2]==0){
        return "destroyer";
      }
      else{
        // bigger than a destroyer or wrong
        if(arr[x-1][y+3]==0 && arr[x+1][y+3]==0){
          if(arr[x][y+3]==0){
            return "cruiser";
          }
          // bigger than a cruiser or wrong
          else{
            if(arr[x-1][y+4]==0 && arr[x+1][y+4]==0){
              return arr[x][y+4]==0 && arr[x-1][y+5]==0 && arr[x][y+5]==0 && arr[x+1][y+5]==0 ? "battleship" : false;
            }
          }
        }
      }
    }
    else if(arr[x+1][y]==1 && arr[x][y+1]==0 && arr[x+1][y+1]==0 && arr[x+2][y+1]==0 && arr[x+2][y-1]==0){
      if(arr[x+2][y]==0){
        return "destroyer";
      }
      else{
        // bigger than a destroyer or wrong
        if(arr[x+3][y-1]==0 && arr[x+3][y+1]==0){
          if(arr[x+3][y]==0){
            return "cruiser";
          }
          // bigger than a cruiser or wrong
          else{
            if(arr[x+4][y-1]==0 && arr[x+4][y+1]==0){
              return arr[x+4][y]==0 && arr[x+5][y-1]==0 && arr[x+5][y]==0 && arr[x+5][y+1]==0 ? "battleship" : false;
            }
          }
        }
      }
    }
  }
  else{
    return false;
  }
}

function validateBattlefield(field) {
  var bigField = addBorder(field);
  var battleships = 1, cruisers = 2, destroyers = 3, submarines = 4;
  for(var row=1; row<11; row++) {
    for(var col=1; col<11; col++) {
      if(bigField[row][col]==1){
        if(isSubmarine(bigField,row,col)){
          submarines--;
        }
        else if(isBiggerShip(bigField,row,col)=="destroyer"){
          destroyers--;
        }
        else if(isBiggerShip(bigField,row,col)=="cruiser"){
          cruisers--;
        }
        else if(isBiggerShip(bigField,row,col)=="battleship"){
          battleships--;
        }
      }
    }
  }
  return submarines==0 && destroyers==0 && cruisers==0 && battleships==0 ? true : false;
}
