var assert = chai.assert;

describe('cheating', function() {

  it('should return the ID of the longest spaghetti when horizontal only', function() {
    var plate = [
      'AAAAAAAA____'.split(''),
      '____________'.split(''),
      'BBBBBBBBBBB_'.split(''),
      '____________'.split(''),
      'CCCCCC______'.split('')
    ]
    var result = spaghettiCode(plate);
    var expected = "B";
    assert.deepEqual(result, expected);
  });

  it('should return the ID of the longest spaghetti in any direction', function(){
    var plate = [
          'AAAAAAAAA      '.split(''),
          '________A__CCC_'.split(''),
          ' B   C  A    C '.split(''),
          '_B___C__A____C_'.split(''),
          ' B   C       C '.split(''),
          '_B___CCCCCCCCC_'.split('')
        ]
    var result = spaghettiCode(plate);
    var expected = "C";
    assert.deepEqual(result, expected);
  });

  it('should return empty string if no spaghetti', function(){
    var plate = [
          '__________'.split(''),
          '__________'.split(''),
          '__________'.split(''),
          '__________'.split(''),
          '__________'.split(''),
        ]
    var result = spaghettiCode(plate);
    var expected = "";
    assert.deepEqual(result, expected);
  });

});
