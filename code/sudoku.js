function sudoku(puzzle) {

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function findCube(sliceStart, sliceEnd, lineStart){
  cube1 = puzzle[lineStart].slice(sliceStart,sliceEnd);
  cube2 = puzzle[(lineStart+1)].slice(sliceStart,sliceEnd);
  cube3 = puzzle[(lineStart+2)].slice(sliceStart,sliceEnd);
  cube = cube1.concat(cube2, cube3);
}

function findColumn(column, array, count){
  for(l=0;l<9;l++){
    column.push(puzzle[l][j]);
  }
}

function possibilities(array, cube, line, column){
  for(k=1;k<10;k++){
    if(cube.includes(numbers[k])===false && line.includes(numbers[k])===false && column.includes(numbers[k])===false){
      array.push(k);
    }
  }
}

function replacer(array, count1, count2){
  if(array.length === 1){
    puzzle[count1].splice(count2, 1, array[0]);
    puzzle.splice(count1, 1, puzzle[count1]);
  }
}

  do{
  // go through each line
  for(i=0;i<9;i++){
    // if the line contains zero(s)
    if(puzzle[i].includes(0)){
      // find out what's in this line
      var line = puzzle[i];
      // find out what's in the cube & column for this 0 and find possible solutions
      for(j=0;j<9;j++){
        var column = [];
        var cube = [];
        var canBe = [];
        if(puzzle[i][j] === 0){
          if(i<3){
            if(j<3){
              // find out what's in the cube
              findCube(0, 3, 0);
              // find out what's in the column
              findColumn(column, puzzle, j);
              // find list of possible solutions
              possibilities(canBe, cube, line, column);
              // if only one solution possible, replace 0, then replace the line in the original puzzle
              replacer(canBe, i, j)
            }
            else if(j>2 && j<6){
              //top middle
              findCube(3, 6, 0);
              findColumn(column, puzzle, j);
              possibilities(canBe, cube, line, column);
              replacer(canBe, i, j)
            }
            else{
              //top right
              findCube(6, 9, 0);
              findColumn(column, puzzle, j);
              possibilities(canBe, cube, line, column);
              replacer(canBe, i, j)
            }
          }
          else if(i>2 && i<6){
            if(j<3){
              //middle left
              findCube(0, 3, 3);
              findColumn(column, puzzle, j);
              possibilities(canBe, cube, line, column);
              replacer(canBe, i, j)
            }
            else if(j>2 && j<6){
              //middle middle
              findCube(3, 6, 3);
              findColumn(column, puzzle, j);
              possibilities(canBe, cube, line, column);
              replacer(canBe, i, j)
            }
            else{
              //middle right
              findCube(6, 9, 3);
              findColumn(column, puzzle, j);
              possibilities(canBe, cube, line, column);
              replacer(canBe, i, j)
            }
          }
          else {
            if(j<3){
              //bottom left
              findCube(0, 3, 6);
              findColumn(column, puzzle, j);
              possibilities(canBe, cube, line, column);
              replacer(canBe, i, j)
            }
            else if(j>2 && j<6){
              //bottom middle
              findCube(3, 6, 6);
              findColumn(column, puzzle, j);
              possibilities(canBe, cube, line, column);
              replacer(canBe, i, j)
            }
            else{
              //bottom right
              findCube(6, 9, 6);
              findColumn(column, puzzle, j);
              possibilities(canBe, cube, line, column);
              replacer(canBe, i, j)
            }
          }
        }
      }
    }
  }
  var newPuzzle = puzzle.toString().split(',');
}while (newPuzzle.includes("0"));
return puzzle;
}
