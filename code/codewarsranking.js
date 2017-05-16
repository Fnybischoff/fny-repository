// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method

var User = function() {
  this.rank = -8;
  this.progress = 0;
  this.incProgress = function(rank) {
    console.log("****");
    if(rank > 8 || rank === 0 || rank <-8){
      throw "Rank is outside of allowed range";
    }
    else {
      // rank of kata is lower than user's rank
      if(rank < this.rank){
        // if they are on each side of 0, remove the 0 rank from diff
        rank <= -1 && this.rank >= 1 ? diff = this.rank - rank -1 : diff = this.rank - rank;
        if(diff === 1) {
          this.progress ++;
        }
      }
      // rank of kata is same as user's rank
      else if(rank === this.rank){
        this.progress += 3;
        console.log("completed kata of same rank ("+rank+"//"+this.rank+"),add 3 XP // new XP = "+this.progress);
      }
      // rank of kata is higher than user's rank
      else if(rank > this.rank){
        // if they are on each side of 0, remove the 0 rank from diff
        rank >= 1 && this.rank <= -1 ? diff = rank - this.rank -1 : diff = rank - this.rank;
        this.progress += 10*diff*diff;
        console.log("completed kata of higher rank ("+rank+"//"+this.rank+"), add lots of XP => "+10*diff*diff);
        console.log("new XP = "+this.progress);
      }
      while(this.progress >=100){
        console.log("progress is: "+this.progress);
        if(this.rank === -1){
          this.rank = 1;
        }
        else if(this.rank < 8){
          this.rank ++;
        }
        this.progress = this.progress-100;
        console.log("new progress = "+this.progress);
        console.log("current rank = "+this.rank);
      }
      if (this.rank === 8){
        this.progress = 0;
      }
    return this.progress;
    }
  }
};
/*  this.rank = rank;
  this.progress = progress;
};
Player.prototype = new User();
//User.prototype = new User();
*/
/*
var user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.progress // => 10
user.incProgress(-5) // will add 90 progress
user.progress # => 0 // progress is now zero
user.rank # => -7 // rank was upgraded to -7
*/

var Fny = new User(-8, 0);
console.log("initial rank = "+Fny.rank);// => -8
console.log("initial progress = "+Fny.progress);// => 0
Fny.incProgress(2); // will add 10 progress
console.log("new progress = "+Fny.progress);// => 10
Fny.incProgress(-5) // will add 90 progress
console.log("new progress = "+Fny.progress);// => progress is now zero
console.log("new rank = "+Fny.rank);// => rank was upgraded to -7
console.log(Fny.incProgress(9));
