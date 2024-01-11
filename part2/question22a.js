
const wallsAndGates = function (rooms) {
    for(let row = 0; row < rooms.length; row++){
        for(let col = 0; col < rooms[0].length; col++){
            if(rooms[row][col]==0){
                dfs(rooms, row, col);
            }
        }
    }

    return rooms;
}

const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]
const dfs = function(rooms, row, col, length=1){
    for(let i = 0; i < directions.length; i++){
        let nextRow = row + directions[i][0];
        let nextCol = col + directions[i][1];
        if(nextRow < 0 || nextRow >= rooms.length || nextCol < 0 || nextCol >= rooms[0].length || rooms[nextRow][nextCol]==-1 || rooms[nextRow][nextCol]==0) continue
       
        if(length < rooms[nextRow][nextCol]) {
            rooms[nextRow][nextCol] = length;
            dfs(rooms, nextRow, nextCol, length + 1)
        }
        
    }
}

let grid = [[2147483647, -1, 0, 2147483647],
[2147483647, 2147483647, 2147483647, -1],
[2147483647, -1, 2147483647, -1],
[0, -1, 2147483647, 2147483647]]

console.log("result ", wallsAndGates(grid));