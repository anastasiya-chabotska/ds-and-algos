/**
 arr = [0, 0, 0, 0] n = size
 k update operations

 arr = [0, 0, 0, 0, 0]
 n = 5
 updates = [
    [1, 3, 2] -> [0, 2, 2, 2, 0, 0]
    [2, 4, 3] -> [0, 2, 5, 5, 3, 0]
    [0, 2, -2] -> [-2, 0, 3, 5, 3, 0]
 ]


 k * n
 */

//  function rangeAddition(arr, updates){
//     for(let i = 0; i < updates.length; i++){
//         let [start, end, inc] = updates[i];
//         for(let j = start; j<= end; j++){
//             arr[j] = arr[j] + inc;
//         }
//     }
//  }


 function rangeAddition(n, updates){
   const arr = new Array(n).fill(0);
   for(let[start, end, inc] of updates){
        arr[start] += inc;
        if(end + 1 < n) arr[end + 1] -= inc;
   }
   for(let i = 1; i < n; i++){
        arr[i] = arr[i] + arr[i-1];
   }
   return arr;
 }


 let arr = new Array(5).fill(0);
 console.log(arr)
 let updates = [
    [1,  3,  2],
    [2,  4,  3],
    [0,  2, -2]
]
 console.log(rangeAddition(5, updates))
