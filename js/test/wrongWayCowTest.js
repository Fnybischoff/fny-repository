var assert = chai.assert;

describe('wrong way cow', function() {

  function show(field) {
  for (var i=0; i<field.length; i++) {
    console.log(field[i].join(''))
  }
  return field
}

  it("returns the setup of the cows in the field", function(){
    var field = [
      "cow.cow.cow.cow.cow",
      "cow.cow.cow.cow.cow",
      "cow.woc.cow.cow.cow",
      "cow.cow.cow.cow.cow",
    ]
    var expected = [1,0,19,0];
    var result = cowSetup(field);
    assert.deepEqual(result, expected);
  });

  it("returns the setup of the cows in the field 2", function(){
    var field = [
      "c..........",
      "o...c......",
      "w...o.c....",
      "....w.o....",
      "......w.cow"
    ]
    var expected = [0,0,1,3];
    var result = cowSetup(field);
    assert.deepEqual(result, expected);
  });



  it("ex1", function(){
    var field = [
      "cow.cow.cow.cow.cow".split(''),
      "cow.cow.cow.cow.cow".split(''),
      "cow.woc.cow.cow.cow".split(''),
      "cow.cow.cow.cow.cow".split('')
    ]
    var expected = [6,2];
    var result = findWrongWayCow(show(field));
    assert.deepEqual(result, expected, "Moo");
  });

  it("ex2", function(){
  var field = [
    "c..........".split(''),
    "o...c......".split(''),
    "w...o.c....".split(''),
    "....w.o....".split(''),
    "......w.cow".split('')
  ]
  assert.deepEqual(findWrongWayCow(show(field)), [8,4], "Moo");
  });

});
