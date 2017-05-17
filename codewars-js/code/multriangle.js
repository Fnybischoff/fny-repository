function totalOddInLine(n){
  var lastBefore = n-2;
  var odd = n*n;
  for(var i=1;i<=lastBefore;i+=2){
    odd += n*i*2;
  }
  return odd;
}

function totalAllDigits(n){
  var total = 0;
  for(var j=1;j<=n;j++){
    total += j*j*j;
  }
  return total;
}

function isOdd(num){
  return num % 2;
}

function multTriangle(n) {
  var total_sum = totalAllDigits(n);
  var total_odd_sum = 0;
  for(var k=1;k<=n;k++){
    if(isOdd(k) === 1){
      total_odd_sum += totalOddInLine(k);
    }
  }
  var total_even_sum = total_sum - total_odd_sum ;
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
//multTriangle(100);
