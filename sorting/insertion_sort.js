const numbers = [99, 44, 6, 2, 1, 1, 5, 44, 63, 87, 283, 4, 0];

function insertionSort(array) {

    for (let i = 1; i < array.length; i++) {

        console.log("now at ", array[i])
        //check if the current item is smaller than previous
        if (array[i] < array[i - 1]) {
            console.log("found smaller")
            //now start searching for the place where it needs to be inserted
            //go backwards in this smaller subarray of what we've seen so far
            for (let j = i - 1; j >= 0; j--) {
                //if we encounter an item that is smaller than what we have that means we found the place
                if (array[j] < array[i]) {
                    //j + 1 because we want to put the new item after the smaller item
                    array.splice(j + 1, 0, array[i])
                    console.log(array)
                    //now delete the duplicate at it's old place, i + 1, since we just inserted the new item
                    array.splice(i + 1, 1)
                    break;
                }
                //or if we reached the end and we have the new smallest item
                if (j == 0) {
                    array.splice(j, 0, array[i])
                    array.splice(i + 1, 1)
                    console.log(array)
                }

            }
        }
    }
    return array;

}

function insertionSort2(array) {

    for (let i = 1; i < array.length; i++) {

        console.log("now at ", array[i])

        if (array[i] < array[0]) {
            console.log("smaller than first element")
            //put at the beginning
            array.unshift(array[i]);
            array.splice(i + 1, 1)
        }

        let j = i;
        while (array[j] <= array[j - 1]) {
            
            console.log("keep swapping", array[j], array[j-1])
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
            console.log("swapped ", array)

        }
        //console.log(array);


    }
    return array;

}

//instead of using splice, we can also swap elements until the condition is satisfied

insertionSort2(numbers);
console.log(numbers);