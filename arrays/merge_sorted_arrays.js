//given sorted arrays, merge them
//[0, 3, 4, 31] 
//[4, 6, 30]

//start at i1, i2 = 0
//if (arr1[index1] < arr2[index2])
    //push arr1[i1] to res
//else 
    //push arr2[i2] to res

function mergeSortedArrays(arr1, arr2){

    //check input
    if(arr1.length === 0){
        return arr2;
    }

    if(arr2.length === 0){
        return arr1;
    }


    let i1 = 0, i2 = 0;

    let merged = [];


    //should probably be broken down in smaller parts for better readability

    while (i1 != arr1.length  && i2 != arr2.length ){

        if (arr1[i1] < arr2[i2])
        { 
            merged.push(arr1[i1])
            i1++
        }
        else 
        {
            merged.push(arr2[i2])
            i2++;
        }

    }


    if (i1 == arr1.length - 1){
        console.log(arr1.slice(i1));
         return merged.concat(arr1.slice(i1))
    }
    else return merged.concat(arr2.slice(i2));

   
}

console.log(mergeSortedArrays([100], [4, 6, 30, 150]))




