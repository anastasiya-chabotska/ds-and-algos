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