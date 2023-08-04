/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//Time: O(n^2) Space: O(1)
var threeSum = function(arr) {
    //sort first
    //[-4, -1, -1, -1, 0, 1, 2, 2]
    //      ^   l               r
    let result = [];
    arr.sort((a, b)=> a - b);

    

    //iterate over the array
    for(let i=0; i < arr.length - 2; i++){
    //look for 2 sum needed to equal to 0
    if(i > 0 && arr[i] == arr[i-1]) continue;
    let sum = 0 - arr[i];
        //left, right ptrs
        let left = i + 1;
        let right = arr.length - 1;
        while(left < right){
            let curSum = arr[left]+arr[right];
            if(curSum==sum){
        
            result.push([arr[i], arr[left], arr[right]])
            left++;
            right--;
            while(arr[left] === arr[left - 1] && left < right) left++;
            }
            if(curSum < sum) left++
            if(curSum > sum) right--

        }
    }

    return result;

};


console.log(threeSum([-1,0,1,2,-1,-4]))



//int array nums 


/**
 * nums[i] + nums[j] + nums[k]
 * nums = [-1,0,1,2,-1,-4]
 * -1 and 0 = -1, so we're looking for negative 1
 * -1: we're looking for 2 nums that equal to 1
 * 
 * 
 */