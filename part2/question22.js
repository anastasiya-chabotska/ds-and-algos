
const wallsAndGates = function (rooms) {
    // write your code here
    const gates = [];
    //identify the gates
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] == 0) {
                gates.push([row, col])
            }
        }
    }
    console.log(gates)
    for (let i = 0; i < gates.length; i++) {
        traverse(rooms, gates[i][0], gates[i][1])
    }
    return rooms;

}

const traverse = function (rooms, row, col, length = 1) {
    console.log({row, col})
    if (row < 0 || row >= rooms.length || col < 0 || col > rooms[0].length || rooms[row][col] == -1 || (length > 1 && rooms[row][col] == 0)) return
    rooms[row][col] = Math.min(rooms[row][col], length);

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ]
    for (let i = 0; i < directions.length; i++) {
        let nextRow = row + directions[i][0];
        let nextCol = col + directions[i][1];
        console.log({ nextRow, nextCol })
        traverse(rooms, nextRow, nextCol, length + 1);

    }
}



let grid = [[2147483647, -1, 0, 2147483647],
[2147483647, 2147483647, 2147483647, -1],
[2147483647, -1, 2147483647, -1],
[0, -1, 2147483647, 2147483647]]


console.log(wallsAndGates(grid));