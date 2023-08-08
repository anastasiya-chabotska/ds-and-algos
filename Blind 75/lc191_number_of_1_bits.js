/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight2 = function(n) {

    if(n == 0) return 0;

    //135
    //[1, 2, 4, 8, 16, 32, 64, 128]
    //2^n = 128

    //get log2 of n - the highest value, the "main" bit
    //2^7 = 128
    //now find the remainder bits
    //7 bits remaining
    //get log2 of remainder - 
    //2^2 = 4
    //3 bits remaining
    //2^1 = 2
    //1 bit remaining
    //

    let power = Math.floor(Math.log2(n));
    let remainder = n - Math.pow(2, power);

    if(remainder == 0) return 1;
    return 1 + hammingWeight(remainder);

    
    
};

//T: O(1) S: O(1)
//you can also mod by 2
//if there's a remainder, that means last bit is 1 (since you need 1)
//and then to shift you divide by 2
var hammingWeight = function(n){
    //00000000000000000000000000001011
    //&
    //00000000000000000000000000000001
    let numOfOnes = 0;
    while(n != 0){
        if((n & 1) == 1) numOfOnes++;
        n = n >>> 1; 
    }
    return numOfOnes;

}