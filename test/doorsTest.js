var assert = chai.assert;

describe('doors in js', function() {

  it('should return the number of open doors for 5 students', function() {
    var result = doors(5);
    var expected = 2;
    assert.deepEqual(result, expected);
  });

  it('should return the number of open doors for 10 students', function() {
    var result = doors(10);
    var expected = 3;
    assert.deepEqual(result, expected);
  });

  it('should return the number of open doors for 100 students', function() {
    var result = doors(100);
    var expected = 10;
    assert.deepEqual(result, expected);
  });

});
