var orangesRotting = function (grid) {
    //find rotten indices, and count of fresh
    let { countFresh, rottenIdx } = findRottendIndeces(grid);
    //rot out
    let { minutes, freshAfterRot } = rotOut(grid, rottenIdx, countFresh);
    //check if fresh is at 0, if yes, return minutes, else -1
    return freshAfterRot > 0 ? -1 : minutes;
}

var findRottendIndeces = function (grid) {
    let countFresh = 0;
    let rottenIdx = [];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == 2) {
                rottenIdx.push([row, col])
            }
            if (grid[row][col] == 1) {
                countFresh++;
            }
        }
    }
    return { countFresh, rottenIdx }
}

var directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]

var rotOut = function (grid, rottenIdx, countFresh) {
    let minutes = 0;
    let queue = rottenIdx;
    let freshAfterRot = countFresh
    while (queue.length) {
        let tempLength = queue.length;
        while (tempLength > 0) {
            let curPos = queue.shift();
            for (let i = 0; i < directions.length; i++) {
                let newRow = curPos[0] + directions[i][0];
                let newCol = curPos[1] + directions[i][1];
                if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length && grid[newRow][newCol] == 1) {
                    freshAfterRot--;
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                }
            }
            tempLength--;
        }
        minutes++;
    }
    if (minutes > 0) minutes--;
    return { minutes, freshAfterRot }
}