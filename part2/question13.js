//my quciksort
const quickSort = function(array, left, right){
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

const nums = [5, 3, 1, 6, 4, 2];
quickSort(nums, 0, nums.length - 1);
console.log(nums);