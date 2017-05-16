var assert = chai.assert;

describe('boggle tests', function() {

  var testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

  it('returns a game with an additional border', function() {
    var result = addBorder(testBoard);
    var expected =[
    ["0","0","0","0","0","0"],
    ["0","E","A","R","A","0"],
    ["0","N","L","E","C","0"],
    ["0","I","A","I","S","0"],
    ["0","B","Y","O","R","0"],
    ["0","0","0","0","0","0"]
  ];
    assert.deepEqual(result,expected);
  });

  it('returns true when the board contains a one letter word', function() {
    var result = checkWord(testBoard, "C");
    var expected = true;
    assert.deepEqual(result, expected);
  });

  it('returns true when the board contains a two letter word', function() {
    var result = checkWord(testBoard, "EA");
    var expected = true;
    assert.deepEqual(result, expected);
  });


//Test.expect( checkWord( testBoard, "EARS" ) == false );
//Test.expect( checkWord( testBoard, "BAILER" ) == true );
//Test.expect( checkWord( testBoard, "RSCAREIOYBAILNEA" ) == true, "Must be able to check indefinite word lengths going in all directions" );
//Test.expect( checkWord( testBoard, "CEREAL" ) == false, "Valid guesses can't overlap themselves" );
//Test.expect( checkWord( testBoard, "ROBES" ) == false, "Valid guesses have to be adjacent" );
//Test.expect( checkWord( testBoard, "BAKER" ) == false, "All the letters have to be in the board" );
//Test.expect( checkWord( testBoard, "CARS" ) == false, "Valid guesses cannot wrap around the edges of the board" );

});
