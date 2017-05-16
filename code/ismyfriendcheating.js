// find possible values for b from a
function func(max, a){
  return (Math.pow(max, 2) + max - 2*a)/(2 + 2*a);
}

function removeNb(n){
  var answer = [];
  var totalSum = n*(n+1)/2;

  for(a=Math.floor(n/2);a<=n;a++){
    var b = func(n, a);
    if(b%1 === 0){
      var newAnswer = [a, b];
      answer.push(newAnswer);
    }
  }
  return answer;
}


def func(max, a):
  return (Math.pow(max, 2) + max - 2*a)/(2 + 2*a)

def removeNb(n):
  answer = []
  totalSum = n*(n+1)/2

  for a in range (Math.floor(n/2), n+1):
    b = func(n, a);
    if b%1 === 0:
      newAnswer = [a, b]
      answer.append(newAnswer)

  return answer;
