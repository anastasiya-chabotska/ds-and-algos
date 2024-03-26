var hammingWeight = function (n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        if ((n & Math.pow(2, i)) > 0) res++;
    }
    return res;
};