let arr = [2, 50, 33, 320, 78, 1, 0, 15]


function radixSort(arr){

    //find what is the max number of digits 

    let digits = 3;
    let divideBy = {
        1: 1,
        2: 10,
        3: 100,
        4: 1000
    }

    //iterate for each digit
    for(let i = 1; i<= digits; i++){

        //create a bucket 0 - 9
        let bucket = [[], [], [], [], [], [], [], [], [], []]

        //keep putting values in the bucket accordingly
        for(let j=0; j < arr.length; j++){
            let bIndex = (Math.floor(arr[j] / divideBy[i])) % 10;
            console.log(bIndex)
            bucket[bIndex].push(arr[j])
        }

        //then retrive them from the bucket and put back into array
        let index = 0;
        for(let i=0; i<bucket.length; i++){
            for(let j = 0; j< bucket[i].length; j++){
                arr[index] = bucket[i][j];
                index++;
            }
        }
        console.log(arr);
    }


}

radixSort(arr)