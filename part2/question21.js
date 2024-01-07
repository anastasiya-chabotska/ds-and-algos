//my first attempts, incorrect

var orangesRotting = function (grid) {
    let maxTime = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == 2) {
                //traverse the adjacent oranges and calculate the time
                let time = traverseAndRot(grid, row, col);
                maxTime = Math.max(time, maxTime);
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] == 1) {
                return -1;
            }
        }
    }
    return maxTime;
};

const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]

var traverseAndRot = function (grid, row, col) {
    let queue = [[row, col]];
    let time = -1;
    while (queue.length) {
        let curLength = queue.length;
        while (curLength > 0) {
            let curCellPos = queue.shift();
            let curRow = curCellPos[0];
            let curCol = curCellPos[1];
            grid[curRow][curCol] = 2;
            for (let i = 0; i < directions.length; i++) {
                let newRow = curRow + directions[i][0];
                let newCol = curCol + directions[i][1];
                if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length && grid[newRow][newCol] == 1) {
                    queue.push([newRow, newCol])
                }
            }
            curLength--;
        }
        time++;
        console.log("time ", time, queue)


    }
    return time;
}


let grid = [[0,2]];
console.log(orangesRotting(grid));





