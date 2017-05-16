var assert = chai.assert;

describe('battleship field validator', function() {

  var field =   [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                 [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                 [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
                 [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                 [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                 [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

  it('returns a field with an additional border', function() {
    var result = addBorder(field);
    var expected =[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                   [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
                   [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0],
                   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                   [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    assert.deepEqual(result,expected);
  });

  it('returns true if the element is a submarine', function() {
    var arr =[[0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 0]];
    var result = isSubmarine(arr, 1, 1);
    var expected = true;
    assert.deepEqual(result,expected);
  });
  it('returns false if the element is not a submarine', function() {
    var arr =[[0, 0, 0, 0, 0],
              [0, 1, 0, 0, 0],
              [0, 0, 1, 1, 0],
              [0, 0, 0, 0, 0]];
    var result = isSubmarine(arr, 1, 1);
    var expected = false;
    assert.deepEqual(result,expected);
  });

  it('returns "destroyer" if the element is a destroyer', function() {
    var arr =[[0, 0, 0, 0, 0, 0],
              [0, 1, 1, 0, 0, 0],
              [0, 0, 0, 0, 1, 0],
              [0, 0, 0, 0, 0, 0]];
    var result = isBiggerShip(arr, 1, 1);
    var expected = "destroyer";
    assert.deepEqual(result,expected);
  });
  it('returns false if the element is not a destroyer', function() {
    var arr =[[0, 0, 0, 0, 0, 0],
              [0, 0, 1, 0, 0, 0],
              [0, 0, 1, 0, 1, 0],
              [0, 0, 0, 1, 0, 0]];
    var result = isBiggerShip(arr, 1, 2);
    var expected = false;
    assert.deepEqual(result,expected);
  });

  it('returns true if field contains exactly 4 submarines and 3 destroyers', function() {
    var result = validateBattlefield(field);
    var expected = true;
    assert.deepEqual(result,expected);
  });

});
