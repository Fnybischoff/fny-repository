function factor(number){
  var facNum = number;
  for(i=number;i>1;i--){
    facNum *=(i-1);
  }
  return facNum;
}

function calculateDivider(string){
  var counts = {};
  var ch, index, len, count;
  for (index = 0, len = string.length; index < len; ++index) {
    ch = string.charAt(index);
    count = counts[ch];
    counts[ch] = count ? count + 1 : 1;
  }

  var repeats = [];
  for (ch in counts) {
    if(counts[ch]>1){
      repeats.push(factor(counts[ch]));
    }
  }

  var divider = repeats.reduce(function(a, b) {
    return a * b;
  }, 1);
  return divider;
}

function listPosition(st){
  var permutations = factor(st.length)/calculateDivider(st);
  var range = permutations/st.length;
  var alphabet = st.split("").sort();
  var front = alphabet.splice(0, alphabet.indexOf(st[0]));
  var frontSize = front.length*range;

  while(st.length>1){
    st = st.slice(1);
    permutations = factor(st.length)/calculateDivider(st);
    range = permutations/st.length;
    alphabet = st.split("").sort();
    front = alphabet.splice(0, alphabet.indexOf(st[0]));
    frontSize += front.length*range;
  }
return frontSize+1;
}
