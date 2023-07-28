
//Time: O(n) Space: O(1)
var missingNumber = function(nums){

    //iterate over nums
    let i = 0;
    while(i < nums.length){
        //check if the values at index i equals i
            //if values is undefined: continue
            if(nums[i]==undefined) i++
            //if not: put it at the correct index, and swap the values
            if(nums[i]!=i){
                let temp = nums[nums[i]];
                nums[nums[i]] = nums[i];
                nums[i] = temp;
            }
            if(nums[i]==i) i++
    }
            
    //itearate over nums and return the index of undefined
    for(let i=0; i<=nums.length; i++){
        if(nums[i]==undefined) return i;
    }
}


//you take a sum of 0 to n, then subtract the sum of values in nums
//T: O(n) S: O(1)
var missingNumber = function(nums){

    let res = nums.length;

    for(let i=0; i< nums.length; i++){
        res = res + i - nums[i]
    }
    return res


}

//Gauss Formula
//sum of numbers in a sequence n(n+1)/2

//Bit Way to Solve it
var missingNumber = function(nums){

    //if you XOR all items in nums with all items in 0 - nums, you will end up with the missing value
    //all same values will cancel out, leaving you with 0
    //if you XOR 0000 with 0010 you get 0010 which is the missing number
    
    let res = nums.length;
    for(let i =0; i < nums.length; i++){
        res = res ^ i ^ nums[i]
    }
    return res


}