// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const numbers = [25, 33, 11, 78, 13, 55, 100, 93]

function quickSort(array, left, right){

    if(left === right) return;

    let i = left;
    let pivot = right - 1;

    while(i < pivot){
        // console.log("i: ", i)
        // console.log("pivot: ", pivot)
        if(array[i]>array[pivot]){
            //swap pivot and item before it
            let temp = array[pivot - 1]; //4
            array[pivot - 1] = array[pivot]; // 0, 0
            array[pivot] = temp;

            //console.log("swapped pivot and prev item ", array)
           

            if(pivot - i > 1){
            //then swap the item next to pivot with the one we were checking
            array[pivot] = array[i];
            array[i] = temp;
            }

            pivot--;
          
        }
        else i++;
        //console.log(array)

    }

    console.log("pivot ", pivot)
    console.log("array ", array)
    if(array[right] < array[pivot]){

        let temp = array[right];
        array[right]= array[pivot];
        array[pivot]= temp;
        pivot++;

    }



    if(pivot < array.length){
   
    console.log("sort left part: ", left, pivot);

   quickSort(array, left, pivot - 1);
    }

   if(pivot + 1 < array.length){
    console.log("sort right part: ", pivot + 1, right);

    quickSort(array, pivot + 1, right);
   }


}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);