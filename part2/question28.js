var solveSudoku = function (board) {

    const rows = new Array(9).fill(0).map(() => new Object());
    const cols = new Array(9).fill(0).map(() => new Object());
    const subs = new Array(9).fill(0).map(() => new Object());

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const curValue = board[row][col];
            if (curValue != '.') {
                rows[row][curValue] = true;
                cols[col][curValue] = true;
                subs[getBoxId(row, col)][curValue] = true;

            }
        }
    }



    recurse(board, rows, cols, subs, 0, 0)
    console.log(board)


};

var recurse = function (board, rows, cols, subs, r, c) {
    for (let row = r; row < 9; row++) {
        for (let col = c; col < 9; col++) {
            const curCell = board[row][col];
            if (curCell == '.') {
                for (let i = 1; i <= 9; i++) {
                    //check if it's valid
                    if (isValid(row, col, i, rows, cols, subs)) {
                        //add to the board
                        board[row][col] = `${i}`;
                        rows[row][i] = true;
                        cols[col][i] = true;
                        subs[getBoxId(row, col)][i] = true;
                        let res;
                        if (col === 8) {
                            res = recurse(board, rows, cols, subs, row + 1, 0);

                        }
                        else {
                            res = recurse(board, rows, cols, subs, row, col + 1);

                        }
                        if (res == true) return true;
                        else {
                            board[row][col] = '.';
                            delete rows[row][i];
                            delete cols[col][i];
                            delete subs[getBoxId(row, col)][i];
                        }
                    }

                }

                return;

            }
        }
        c = 0;

    }
    return true;
}

var isValid = function (row, col, val, rows, cols, subs) {
    return !(rows[row][val] || cols[col][val] || subs[getBoxId(row, col)][val])
}

var getBoxId = function (row, col) {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3)
}

/*
init 3 ds and fill them out
rows = [{5: true, 3: true, 7: true}, {}, {}, {}]
cols = [{5: true, 6: true, etc}]
subs = [{5, 3, 6, 9, 8}]


recurse(row, col, rows, cols, subs, board)
Iterate over the board

if we see a . (empty cell)
    for 1 - 9, try all numbers
    check if satisfies all 3 conditions
        if yes, make a recursive call on board with this new number inserted


isValid(row, col, rows, cols, subs, val){
    curRow = rows[row]
    curCol = cols[col]
    subs = 3*row/3 + col/3
   
 return !(rows[curRow][val] || cols[curCol][val] || subs[curSub][val])
}

 0 1 2 | 3 4 5 | 6 7 8
0 
1   0      1       2
2
-
3
4   3      4       5
5
-
6
7
8

*/


const board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

solveSudoku(board)