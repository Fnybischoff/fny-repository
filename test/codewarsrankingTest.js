var assert = chai.assert;

describe('codewars ranking system', function() {

  it('should return the rank of a newcomer', function() {
    var user1 = new User(-8,0);
    var expected = -8;
    assert.deepEqual(user1.rank, expected);
  });

  it('should return the progress a newcomer who completed a first kata of same rank', function() {
    var user1 = new User(-8,0);
    var expected = 3;
    assert.deepEqual(user1.incProgress(-8), expected);
  });

  it('should return the new rank when progress > 100', function() {
    var user1 = new User(-8,0);
    user1.incProgress(-7);
    user1.incProgress(-5);
    //user.progress // => 10
    var expected = -7;
    assert.deepEqual(user1.rank, expected);
  });

  it('should return the rank after completing a kata level 1', function() {
    var user1 = new User(-8,0);
    user1.incProgress(1);
    var expected = -2;
    assert.deepEqual(user1.rank, expected);
  });

});
