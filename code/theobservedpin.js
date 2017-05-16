// http://stackoverflow.com/questions/4331092/finding-all-combinations-of-javascript-array-values
function allPossibleCases(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1));
    for (var i = 0; i < allCasesOfRest.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
        result.push(arr[0][j] + allCasesOfRest[i]);
      }
    }
    return result;
  }
}

function getPINs(observed) {
  var possibilities = [["0","8"],["1","2","4"],["1","2","3","5"],["2","3","6"],["1","4","5","7"],["2","4","5","6","8"],["3","5","6","9"],["4","7","8"],["0","5","7","8","9"],["6","8","9"]];
  var possibleDigits = [];
  if(observed.length === 1){
    result = possibilities[Number(observed)];
  }
  else {
    for(i=0;i<observed.length;i++){
      var digit = Number(observed[i]);
      possibleDigits.push(possibilities[digit]);
    }
    var result = allPossibleCases(possibleDigits);
  }
  return result;
}
