/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {


//     let mid = Math.floor(nums.length/2);

//     for(let i = mid; mid >= 0; i--){
//         if(nums[i+1] < nums[i]) return nums[i+1]
//     }

//     let min = nums[0]

    
    
// };



/*
BST

left = 2i + 1
right = 2i + 2

root at index 0




[3,4,5,1,2]


[11,13,15,17,19]

  




*/

//Time: O(logn) Space: O(1)
var findMin = function(nums) {

 
    let min = nums[0];

    let [left, right] = [0, nums.length - 1];

    while(left <= right){

        if(nums[left] <= nums[right]) {
            min = Math.min(nums[left], min);
            break
        }


        let mid = Math.floor((right + left)/2);

        min = Math.min(min, nums[mid]);


        //if this element is part of left, check right
        if(nums[mid]>=nums[left])
            left = mid + 1

        else right = mid - 1;
        //if it's part of right, go left
    }

    return min;
        
        
    };
    