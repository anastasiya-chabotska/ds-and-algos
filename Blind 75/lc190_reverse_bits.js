/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {

    let answer = 0;
    for(let i = 0; i < 32; i++){
        if(n & 1 == 1){
            //change the answer
            answer = answer + Math.pow(2, 31 - i);
        } 
        n = n >>> 1
    }
    return answer;
    
};