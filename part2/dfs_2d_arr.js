const my_dfs = function (arr, row = 0, col = 0, res = [], visited = Array.from(new Array(arr.length), () => [])) {
    console.log({ row, col, visited })
    if (row >= 0 && row < arr.length && col >= 0 && col < arr[row].length && (!visited[row] || !visited[row][col])) {
        res.push(arr[row][col]);
        console.log("setting")
        visited[row][col] = true;
        console.log("setting")
        my_dfs(arr, row - 1, col, res, visited);
        my_dfs(arr, row, col + 1, res, visited);
        my_dfs(arr, row + 1, col, res, visited);
        my_dfs(arr, row, col - 1, res, visited);
        console.log(res)
    }
    return res;


}


let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

const directions = [
    [-1, 0],//up
    [0, 1],//right
    [1, 0],//down
    [0, -1]//left
]

const traversalDFS = function (matrix) {
    const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
    const values = [];
    dfs(matrix, 0, 0, seen, values);
    return values;
}

const dfs = function (matrix, row, col, seen, values) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) return;
    seen[row][col] = true;
    values.push(matrix[row][col]);
    // dfs(matrix, row + directions[0][0], col + directions[0][1], seen, values)
    // dfs(matrix, row + directions[1][0], col + directions[1][1], seen, values)
    // dfs(matrix, row + directions[2][0], col + directions[2][1], seen, values)
    // dfs(matrix, row + directions[3][0], col + directions[3][1], seen, values)
    // return;
    for (let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values)
    }



}

console.log(traversalDFS(arr))