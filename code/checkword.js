function around(arr, row, index, nextLetter){
  // oxo
  // o!o
  // ooo
  if(arr[row-1][index] === nextLetter){
    var indexRow = row-1;
    var indexLetter = index;
    return [indexRow, indexLetter];
  }
  // oox
  // o!o
  // ooo
  else if(arr[row-1][index+1] === nextLetter){
    var indexRow = row-1;
    var indexLetter = index+1;
    return [indexRow, indexLetter];
  }
  // ooo
  // o!x
  // ooo
  else if(arr[row][index+1] === nextLetter){
    var indexRow = row;
    var indexLetter = index+1;
    return [indexRow, indexLetter];
  }
  // ooo
  // o!o
  // oox
  else if(arr[row+1][index+1] === nextLetter){
    var indexRow = row+1;
    var indexLetter = index+1;
    return [indexRow, indexLetter];
  }
  // ooo
  // o!o
  // oxo
  else if(arr[row+1][index] === nextLetter){
    var indexRow = row+1;
    var indexLetter = index;
    return [indexRow, indexLetter];
  }
  // ooo
  // o!o
  // xoo
  else if(arr[row+1][index-1] === nextLetter){
    var indexRow = row+1;
    var indexLetter = index-1;
    return [indexRow, indexLetter];
  }
  // ooo
  // x!o
  // ooo
  else if(arr[row][index-1] === nextLetter){
    var indexRow = row;
    var indexLetter = index-1;
    return [indexRow, indexLetter];
  }
  // xoo
  // o!o
  // ooo
  else if(arr[row-1][index-1] === nextLetter){
    var indexRow = row-1;
    var indexLetter = index-1;
    return [indexRow, indexLetter];
  }
  return false;
}

function checkWord( board, word ) {
  // add 0 all around the board to avoid undefined values
  for(i=0;i<4;i++){
    board[i].push("0");
    board[i].unshift("0");
  }
  var upDownSide = ["0","0","0","0","0","0"];
  board.push(upDownSide);
  board.unshift(upDownSide);
  // 1 letter words
  if(word.length === 1){
    for(k=1;k<4;k++){
      if(board[k].includes(word)){
        return true;
      }
    }
  }
  // 2 letter words
  if(word.length === 2){
    // look-up each row to find the current letter
    for(k=1;k<4;k++){
      while(board[k].includes(word[0])){
        var indexRow = k;
        var indexLetter = board[k].indexOf(word[0]);
        board[k].splice(indexLetter, 1, "0");
        console.log(board[k]);
        // check letters around it
        if(around(board, k, indexLetter, word[1])){
          return true;
        }
        /*if(board[indexRow-1][indexLetter] === word[1] || board[indexRow][indexLetter+1] === word[1] || board[indexRow+1][indexLetter] === word[1] || board[indexRow][indexLetter-1] === word[1]){
          return true;
        }*/
      }
    }
  }
  return false;
}
