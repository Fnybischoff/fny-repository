// Giving up on Vanilla js for playing around with DOM elements...
$(document).ready(function(){

var addProgress = $('.more-btn');
var removeProgress = $('.less-btn');

addProgress.click(function() {
    if(this.id == "more-btn1"){
      $('#progress-bar1').append('<div class="progress light-green"></div>');
    }
    else if(this.id == "more-btn2"){
      $('#progress-bar2').append('<div class="progress green"></div>');
    }
    else if(this.id == "more-btn3"){
      $('#progress-bar3').append('<div class="progress dark-green"></div>');
    }
  });

removeProgress.click(function() {
    if(this.id == "less-btn1"){
      $('#progress-bar1').children(':first').remove();
    }
    else if(this.id == "less-btn2"){
      $('#progress-bar2').children(':first').remove();
    }
    else if(this.id == "less-btn3"){
      $('#progress-bar3').children(':first').remove();
    }
  });

});
