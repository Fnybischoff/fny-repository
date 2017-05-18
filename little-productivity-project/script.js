// Giving up on Vanilla js for playing around with DOM elements...
$(document).ready(function(){

var addProgress = $('.more-btn');
var removeProgress = $('.less-btn');
var progressCount = [0,0,0];
var moreThanHalf = [false,false,false];
addProgress.click(function() {
    if(this.id == "more-btn1"){
      $('#progress-bar1').append('<div class="progress light-green"></div>');
      progressCount[0] ++;
      progressOverHalf($('#progress-bar1'), progressCount[0], moreThanHalf[0], $('#circle1'));
    }
    else if(this.id == "more-btn2"){
      $('#progress-bar2').append('<div class="progress green"></div>');
      progressCount[1] ++;
      progressOverHalf($('#progress-bar2'), progressCount[1], moreThanHalf[1], $('#circle2'));
    }
    else if(this.id == "more-btn3"){
      $('#progress-bar3').append('<div class="progress dark-green"></div>');
      progressCount[2] ++;
      progressOverHalf($('#progress-bar3'), progressCount[2], moreThanHalf[2], $('#circle3'));
    }
  });

removeProgress.click(function() {
    if(this.id == "less-btn1"){
      $('#progress-bar1').children(':first').remove();
      progressCount[0] = progressCount[0] != 0 ? progressCount[0]-1 : progressCount[0];
      progressOverHalf($('#progress-bar1'), progressCount[0], moreThanHalf[0], $('#circle1'));
    }
    else if(this.id == "less-btn2"){
      $('#progress-bar2').children(':first').remove();
      progressCount[1] = progressCount[1]!=0 ? progressCount[1]-1 : progressCount[1];
      progressOverHalf($('#progress-bar2'), progressCount[1], moreThanHalf[1], $('#circle2'));
    }
    else if(this.id == "less-btn3"){
      $('#progress-bar3').children(':first').remove();
      progressCount[2] = progressCount[2]!=0 ? progressCount[2]-1 : progressCount[2];
      progressOverHalf($('#progress-bar3'), progressCount[2], moreThanHalf[2], $('#circle3'));
    }
  });

function progressOverHalf(bar, progressCountForThisBar, moreThanHalf, circleDiv){
  var progressSize = 20*progressCountForThisBar;
  if(progressSize >= bar.width()){
    circleDiv.removeClass("mediumPurpleCircle");
    circleDiv.addClass("purpleCircle");
  }
  else if(progressSize >= bar.width()/2){
    moreThanHalf = true;
    circleDiv.removeClass("purpleCircle");
    circleDiv.addClass("mediumPurpleCircle");
  }
  else{
    circleDiv.removeClass("mediumPurpleCircle");
    circleDiv.addClass("lightPinkCircle");
  }
}

});
