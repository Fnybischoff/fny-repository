var assert = chai.assert;

describe('music decoder', function() {

  it ("2 identical numbers", function() {
    var result = uncompress('1,2*2,3');
    var expected = [1,2,2,3];
    assert.deepEqual(result, expected);
  });

  it ("3 consecutive numbers, ascending", function() {
    var result = uncompress('1,3-5,7');
    var expected = [1,3,4,5,7];
    assert.deepEqual(result, expected);
  });

  it ("3 consecutive numbers, descending", function() {
    var result = uncompress('1,5-3,7');
    var expected = [1,5,4,3,7];
    assert.deepEqual(result, expected);
  });

  it ("3 numbers with same interval, descending", function() {
    var result = uncompress('1,10-6/2,7');
    var expected = [1,10,8,6,7];
    assert.deepEqual(result, expected);
  });

  it ("identical + consecutive + same interval", function() {
    var result = uncompress("1*2,2-5,7-11/2");
    var expected = [1, 1, 2, 3, 4, 5, 7, 9, 11];
    assert.deepEqual(result, expected);
  });

  it ("descending from positive to negative 2 by two", function() {
    var result = uncompress("1--5/2");
    var expected = [1, -1, -3, -5];
    assert.deepEqual(result, expected);
  });

  it ("Random Test", function() {
    var result = uncompress("145,196,53,106*5,47,2-8/3,118-127/3,22-31/3,138,136,29,17,184,183,86,104*5,33-29/2,134*4,84-88,117,166-172/3");
    var expected = [145, 196, 53, 106, 106, 106, 106, 106, 47, 2, 5, 8, 118, 121, 124, 127, 22, 25, 28, 31, 138, 136, 29, 17, 184, 183, 86, 104, 104, 104, 104, 104, 33, 31, 29, 134, 134, 134, 134, 84, 85, 86, 87, 88, 117, 166, 169, 172];
    assert.deepEqual(result, expected);
  });

});
