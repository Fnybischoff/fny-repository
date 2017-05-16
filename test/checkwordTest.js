var assert = chai.assert;

describe('boggle kata', function() {

  var testBoard = [
    ["E","A","R","A"],
    ["N","L","E","C"],
    ["I","A","I","S"],
    ["B","Y","O","R"]
  ];

  it('should return true for "C"', function() {
    var result = checkWord(testBoard, "C");
    var expected = true;
    assert.deepEqual(result, expected);
  });

  it('should return false for "Z" - not in board', function() {
    var result = checkWord(testBoard, "Z");
    var expected = false;
    assert.deepEqual(result, expected);
  });

  it('should return true for "AR"', function() {
    var result = checkWord(testBoard, "AR");
    var expected = true;
    assert.deepEqual(result, expected);
  });

});
