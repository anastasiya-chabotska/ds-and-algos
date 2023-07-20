/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

   //starting at the bottom

   //last step and next to last
   let one = 1; //one way from last step to get to last step
   let two = 1; //one way from next to last to get to last

   //1    1    2   3   5 ...
   //one  two  res
   let result = 0;
   for(let i = 2; i < n; i++){
    
    result = one + two;
    temp = two;
    two = result;
    one = two;
    
   }

   return result;

  
  };


 console.log(climbStairs(45))