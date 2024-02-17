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
var knightProbability2 = function (n, k, row, col, dp = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => ({})))) {
    if (row < 0 || row >= n || col < 0 || col >= n) return 0;
    if (k === 0) return 1;
    let res = 0;

    if (dp[row][col][k]) {
        return dp[row][col][k];
    }
    for (let i = 0; i < directions.length; i++) {
        const dir = directions[i];
        res += knightProbability2(n, k - 1, row + dir[0], col + dir[1], dp) / 8;


    }
    dp[row][col][k] = res;
    return res;

};

//bottom up
var knightProbability3 = function (n, k, r, c) {
    const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)))
    console.log(dp)
    dp[0][r][c] = 1;

    for (let i = 1; i <= k; i++) {
        const level = dp[i];
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                const probability = getProbability(n, i, row, col, dp);
                level[row][col] = probability;
            }
        }
    }
    console.log(dp)

};

var getProbability = function (n, k, r, c, dp) {
    const prevLevel = dp[k - 1];
    let res = 0;
    console.log({ k, prevLevel })
    for (let i = 0; i < directions.length; i++) {
        const dir = directions[i];
        const newRow = r + dir[0];
        const newCol = c + dir[1];
        console.log({ newRow, newCol })
        if (newRow < 0 || newCol < 0 || newRow >= n || newCol >= n) continue;
        else res += prevLevel[newRow][newCol];
    }
    console.log(res / 8)
    return res / 8;
}

//bottom up optimized
var knightProbability = function(n, k, row, col){
    let prevDp = new Array(n).fill(0).map(()=>new Array(n).fill(0));
    let currDp = new Array(n).fill(0).map(()=>new Array(n).fill(0));

    prevDp[row][col]= 1;
    for(let step = 1; step <=k; step++){
        for(let row = 0; row < n; row++){
            for(let col = 0; col < n; col++){
                for(let i = 0; i < directions.length; i++){
                    const dir = directions[i];
                    const prevRow = row + dir[0];
                    const prevCol = col + dir[1];
                    if(prevRow >=0 && prevRow < n && prevCol >= 0 && prevCol < n){
                        currDp[row][col] += prevDp[prevRow][prevCol]/8;
                    }
                }
            }
        }
        prevDp = currDp;
        currDp = new Array(n).fill(0).map(()=>new Array(n).fill(0));
    }

    let res = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            res+=prevDp[i][j];
        }
    }
    return res;
}

knightProbability3(3, 2, 0, 0);