/**
 * @param {number} n
 * @return {number}
 */

//Time: O(n) Space: O(1) - since we can only keep 2 values, not the whole DP array
var climbStairs = function(n) {
    if(n == 1) return 1
    if(n == 2) return 2

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
    one = temp;
    
   }

   return result;

  
  };


 console.log(climbStairs(45))