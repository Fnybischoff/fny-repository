//x as the column and y as the row
function solve(map, miner, exit) {
  console.log("****");
  var answer = [];

  if(miner.x == exit.x && miner.y == exit.y){
    console.log("answer = "+answer);
    return answer;
  }

  else{
    var left = miner.x-1;
    var right = miner.x+1;
    var up = miner.y-1;
    var down = miner.y+1;
    while(miner.x != exit.x && miner.y != exit.y){
      while(map[right][miner.y] == true){
        miner.x ++;
        answer.push("right");
        console.log("position is now: "+miner.x+","+miner.y);
        console.log("answer is now: "+answer);
      }
      if(map[miner.x][down] == true){
        miner.y ++;
        answer.push("down");
        console.log("position is now: "+miner.x+","+miner.y);
        console.log("answer is now: "+answer);
      }
      if(map[left]!=undefined && map[left][miner.y] == true){
        miner.x --;
        answer.push("right");
        console.log("position is now: "+miner.x+","+miner.y);
        console.log("answer is now: "+answer);
      }
      if(map[miner.x][up] == true){
        miner.y --;
        answer.push("right");
        console.log("position is now: "+miner.x+","+miner.y);
        console.log("answer is now: "+answer);
      }
    }
    return answer;
  }
  /*while(miner.x != exit.x || miner.y != exit.y){
    return "nope";
    break;
  };
  return answer;*/
}
