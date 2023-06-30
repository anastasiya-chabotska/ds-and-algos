/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Time O(n) Space O(n)
var twoSum = function(nums, target) {

    //O(n)
    let haveSeen = {};

    for (let i = 0; i < nums.length; i++){
     
        if(haveSeen[target - nums[i]] != undefined) return [haveSeen[target - nums[i]], i];
        else haveSeen[nums[i]] = i;
        console.log(haveSeen)
    }

    return [];
    
   
};

let numbers = [2, -3, 12, 15]
console.log(twoSum(numbers, 9))