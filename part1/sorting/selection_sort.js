const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

    //start at 0
    //loop until the end to find min
    //replace min with the start
    //start++ -> do the same
    //while start < arr.length 

    let start = 0;
    while (start < array.length) {
        let indexMin = start;
        console.log("start is now at: ", start)
        for (let i = start + 1; i < array.length; i++) {

            if (array[i] < array[indexMin]) {
                console.log("new min ", array[i])
                indexMin = i;
            }
        }
        let temp = array[start];
        array[start] = array[indexMin];
        array[indexMin] = temp;
        start++
    }
    return array
}

console.log(selectionSort(numbers));