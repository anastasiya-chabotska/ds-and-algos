const dfs = function (arr, row = 0, col = 0, res = [], visited = Array.from(new Array(arr.length), () => [])) {
    console.log({ row, col, visited })
    if (row >= 0 && row < arr.length && col >= 0 && col < arr[row].length && (!visited[row] || !visited[row][col])) {
        res.push(arr[row][col]);
        console.log("setting")
        visited[row][col] = true;
        console.log("setting")
        dfs(arr, row - 1, col, res, visited);
        dfs(arr, row, col + 1, res, visited);
        dfs(arr, row + 1, col, res, visited);
        dfs(arr, row, col - 1, res, visited);
        console.log(res)
    }
    return res;


}

const move = function (direction) {
    switch (direction) {
        case 'up':
            return [row - 1, col]
        case 'down':
            return [row + 1, col]
        case 'left':
            return [row, col - 1]
        case 'right':
            return [row, col + 1]
    }
}

let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

console.log(dfs(arr))