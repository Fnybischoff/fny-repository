var assert = chai.assert;

describe('bowling', function() {

  it('should return the total score for a simple game', function() {
    var result = bowlingScore('12 16 11 18 02 40 11 11 11 17');
    var expected = 41;
    assert.deepEqual(result, expected);
  });

  it('should take spares into account', function() {
    var result = bowlingScore('12 16 11 18 0/ 40 11 11 11 11');
    var expected = 47;
    assert.deepEqual(result, expected);
  });

  it('should take strikes into account', function() {
    var result = bowlingScore('12 16 11 18 X 40 11 11 11 11');
    var expected = 47;
    assert.deepEqual(result, expected);
  });

  it('should return the highest score for a full strikes game', function() {
    var result = bowlingScore('X X X X X X X X X XXX');
    var expected = 300;
    assert.deepEqual(result, expected);
  });

});
