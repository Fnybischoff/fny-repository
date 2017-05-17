function doors(n){
  var allDoors = [];
  for(i=0;i<n;i++){
    allDoors.push("closed");
  }
  console.log(allDoors);
  for(kid=1;kid<=n;kid++){
    for(door=kid-1;door<n;door+=kid){
        if(allDoors[door] == "closed"){
          allDoors.splice(door,1,"open");
        }
        else{
          allDoors.splice(door,1,"closed");
        }
    }
  }
  var count = 0;
  for(j=0;j<allDoors.length;j++){
    if(allDoors[j] == "open"){
      count++;
    }
  }
  console.log(allDoors);
  return count;
}



def doors(n):
  allDoors = []
  for i in range(0, n):
    allDoors.append("closed")

  for kid in range(1, n+1):
    for door in range(kid-1, n, kid):
        if allDoors[door] == "closed":
          allDoors[door] = "open"
        else:
          allDoors[door] = "closed"

  count = 0
  for j in range(0, len(allDoors)):
    if allDoors[j] == "open":
      count+=1
  return count


  function isPrime (n){
    if (n < 2) return false;
    // An integer is prime if it is not divisible by any prime less than or equal to its square root
    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++){
      if (n % i == 0){
          return false;
      }
    }
    return true;
  }

  function gap(g, m, n) {
    var primes = [], result = [];
    for(i=m;i<=n;i++){
      if(isPrime(i)){
        primes.push(i);
        for(j=0;j<=primes.length;j++){
          if(primes[j+1]-primes[j]===g){
            result.push(primes[j], primes[j+1]);
            return result;
          }
        }
      }
    }
    return null;
  }

import math

def isPrime (n):
  if (n < 2): return false;
  q = Math.floor(Math.sqrt(n));
  for i in range(2, q)
    if n % i == 0:
      return false;
  return true


def gap(g, m, n):
  primes = []
  result = []
  for i in range(m, n)
    if isPrime(i):
      primes.append(i)
      for j in range(0,len(primes)):
        if primes[j+1]-primes[j]==g:
          result.append(primes[j], primes[j+1])
          return result
        }
      }
  return null
