/**
 * @param {number} n
 * @return {number[]}
 */

//Time: O(n) Space: O(1)
var countBits = function(n) {

    let dp = [0];
    let offset = 1;
    for(let i = 1; i<=n; i++){
        //check if we got new most significant bit
        if(offset * 2 == i) offset = i;
        //calculate number of 1 bits
        dp[i] = 1 + dp[i-offset]
    }
    return dp;
    
};