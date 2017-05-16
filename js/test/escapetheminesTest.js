var assert = chai.assert;

describe('don\'t move', function() {

  it('should return empty array, since you are already at the goal', function() {
    var result = solve([[true]], {x:0,y:0}, {x:0,y:0});
    var expected = [];
    assert.deepEqual(result, expected);
  });
});

describe('A pretty simple map (2x2)', function() {
  var map = [[true, false],
            [true, true]];

  it('Should return the only correct move', function() {
    assert.deepEqual(solve(map, {x:0,y:0}, {x:1,y:0}), ['right']);
  });

  it('Should return the only moves necessary', function() {
    assert.deepEqual(solve(map, {x:0,y:0}, {x:1,y:1}), ['right', 'down']);
  });
});

describe('A linear map(1x4)', function() {
  var map = [[true], [true], [true], [true]];

  it('Should return a chain of moves to the right', function() {
    assert.deepEqual(solve(map, {x:0,y:0}, {x:3,y:0}), ['right', 'right', 'right']);
  });

  it('Should return a chain of moves to the left', function() {
     assert.deepEqual(solve(map, {x:3,y:0}, {x:0,y:0}), ['left', 'left', 'left']);
  });
});
