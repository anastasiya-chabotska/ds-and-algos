// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative2(n) {
    let arr = [0, 1];

    for(let i = 2; i<=n; i++){
        arr.push(arr[i - 2] + arr[i-1])
    }
    return arr[n];

}

function fibonacciIterative(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let n1 = 0;
    let n2 = 1;

    let answer;

    for (let i = 2; i <= n; i++){

        answer = n1 + n2;
        n1 = n2;
        n2 = answer;
    }

    return answer;
}
console.log(fibonacciIterative(8));

function fibonacciRecursive(n) {
    //or if (n<2) return n
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(8))
console.log(fibonacciIterative2(8))