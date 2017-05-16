var spaghettiCode = function(plate) {
  var lettersPlate = plate.join("").replace(/[^a-z]/gi, "").split("");
  var counts = {};

  for(var i = 0; i< lettersPlate.length; i++) {
    var num = lettersPlate[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  keysSorted = Object.keys(counts).sort(function(a,b){return counts[b]-counts[a]});
  return keysSorted[0] != undefined ? keysSorted[0] : "";
}
