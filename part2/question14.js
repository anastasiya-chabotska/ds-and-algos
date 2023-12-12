var searchRange = function(nums, target) {
    let index = binarySearch(nums, target, 0, nums.length - 1);
    let start = index, end = index;
    while(true){

        let newStart = binarySearch(nums, target, 0, start - 1);
        if(newStart!==-1) start = newStart;
        else break;
    }
      while(true){

        let newEnd = binarySearch(nums, target, end + 1, nums.length - 1);
        if(newEnd!==-1) end = newEnd;
        else break;
    }

    return [start, end];
};

var binarySearch = function(array, target, start, end){
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(array[mid]==target) return mid;
        else if(target < array[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
}