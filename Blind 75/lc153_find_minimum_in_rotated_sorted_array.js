/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {


    let mid = Math.floor(nums.length/2);

    for(let i = mid; mid >= 0; i--){
        if(nums[i+1] < nums[i]) return nums[i+1]
    }

    let min = nums[0]

    
    
};



/*
BST

left = 2i + 1
right = 2i + 2

root at index 0




[3,4,5,1,2]


[11,13,15,17,19]

  




*/