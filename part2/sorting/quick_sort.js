// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [1, 2, 3, 4, 5, -10];

//other solutions include partition functions
//also, you can have 2 arrays left and right, and simply push smaller to left, higher to right
//another way is to have i, j and pivot, swap i and j if i < pivot, then swap i and pivot at the end
function quickSort(array, left, right) {

    if (right - left < 1) return array[left];

    let pivot = right;
    let movingRight = true;
    let pointer = left;
    console.log("Pivot: ", array[pivot])
    while (pivot != pointer) {
        if (movingRight && array[pointer] > array[pivot]) {
            let temp = array[pivot];
            array[pivot] = array[pointer];
            array[pointer] = temp;

            let tempP = pointer;
            pointer = pivot;
            pivot = tempP;
            movingRight = !movingRight;
        }
        else if (!movingRight && array[pointer] < array[pivot]) {
            let temp = array[pivot];
            array[pivot] = array[pointer];
            array[pointer] = temp;

            let tempP = pointer;
            pointer = pivot;
            pivot = tempP;
            movingRight = !movingRight;
        }
        else {
            movingRight ? pointer++ : pointer--;
        }
    }

    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);