//given an array return the first recurring character
//if no recurring - return undefined

//brute force
//iterate nested loops comparing each item - O(n^2)


//declare the dictionary
//iterate over the array
//  look up the key in our dictionary
//      if not there - store it
//      else return the number
//return undefined 


function firstRecurringChar(arr){

    const haveSeen = {}

    for (let i = 0; i < arr.length; i++){
        //be careful here because of 0 being falsy in js so if (0) actually equals false so change to haveSeen[arr[i]] != undefined, but if the values use true, it's fine
        if(haveSeen[arr[i]]) return arr[i]
        //or better set the value to index if you need to return the indeces of the occurences
        else haveSeen[arr[i]] = true
    }

    return undefined
}
//O(n)

let arr = [0, 2, 8, 5, 2, 10];
console.log(firstRecurringChar(arr))

//what about [2, 5, 5, 2, ....] ???
//will return 5 eventhough was first

function firstRecurringChar2(arr){

    const haveSeen = {}
    //{2: 0, 5: 1, 5: 2}
    let result = +Infinity;

    for (let i = 0; i < arr.length; i++){
        if(haveSeen[arr[i]] != undefined) {
            console.log(haveSeen[arr[i]] < result, haveSeen[arr[i]], result)
            //if(result == -1) result = haveSeen[arr[i]]
            if(haveSeen[arr[i]] < result) result = haveSeen[arr[i]]
        }
        else haveSeen[arr[i]] = i;
    }
    
    console.log("RESULT ", result)
    if(result !== +Infinity) return arr[result]
    else return undefined
}

console.log(firstRecurringChar2([2, 5, 5, 2, 10, 29]));