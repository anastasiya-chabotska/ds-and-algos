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

//Time: O(1) Space: O(1)
var reverseBits = function(n) {

    let answer = 0;
    for(let i=0; i < 32; i++){
        //console.log("i: ", i)
        //get the bit at position i
        let bit = (n >> i) & 1
        console.log("bit: ", bit)
        //then put the bit at position 31 - i in the result
        //first move the bit to the appropriate place bit << 31 - i
        //then bit OR it with the answer, that way if it's 1 bit, it's put into place, otherwise answer is not modified
        console.log("shifted: ", bit << (31 - i))
        answer = (bit << (31 - i)) | answer;
    }

    //have to add >>> 0 to turn negative into positive
    return answer >>> 0
};