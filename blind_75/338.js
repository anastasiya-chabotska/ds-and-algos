var countBits = function (n) {
    let res = [];
    res[0] = 0;
    let offset = 1;
    for (let i = 1; i <= n; i++) {
        if (i >= offset * 2) offset *= 2;
        res[i] = 1 + res[i - offset];
    }
    return res;
}

//my solution, not very optimal
var countBits = function (n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr[i] = getNumOneBits(i);
    }
    return arr;
}

var getNumOneBits = function (n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        let num = Math.pow(2, i);
        if ((num & n) > 0) res++;
    }
    return res;
}