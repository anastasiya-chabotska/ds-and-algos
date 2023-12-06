const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//my solution
function bubbleSort(array) {
    let count = 0;
    while (count < array.length) {
        for (let i = 0; i < array.length - count; i++) {
            let cur = array[i];
            let next = array[i + 1];

            if (next < cur) {
                let temp = cur;
                array[i] = next;
                array[i + 1] = temp;
            }

        }
        count++;
    }
}

// bubbleSort(numbers);
// console.log(numbers);


function bubbleSort2(array){

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - i; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

bubbleSort2(numbers);
console.log(numbers);
