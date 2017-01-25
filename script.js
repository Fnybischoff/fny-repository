// Giving up on Vanilla js to make sure everything runs after DOM is loaded
$(document).ready(function(){

var createBtn = document.getElementById('createAct');

createBtn.onclick = function() {
    console.log('Click just happened');
    return false;
  };

});
