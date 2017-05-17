var assert = chai.assert;

describe('Game of Life', function() {
  /*it('should return empty array for empty input', function() {
    var result = life([]);
    var expected = [];
    assert.deepEqual(result, expected);
  });*/

  it('gives the number of friends who are alive (1)', function() {
    var board = [[0,0,0],[0,1,0],[0,0,1]];
    var result = numberOfFriendsWhoAreAlive(board,1,1);
    var expected = 1;
    assert.deepEqual(result,expected);
  });
  it('gives the number of friends who are alive (4)', function() {
    var board = [[1,1,1],[0,1,0],[0,0,1]];
    var result = numberOfFriendsWhoAreAlive(board,1,1);
    var expected = 4;
    assert.deepEqual(result,expected);
  });
  it('gives the number of friends who are alive for cell in top left corner', function() {
    var board = [[0,1,0],[0,0,0],[0,0,0]];
    var result = numberOfFriendsWhoAreAlive(board,0,0);
    var expected = 1;
    assert.deepEqual(result,expected);
  });
  it('gives the number of friends who are alive for cell in left side', function() {
    var board = [[0,1,1],[1,1,0],[0,0,0]];
    var result = numberOfFriendsWhoAreAlive(board,1,0);
    var expected = 2;
    assert.deepEqual(result,expected);
  });

  /*
  it('sets cell to 0 if under population', function() {
    var board = [[0,0,1],[1,1,0],[0,0,0]];
    var result = setCellHealth(board,1,0);
    var expected = 0;
    assert.deepEqual(result,expected);
  });
  it('sets cell to 1 if 3 friends', function() {
    var board = [[0,1,1],[1,1,0],[0,0,0]];
    var result = setCellHealth(board,1,0);
    var expected = 1;
    assert.deepEqual(result,expected);
  });
  it('cell stays dead if 2 friends', function() {
    var board = [[0,1,0],[1,0,0],[0,0,0]];
    var result = setCellHealth(board,1,1);
    var expected = 0;
    assert.deepEqual(result,expected);
  });
  it('cell stays alive if 2 friends', function() {
    var board = [[0,1,0],[1,1,0],[0,0,0]];
    var result = setCellHealth(board,1,1);
    var expected = 1;
    assert.deepEqual(result,expected);
  });
  it('sets cell to 0 if more than 3 friends', function() {
    var board = [[0,1,1],[1,1,0],[1,1,0]];
    var result = setCellHealth(board,1,0);
    var expected = 0;
    assert.deepEqual(result,expected);
  });
  */

  it('gives next generation', function() {
    var board = [[0,1,0],[0,1,1],[0,0,0]];
    var result = nextGen(board);
    var expected = [[0,1,1],[0,1,1],[0,0,0]];
    assert.deepEqual(result,expected);
  });

});
