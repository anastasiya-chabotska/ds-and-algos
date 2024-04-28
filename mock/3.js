// function rotateListByK(arr, k){
//     let p1 = 0;
//     //k swaps
//     while(p1 < k){
//         let p2 = arr.length - k + p1;
//         swap(arr, p1, p2);
//         p1++;
//     }

//     console.log("step1", arr)

//     p1 = 0;
//     while(p1 < k){
//         let p2 = k + p1;
//         swap(arr, p1, p2);
//         p1++;
//     }

//     return arr;

// }

// function swap(arr, i1, i2){
//     let temp = arr[i1];
//     arr[i1] = arr[i2];
//     arr[i2] = temp;
// }

/*
[1, 2, 3, 4, 5, 6]
 0  1  2  3  4  5 


1. init p1 at 0, p2 at (len - k) + p1

while p1 < k, swap values at p1 and p2
p1++; 


[5, 6, 3, 4, 1, 2]
 0  1  2  3  4  5
2. perform the remaining arrangements
we will be working with subarrays, 
0 - (k - 1)
and 
k -  (len - k - 1)

init p1 at 0, p2 at k + p1
while p1 < k
swap values at p1 and p2


*/



var rotate = function(nums, k) {
    k = k % nums.length;
    let left = 0, right = nums.length - 1;
    while(left < right){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }

    left = 0, right = k - 1;
    while(left < right){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }

    left = k, right = nums.length - 1;
    while(left < right){
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }

    return nums;
};

//more inefficient
var rotate = function(nums, k){
    let res = [...nums];
    for(let i = 0; i < res.length; i++){
        let pos = i + k;
        if(pos >= nums.length) pos = pos % nums.length;
        nums[pos] = res[i];
    }
  
}
console.log(rotate([1, 2, 3, 4, 5, 6], 2));
