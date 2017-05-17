var assert = chai.assert;

describe('counting in English', function() {

  /*it('recognizes non numbers', function() {
    var result = numberToEnglish("petit chat");
    var expected = Error("Ouups !");
    assert.throw(numberToEnglish("petit chat"), Error);
    //expect(numberToEnglish("petit chat")).to.throw(/Error thrown/);
  });*/

  it('can consider a string as a number: 67', function() {
    var result = numberToEnglish("67");
    var expected = "sixty-seven";
    assert.deepEqual(result, expected);
  });

  it('works for a negative single digit: -5', function() {
    var result = numberToEnglish(-5);
    var expected = "negative five";
    assert.deepEqual(result, expected);
  });

  it('works for a single digit: 5', function() {
    var result = numberToEnglish(5);
    var expected = "five";
    assert.deepEqual(result, expected);
  });

  it('works for 2 digits: 12', function() {
    var result = numberToEnglish(12);
    var expected = "twelve";
    assert.deepEqual(result, expected);
  });

  it('works for 60', function() {
    var result = numberToEnglish(60);
    var expected = "sixty";
    assert.deepEqual(result, expected);
  });

  it('works for 58', function() {
    var result = numberToEnglish(58);
    var expected = "fifty-eight";
    assert.deepEqual(result, expected);
  });

  it('can deal with decimals: 67.89', function() {
    var result = numberToEnglish(67.89);
    var expected = "sixty-seven point eight nine";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under 1000: 845', function() {
    var result = numberToEnglish(845);
    var expected = "eight hundred and forty-five";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under 1000: 845.12', function() {
    var result = numberToEnglish(845.12);
    var expected = "eight hundred and forty-five point one two";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under 1000: 400', function() {
    var result = numberToEnglish(400);
    var expected = "four hundred";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under 1000: 400.78', function() {
    var result = numberToEnglish(400.78);
    var expected = "four hundred point seven eight";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under 10000: 3000', function() {
    var result = numberToEnglish(3000);
    var expected = "three thousand";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under 10000: 4200.78', function() {
    var result = numberToEnglish(4200.78);
    var expected = "four thousand two hundred point seven eight";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under a million: 412200.78', function() {
    var result = numberToEnglish(412200.78);
    var expected = "four hundred and twelve thousand two hundred point seven eight";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under a million: 400200.78', function() {
    var result = numberToEnglish(400200.78);
    var expected = "four hundred thousand two hundred point seven eight";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under a hundred million: 4130200.78', function() {
    var result = numberToEnglish(4130200.78);
    var expected = "four million one hundred and thirty thousand two hundred point seven eight";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under a billion: 42130200.78', function() {
    var result = numberToEnglish(42130200.78);
    var expected = "forty-two million one hundred and thirty thousand two hundred point seven eight";
    assert.deepEqual(result, expected);
  });

  it('works for numbers under a billion: 442130200.78', function() {
    var result = numberToEnglish(442130200.78);
    var expected = "four hundred and forty-two million one hundred and thirty thousand two hundred point seven eight";
    assert.deepEqual(result, expected);
  });

  it('2001', function() {
    var result = numberToEnglish(2001);
    var expected = "two thousand and one";
    assert.deepEqual(result, expected);
  });

  it('1011011', function() {
    var result = numberToEnglish(1011011);
    var expected = "one million eleven thousand and eleven";
    assert.deepEqual(result, expected);
  });

  it('-65721.55531', function() {
    var result = numberToEnglish(-65721.55531);
    var expected = "negative sixty-five thousand seven hundred and twenty-one point five five five three one";
    assert.deepEqual(result, expected);
  });

  it('65721.55531', function() {
    var result = numberToEnglish(65721.55531);
    var expected = "sixty-five thousand seven hundred and twenty-one point five five five three one";
    assert.deepEqual(result, expected);
  });

});
