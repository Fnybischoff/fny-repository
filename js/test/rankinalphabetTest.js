var assert = chai.assert;

describe('rank in alphabet', function() {

  it('should return the factorial value of a number', function() {
    var result = factor(5);
    var expected = 120;
    assert.deepEqual(result, expected);
  });

  it('should return the denominateur = multiply the factorial repeats of each character', function() {
    var result = calculateDivider("DDD");
    var expected = 6;
    assert.deepEqual(result, expected);
  });

  /*it('should return the number of permutations for 5 letter word with repeats', function() {
    var result = listPosition("CCBD");
    var expected = 3;
    assert.deepEqual(result, expected);
  });*/


  it('should return the rank of a 3 letters string in an alphabetical list of this string', function() {
    var result = listPosition("CBD");
    var expected = 3;
    assert.deepEqual(result, expected);
  });

  it('should return the rank of a 4 letters string in an alphabetical list of this string', function() {
    var result = listPosition("CBAD");
    var expected = 15;
    assert.deepEqual(result, expected);
  });

  it('DBAC', function() {
    var result = listPosition("DBAC");
    var expected = 21;
    assert.deepEqual(result, expected);
  });

  it('CDEF', function() {
    var result = listPosition("CDEF");
    var expected = 1;
    assert.deepEqual(result, expected);
  });

  it('EDFC', function() {
    var result = listPosition("EDFC");
    var expected = 16;
    assert.deepEqual(result, expected);
  });

  it('ABAB', function() {
    var result = listPosition("ABAB");
    var expected = 2;
    assert.deepEqual(result, expected);
  });

  it('BAAA', function() {
    var result = listPosition("BAAA");
    var expected = 4;
    assert.deepEqual(result, expected);
  });

  it('BOOKKEEPER', function() {
    var result = listPosition("BOOKKEEPER");
    var expected = 10743;
    assert.deepEqual(result, expected);
  });

  it('IOOIDRNROJYKWFL', function() {
    var result = listPosition("IOOIDRNROJYKWFL");
    var expected = 11776734227;
    assert.deepEqual(result, expected);
  });

  /*it('IMMUNOELECTROPHORETICALLY', function() {
    var result = listPosition("IMMUNOELECTROPHORETICALLY");
    var expected = 718393983731145800000;
    assert.deepEqual(result, expected);
  });*/

});
