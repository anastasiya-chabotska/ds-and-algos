const directions = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2]
]
var knightProbability = function (n, k, row, col) {
    if (k == 0 && row >= 0 && row < n && col >= 0 && col < n) return 1;
    if (row < 0 || row >= n || col < 0 || col >= n) return 0;
    let knightP = 0;
    for (let i = 0; i < directions.length; i++) {
        const dir = directions[i];
        knightP = knightP + knightProbability(n, k - 1, row + dir[0], col + dir[1]);
    }
    return knightP / 8;

};

/*
n = 3
[false, false, false]
[false, false, false]
[false, false, false]


*/
//optimize with dp
var knightProbability2 = function (n, k, row, col, dp = new Array(n).fill(0).map(()=>new Array(n).fill(0).map(()=>({})))) {
    if (row < 0 || row >= n || col < 0 || col >= n) return 0;
    if(k === 0) return 1;
    let res = 0;

    if(dp[row][col][k]) {
        return dp[row][col][k];
    }
    for(let i = 0; i < directions.length; i++){
        const dir = directions[i];
        res += knightProbability2(n, k - 1, row + dir[0], col + dir[1], dp)/8;
        
        
    }
    dp[row][col][k] = res;
    return res;

};