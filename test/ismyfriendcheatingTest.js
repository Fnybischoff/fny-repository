var assert = chai.assert;

describe('cheating', function() {

  it('should return numbers when friend is not cheating', function() {
    var result = removeNb(26);
    var expected = [[15,21], [21,15]];
    assert.deepEqual(result, expected);
  });

  it('should return empty array when friend is cheating', function() {
    var result = removeNb(100);
    var expected = [];
    assert.deepEqual(result, expected);
  });

});

//Test.assertSimilar(removeNb(26), [[15,21], [21,15]]);
//Test.assertSimilar(removeNb(100), []);
