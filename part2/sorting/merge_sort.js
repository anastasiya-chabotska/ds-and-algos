const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

/*
[99, 44, 6, 2, 1]
[5, 63, 87, 283, 4, 0]

*/
function merge(left, right) {
    let res = [];
    let leftP = 0, rightP = 0;
    while (leftP < left.length && rightP < right.length) {
        if (left[leftP] <= right[rightP]) {
            res.push(left[leftP]);
            leftP++;
        }
        else {
            res.push(right[rightP]);
            rightP++;
        }
    }
    if (leftP < left.length) {
        res = res.concat(left.slice(leftP))
    }
    else res = res.concat(right.slice(rightP));
    return res;
}


const answer = mergeSort(numbers);
console.log(answer);