function bowlingScore(frames) {
  frames = frames.replace(/ /g,"");
  frames = frames.split("");
  console.log("frames:" +frames);
  /*for(j=frames.length;j>=0;j--){
    console.log(frames[j]);
  }*/
  console.log(frames[frames.length-1]);
  var score = 0;
  //console.log(score);
  for(i=frames.length-1;i>=0;i--){

    if(frames[i] === "/"){
      console.log(Number(frames[i-1]));
      score = score - Number(frames[i-1]) + 10 + Number(frames[i+1]);
      //console.log(score);
    }
    else if(frames[i] === "X"){
      if(i === frames.length-1){
        score += 20;
        console.log(score);
      }
      else if(i === frames.length-2 && frames[frames.length-1]==="X"){
        score += 30;
      }
      else{
        score += 10 + Number(frames[i+1]) + Number(frames[i+2]);
        console.log(score);
      }
    }
    else{
      var newNum = Number(frames[i]);
      score += newNum;
    }
  }
  console.log("score: "+score);
  return score;
}
