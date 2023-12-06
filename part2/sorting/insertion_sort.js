const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {

    for(let i = 0; i < array.length - 1; i++){
         let j = i + 1;
         while (j > 0 && array[j] < array[j - 1]) {
            // Swap the elements if they are in the wrong order
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
  
}

insertionSort(numbers);
console.log(numbers);