var assert = chai.assert;

describe('file path operations kata', function() {

  it('should return the file extension', function() {
    const fm = new FileMaster('/Users/person1/Pictures/house.png');
    assert.deepEqual(fm.extension(), 'png');
  });

  it('should return the file name', function() {
    const fm = new FileMaster('/Users/person1/Pictures/house.png');
    assert.deepEqual(fm.filename(), 'house');
  });

  it('should return the path to the file', function() {
    const fm = new FileMaster('/Users/person1/Pictures/house.png');
    assert.deepEqual(fm.dirpath(), '/Users/person1/Pictures/');
  });

});
