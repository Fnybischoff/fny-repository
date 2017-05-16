var upToNineteen = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var teens = ["whatever","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

function oneTo999 (n) { // to translate groups of 3 digits
  var result = "";
  var number = n.toString();
  var lastTwo = number.slice(number.length-2);
  // zero is a special case
  if (n === 0) {
    return "zero";
  }
  // translate hundreds digit
  if (n > 99) {
    lastTwo == "00" ? result += upToNineteen[Number(number[0])] + " hundred" : result += upToNineteen[Number(number[0])] + " hundred and "
  }
  // translate last two digits
  if (Number(lastTwo) < 20 && lastTwo != "00") {
    result += upToNineteen[Number(lastTwo)];
  }
  else if (Number(lastTwo) >= 20) {
    result += teens[number[number.length-2]];
    if (number[number.length-1]!="0") {
      result += "-" + upToNineteen[number[number.length-1]];
    }
  }
  return result;
}

function cleanUp (st) { // to remove the unwanted mentions of zero somethings
  st = st.replace(/  thousand|  million|  billion|  trillion| zero/,"");
  return st;
}

function ands (st) {
  var string = st.split(" ");
  var beforeLast = string[string.length-2];
  if (beforeLast == "thousand" || beforeLast == "million" || beforeLast == "trillion" || beforeLast == "billion") {
    string.splice(string.length-1, 0, "and");
    return string.join(" ");
  }
  return st;
}

function numberToEnglish (n) {
  // non-number cases - numberize string
  if(isNaN(Number(n))){
    throw new Error("error");
  };
  // separate and translate decimals
  var decimals = ""; // for when no decimals
  if (n != Math.floor(n)) { // for when there are decimals
    var number = n.toString();
    var tail = number.slice(number.indexOf(".")+1);
    decimals = " point";
    for (i=0;i<tail.length;i++) {
      decimals += " "+upToNineteen[Number(tail[i])];
    }
  };
  // negative vs positive numbers
  Math.sign(n) == -1 ? sign = "negative " : sign = "";
  // infinity cases
  if (Math.abs(n) == Infinity) {
    return sign + "infinity";
  };
  n = Math.abs(n);
  n = Math.floor(n);
  var number = n.toString();
  // make number divisible into groups of 3 digits
  while (number.length % 3 != 0) {
    number = "0" + number;
  };
  // small numbers
  if (number.length == 3) {
    return sign + oneTo999(n) + decimals;
  }

  else {
    var bigNumbers = [" thousand "," million "," billion "," trillion "," quadrillion "];
    // first group of 3 digits is special
    var slice = number.slice(number.length-3);
    english = oneTo999(Number(slice));
    number = number.slice(0, number.length-3);
    // deal with each following group of 3 digits
    count = 0;
    while (number.length > 0) {
      slice = number.slice(number.length-3)
      if(slice != "000"){
        english = oneTo999(Number(slice)) + bigNumbers[count] + english;
      }
      number = number.slice(0, number.length-3);
      count ++;
    }
    // clean up a bit, add the 'and's and the decimals, and voilà
    english = cleanUp(english);
    return sign + ands(english) + decimals;
  }
}
