var cache = {};

function fib (n) {
  if(n == 0) return 0;
  if(n == 1) return 1;
  var previous = cache[n-1] || fib(n-1);
  cache[n-1] = previous;
  return previous + fib(n-2);
};

function perimeter(n) {
console.log(n);
  result = 0;
  for(i=0;i<=n+1;i++){
    result += fib(i)*4
  }
  return result;
}
