let arr = [2, 50, 33, 78, 1, 0, 15]


function radixSort(arr){

    //find what is the max number of digits 

    let digits = 2;

    //iterate for each digit
    for(let i = 1; i<= digits; i++){

        //create a bucket 0 - 9
        let bucket = [[], [], [], [], [], [], [], [], [], []]

        //keep putting values in the bucket accordingly
        for(let j=0; j< arr.length; j++){
            let bIndex = arr[j] % 10;
            bucket[bIndex].push(arr[j])
        }

        //then retrive them from the bucket and put back into array
    }


}