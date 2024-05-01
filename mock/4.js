/**
 Write a function that computes the list of the first 100 Fibonacci numbers. 
 The first two Fibonacci numbers are 1 and 1. 
 The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. 
 The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.


 [1, 1, 2, 3, 5, 8 ....]

 */


 function fib(n, res){
    // if(n == 0) return 0;
    // if(n == 1 || n == 2) return 1;
    // return fib(n - 1) + fib(n - 2);
    if(res[n]) return res[n]
    res[n] = fib(n - 1, res) + fib(n - 2, res);
    return res[n]
 }

let res = new Array(100).fill(null);
res[0] = 0;
res[1] = 1;
res[2] = 1;
fib(100, res)
 console.log(res[28])


 function  first100fib(){
    const result = [1, 1];
    for(let i = 2; i < 100; i++){
        result[i] = result[i - 1] + result[i - 2];
    }
    console.log(result)
 }

 first100fib();