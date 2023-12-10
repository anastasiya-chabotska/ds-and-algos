const quickSort = function(array, left, right){
    if(left < right){
        let partitionIdx = partition(array, left, right);
        quickSort(array, left, partitionIdx - 1);
        quickSort(array, partitionIdx + 1, right);
    }
}

const partition = function(array, left, right){
    let partitionValue = array[right];
    let partitionIdx = left;
    for(let j = left; j < right; j++){
        if(array[j] < partitionValue){
            swap(array, j, partitionIdx);
            partitionIdx++;
        }
    }
    swap(array, partitionIdx, right);
    return partitionIdx;
}

const swap = function(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const getKthLargest = function(array, k){
    let indexToFind = array.length - k;
    quickSort(array, 0, array.length - 1);
    return array[indexToFind];
}

const nums = [5, 3, 1, 6, 4, 2];
// quickSort(nums, 0, nums.length - 1);
// console.log(nums);
console.log(getKthLargest(nums, 2));






















//my quciksort
const quickSort1 = function(array, left, right){
    if(right <= left) return array[left];
    let pivot = right;

    let i = left, j = left;
    while(j < right){
        if(array[j] < array[pivot]){
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            i++;
        }
        j++;
    }

    let temp = array[i];
    array[i] = array[pivot];
    array[pivot] = temp;
    quickSort(array, left, i - 1);
    quickSort(array, i + 1, right);

    
}

// const nums = [5, 3, 1, 6, 4, 2];
// quickSort(nums, 0, nums.length - 1);
// console.log(nums);