

function twoSumBF(nums, target) {

    for (let p1 = 0; p1 < nums.length; p1++) {

        let numToFind = target - nums[p1];
        for (let p2 = p1 + 1; p2 < nums.length; p2++) {

            if (nums[p2] == numToFind) return [p1, p2]
        }
    }

    return null;
}

function twoSum(nums, target){

    let haveSeen = {}
    for(let p1=0; p1<nums.length; p1++){
      
       let numToFind = target - nums[p1];

       if(haveSeen[numToFind]!=null) return [haveSeen[numToFind], p1]

       haveSeen[nums[p1]] = p1;

    }

    return null;
}

console.log(twoSum([25], 25))