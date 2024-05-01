/*
Write a function that takes a list of numbers, a starting base b1 and a target base b2 
and interprets the list as a number 
in base b1 and converts it into a number in base b2 (in the form of a list-of-digits). 
So for example [2,1,0] in base 3 gets converted to base 10 as [2,1].

*/


function convertBases(num, b1, b2){
    let numInDec = 0;
    for(let i = 0; i < num.length; i++){
        let curPow = num.length - 1 - i;
        numInDec += Math.pow(b1, curPow) * num[i]
    }
    let res = [];
    while(numInDec > 0){
        let remainder = numInDec % b2;
        res.unshift(remainder);
        numInDec = Math.floor(numInDec / b2);
    }
    console.log(res)
}



convertBases([1, 2, 5], 10, 16)