/*
Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].
*/


// function getNumDigits(num){
//     numStr = num.toString();
//     return numStr.split("");
// }


function getNumDigits(num){
    let res = [];
    while(num > 0){
        let remainder = num % 10;
        res.unshift(remainder);
        num = Math.floor(num / 10);
    }
    console.log(res);
}


getNumDigits(12567912)