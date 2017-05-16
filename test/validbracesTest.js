var assert = chai.assert;

describe('valid braces [](){}', function() {

  it('should return correct answer for string with only ()', function() {
    var result = validBraces("()");
    var expected = true;
    assert.deepEqual(result, expected);
  });

  it('should return correct answer for string with only ()', function() {
    var result = validBraces("())");
    var expected = false;
    assert.deepEqual(result, expected);
  });

  it('should return correct answer for string with () and []', function() {
    var result = validBraces("()[]");
    var expected = true;
    assert.deepEqual(result, expected);
  });

});
