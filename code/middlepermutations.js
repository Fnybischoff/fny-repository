function middlePermutation(s) {
  alphabet = s.split("").sort();
  result = [];
  // if s.length is uneven, string starts with middle char
  // remove char and consider the new string as even lengthed string
  if(alphabet.length%2==1){
    result.push(alphabet[(Math.floor(alphabet.length/2))]);
    alphabet.splice(alphabet.indexOf(result[0]), 1);
  }
  // if s.length is even, string starts with middle char and is preceeded by all other chars in reverse alphabet order
  result.push(alphabet[(alphabet.length/2)-1]);
  alphabet.splice((alphabet.length/2)-1, 1);
  for(i=alphabet.length;i>=0;i--){
    result.push(alphabet[i]);
  }
  return result.join("");
}
