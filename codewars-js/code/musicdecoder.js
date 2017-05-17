function uncompress(music) {
  var array = music.split(",");
  var result = [];
  for(i=0;i<array.length;i++){
    // deal with multiples
    if(array[i].includes("*")){
      var arr = array[i].split("*");
      var count = 0;
      while(count < arr[1]){
        result.push(Number(arr[0]));
        count ++;
      };
    }
    // deal with ranging values
    else if(array[i].search(/\d-/)>=0){
      var range = array[i];
      var start = "";
      var end = "";
      // start number is negative
      if(range[0]=="-"){
        start += "-";
        range = range.substring(1);
        console.log("start; "+start);
      }
      // end number is negative
      else if(array[i].includes("--")){
        end += "-";
        range = range.replace("-","");
      }
      range = range.split(/[-\/]/)
      start += range[0];
      end += range[1];
      var multiple = range.length >2 ? Number(range[2]):1;
      // range that increases
      if(Number(start)<Number(end)){
        var count = Number(start);
        while(count <= Number(end)){
          result.push(count);
          count+=multiple;
        }
      }
      // range that decreases
      else{
        var count = Number(start);
        while(count >= Number(end)){
          result.push(count);
          count-=multiple;
        }
      }

    }
    else{
      result.push(Number(array[i]));
    }
  }
  return result;
}
