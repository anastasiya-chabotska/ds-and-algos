var numIslands = function (grid) {
    const seen = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));
    let numIslands = 0;
    //traverse sequentially
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1" && !seen[i][j]) {
                numIslands++;
                traverseIsland(grid, i, j, seen);
            }
        }
    }
    return numIslands;

};

var traverseIsland = function (grid, row, col, seen) {
    if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length && !seen[row][col] && grid[row][col] == "1") {
        seen[row][col] = true;
        traverseIsland(grid, row - 1, col, seen);
        traverseIsland(grid, row, col + 1, seen);
        traverseIsland(grid, row + 1, col, seen);
        traverseIsland(grid, row, col - 1, seen);
    }
}

//solution without using seen, as we can just replace 1's with 0's
var numIslands = function (grid) {
    let numIslands = 0;
    //traverse sequentially
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == "1") {
                numIslands++;
                traverseIsland(grid, i, j);
            }
        }
    }
    return numIslands;

};

var traverseIsland = function (grid, row, col) {
    if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length && grid[row][col] == "1") {
        grid[row][col] = "0";
        traverseIsland(grid, row - 1, col);
        traverseIsland(grid, row, col + 1);
        traverseIsland(grid, row + 1, col);
        traverseIsland(grid, row, col - 1);
    }
}



//BFS solution
const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]
var numberOfIslandsBFS = function (matrix) {
    if (matrix.length === 0) return 0;
    let numIslands = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === '1') {
                numIslands++;
                matrix[row][col] = '0'
                const queue = [[row, col]];
                while (queue.length) {
                    // console.log(queue.length)
                    let currentPos = queue.shift();
                    let currentRow = currentPos[0];
                    let currentCol = currentPos[1];

                    for (let i = 0; i < directions.length; i++) {
                        let nextRow = currentRow + directions[i][0];
                        let nextCol = currentCol + directions[i][1];
                        if (nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
                            continue
                        }
                        if (matrix[nextRow][nextCol] === '1'){
                            queue.push([nextRow, nextCol])
                            matrix[nextRow][nextCol] = '0'
                        }
                    }
                }
            }
        }
    }
    return numIslands;
}