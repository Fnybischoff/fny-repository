function inLine(n){
  var arr = [];
  for(var i=1;i<n;i++){
    arr.push(i*n, i*n);
  }
  arr.push(n*n);
  return arr;
}

function sortOdd(arr){
  var even = [];
  var odd = [];
  for(var k=0;k<arr.length;k++){
    if(arr[k]%2 != 0){
      odd.push(arr[k]);
    }
  }
  odd = odd.reduce(function(a, b) {
  return a + b;
  }, 0);
  return odd;
}

function multTriangle(n) {
  var allDigits = [];
  for(var l=n;l>0;l--){
    allDigits.push(inLine(l));
  }
  merged = [].concat.apply([], allDigits)
  var total_sum = merged.reduce(function(a, b) {
  return a + b;
  }, 0);
  var total_odd_sum = sortOdd(merged);
  var total_even_sum = total_sum - total_odd_sum;
  console.log([total_sum, total_even_sum, total_odd_sum]);
  return [total_sum, total_even_sum, total_odd_sum];
}
//[total_sum, total_even_sum, total_odd_sum]
multTriangle(1);
multTriangle(2);
multTriangle(3);
multTriangle(4);
multTriangle(5);
multTriangle(6);
multTriangle(7);
multTriangle(8);
multTriangle(9);
multTriangle(10);
multTriangle(11);
multTriangle(12);
multTriangle(13);
multTriangle(14);
multTriangle(15);
multTriangle(16);
multTriangle(17);
multTriangle(18);
multTriangle(19);
console.log("20:")
multTriangle(20);
multTriangle(21);
multTriangle(22);
multTriangle(23);
multTriangle(24);
multTriangle(25);
multTriangle(27);
multTriangle(28);
multTriangle(29);
console.log("30:")
multTriangle(30);
multTriangle(100);
