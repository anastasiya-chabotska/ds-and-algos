
const binarySearch = function(array, target){
    let left = 0, right = array.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        let foundValue = array[mid];
        if(foundValue === target) return mid;
        else if(target < foundValue){
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return -1;
}


//recursion is increasing memory
const binarySearch1 = function(array, left, right, value){
    if(left <= right){
    let mid = Math.floor((left + right)/2);
    console.log({mid})
    if(array[mid]==value) return mid;
    else if(value < array[mid]) return binarySearch(array, left, mid - 1, value);
    else return binarySearch(array, mid + 1, right, value)
    }

}

const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(nums, 10))