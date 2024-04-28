function merge2Lists(arr1, arr2) {
    let p1 = 0, p2 = 0;
    let result = [];
    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1] > arr2[p2]){
            result.push(arr2[p2]);
            p2++;
        }
        else{
            result.push(arr1[p1]);
            p1++;
        }
       
    }

    if(p1 < arr1.length){
        result.push(...arr1.slice(p1))
    }
    else if(p2 < arr2.length){
        result.push(...arr2.slice(p2))
    }
    return result;
}


console.log(merge2Lists([1, 4, 6], [2, 3, 5]));


/*
1. init 2 pointers at 0, and empty arr
while p1 < arr1.length and p2 < arr2.length
2. compare values at the pointers, take min, put it into new arr
3. increment the pointer from the array that had the min

4. check if p1 < arr1 or p2<arr2 len, if yes, just concat the remaining portion


*/