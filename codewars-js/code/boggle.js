function addBorder(arr) {
  for(var i=0; i<arr.length;i++) {
    arr[i].unshift("0");
    arr[i].push("0");
  }
  var borderLine = [];
  for(var j=0;j<arr[0].length;j++){
    borderLine.push("0");
  }
  arr.unshift(borderLine);
  arr.push(borderLine);
  return arr;
}

function nextLetterLocation(board, row, col, next){
  var up = board[row-1][col];
  var upRight = board[row-1][col+1];
  var right = board[row][col+1];
  var botRight = board[row+1][col+1];
  var bot = board[row+1][col];
  var botLeft = board[row+1][col-1];
  var left = board[row][col-1];
  var upLeft = board[row-1][col-1];
  switch(next){
    case up:
      row = row-1;
      break;
    case upRight:
      row = row-1;
      col = col+1
      break;
    case right:
      col = col+1;
      break;
    case botRight:
      row = row+1;
      col = col+1;
      break;
    case bot:
      row = row+1;
      break;
    case botLeft:
      row = row+1;
      col = col-1;
      break;
    case left:
      col = col-1;
      break;
    case upLeft:
      row = row-1;
      col = col-1;
      break;
    default:
      console.log("no!")
      return false;
      break;
  }
  console.log("row of next letter = "+row+" and col = "+col);
  return [row,col];
}

function checkWord( board, word ) {
  //board = addBorder(board);
  // 1 letter words
  if(word.length === 1){
    for(k=1;k<4;k++){
      if(board[k].includes(word)){
        return true;
      }
    }
  }
  // 2 letter words
    // look at each letter
    for(var row=1;row<board.length-1;row++){
      for(var col=1;col<board[0].length-1;col++){
        // find first letter of the word
        if(board[row][col]==word[0]){
          console.log("found letter "+word[0]+" at " +row+" // "+col);
          console.log(board[row]);
          var tempWord = word;
          var tempBoard = board;
          var lineWithoutPreviousLetter = tempBoard[row].splice(col+1,1,"0");
          tempBoard = board.splice(row+1, 1, lineWithoutPreviousLetter);
          tempWord = tempWord.replace(tempWord[0], "");
          // as long as there are letters in the word to find and the next letter is found
          while(nextLetterLocation(tempBoard, row, col, tempWord[0])!=false){
            var nextLetter = nextLetterLocation(board, row, col, word[0]);
            console.log("next letter "+word[1]+" found here:"+nextLetter);
            var lineWithoutPreviousLetter = tempBoard[row].splice(col+1,1,"0");
            tempBoard = board.splice(row+1, 1, lineWithoutPreviousLetter);
            tempWord = tempWord.replace(tempWord[0], "");
            if(tempWord.length == 0){
              return true;
            }
            else{
              row = nextLetter[0];
              col = nextLetter[1];
            }
          }
        }
      }
    }
  return count == word.length ? true : false;
}

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
