function numberOfFriendsWhoAreAlive(board,row,col) {
  var count = 0;
  var maxCol = board[0].length-1;
  var maxRow = board.length-1;
  // top
  if(row==0){
    // top left corner
    if(col==0){
      return count = (board[0][1] + board[1][1] + board[1][0]);
    }
    // top right corner
    else if(col==maxCol){
      return count = (board[0][maxCol-1] + board[1][maxCol-1] + board[1][maxCol]);
    }
    // top side
    else{
      return count = (board[0][col-1] + board[1][col-1] + board[1][col] + board[1][col+1] + board[0][col+1]);
    }
  }
  else if(row==maxRow){
    // bottom left corner
    if(col==0){
      return count = (board[row-1][col] + board[row-1][col+1] + board[row][col+1]);
    }
    // bottom right corner
    else if(col==maxCol){
      return count = (board[row-1][col] + board[row-1][col-1] + board[row][col-1]);
    }
    // bottom side
    else{
      return count = (board[row][col-1] + board[row-1][col-1] + board[row-1][col] + board[row-1][col+1] + board[row][col+1]);
    }
  }
  // left side
  else if(col==0){
    return count = (board[row-1][col] + board[row-1][col+1] + board[row][col+1] + board[row+1][col+1] + board[row+1][col]);
  }
  // right side
  else if(col==maxCol){
    return count = (board[row-1][col] + board[row-1][col-1] + board[row][col-1] + board[row+1][col-1] + board[row+1][col]);
  }
  // middle cells
  for (var i=-1; i<=1; i++) {
    for (var j=-1; j<=1; j++) {
      count += board[row+i][col+j];
    }
  }
  return count-board[row][col];
}

function setCellHealth(board, row, col){
  var friends = numberOfFriendsWhoAreAlive(board,row,col);
  if(friends <= 1){
    console.log("under-population, cell dies");
    return 0;
  }
  else if(friends > 3){
    console.log("overcrowding, cell dies");
    return 0;
  }
  else if(friends == 2){
    console.log("cell stays as it is");
    return board[row][col];
  }
  else if(friends == 3){
    console.log("cell ressucitates");
    return 1;
  }
}

function nextGen(cells){
  var result = [];
  for (var i=0; i<cells.length; i++) {
    var newRow = [];
    for (var j=0; j<cells[0].length; j++) {
      newRow.push(setCellHealth(cells,i,j));
    }
    console.log(newRow);
    result.push(newRow);
  }
  return result;
}
