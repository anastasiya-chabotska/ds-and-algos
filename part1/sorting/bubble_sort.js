const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

    let lastIndex = array.length - 1; //10
    let swapped = true;

    while(swapped){
        console.log("swapping")
        swapped = false;
        for(let i=0; i < lastIndex; i++){
            if(array[i]>array[i+1]){
                let temp = array[i+1];
                array[i + 1] = array[i];
                array[i] = temp;
                swapped = true; 
            }
            
        }
        lastIndex--;

    }

    return array;
}

function bubbleSort2(array){

    //outer loop ensures it runs the complete comparisons n times
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

bubbleSort2(numbers);
bubbleSort([1, 2, 3, 4, 5])
console.log(numbers);