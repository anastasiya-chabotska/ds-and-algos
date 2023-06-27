const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    console.log(`mergeSort(${array})`)
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    let middle = Math.ceil(array.length / 2);
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length);

    console.log("left: ", left)
    console.log("right: ", right)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {

    // //console.log("merge ", left, right)
    // if (left.length == 1 && right == undefined) return left;
    // if (right.length == 1 && left == undefined) return right;

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        //console.log("loop ")

        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    //console.log("after loop indeces ", leftIndex, rightIndex)

    if (leftIndex < left.length) {
        //console.log("leftovers in left")
        result = result.concat(left.slice(leftIndex, left.length))
    }
    else result = result.concat(right.slice(rightIndex, right.length))

    //console.log("result ", result)

    return result;
}


const answer = mergeSort(numbers);
console.log(JSON.stringify(answer));