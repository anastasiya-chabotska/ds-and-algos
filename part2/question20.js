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