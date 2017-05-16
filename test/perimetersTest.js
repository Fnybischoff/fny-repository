var assert = chai.assert;

describe('return the sum of the perimeters of all squares in fibonacci(n+1) sequence', function() {

  it('should return the fibonacci value of a number', function() {
    var result = fib(6);
    var expected = 8;
    assert.deepEqual(result, expected);
  });

  it('should return the fibonacci value of another number', function() {
    var result = fib(10);
    var expected = 55;
    assert.deepEqual(result, expected);
  });

});
