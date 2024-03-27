var hammingWeight = function (n) {
    let res = 0;
    while (n > 0) {
        n = n & (n - 1)
        res++
    }
    return res;
};


// var hammingWeight = function(n) {
//     let res = 0;
//     while(n > 0){
//         if(n%2 > 0) res++;
//         n = n >> 1;
//     }
//     return res;
// };

// my solution 
// var hammingWeight = function(n) {
//     let res = 0;
//     for(let i =0; i < 32; i++){
//         if((n & Math.pow(2, i))>0) res++;
//     }
//     return res;
// };