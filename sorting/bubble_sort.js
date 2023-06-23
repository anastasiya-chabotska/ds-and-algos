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

}


bubbleSort(numbers);
console.log(numbers);