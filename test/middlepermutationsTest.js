var assert = chai.assert;

describe('middle permutations', function() {

  it('should return correct answer for even lengthed string', function() {
    var result = middlePermutation("ABCD");
    var expected = "BDCA";
    assert.deepEqual(result, expected);
  });

  it('should return correct answer for uneven lengthed string', function() {
    var user1 = middlePermutation("ABCDX")
    var expected = "CBXDA";
    assert.deepEqual(user1, expected);
  });

});
