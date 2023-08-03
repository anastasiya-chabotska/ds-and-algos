/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//Time: O(n) Space: O(1)
var twoSum = function(numbers, target) {
    let [left, right] = [0, numbers.length - 1];

    while(left < right){
        let sum = numbers[left] + numbers[right];
        if(target < sum) right--;
        if(target > sum) left++;
        if(target == sum) return [left + 1, right + 1];
    }
};