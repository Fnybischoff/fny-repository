var assert = chai.assert;

describe('multi triangle kata', function() {

  it('should return the sum of odd numbers in any line', function() {
    var result = totalOddInLine(3);
    var expected = 15;
    assert.deepEqual(result, expected);
  });

  it('should return the total sum of all digits for a given triangle', function() {
    var result = totalAllDigits(3);
    var expected = 36;
    assert.deepEqual(result, expected);
  });

  it('should return the answer for 5', function() {
    var result = multTriangle(5);
    var expected = [225, 144, 81];
    assert.deepEqual(result, expected);
  });


});
