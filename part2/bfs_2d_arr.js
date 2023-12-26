const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
]

const traversalBFS = function(matrix){
    const seen = new Array(matrix.length).fill(0).map(()=>new Array(matrix[0].length).fill(false));
    const result = [];
    const queue = [[2,2]];
    while(queue.length > 0){
        const curPos = queue.shift();
        console.log(curPos, queue)
        const row = curPos[0];
        const col = curPos[1];
        if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]){

        }
        else{
        const curVal = matrix[curPos[0]][curPos[1]];
        result.push(curVal);
        seen[curPos[0]][curPos[1]] = true;
        }
        for(let i = 0; i < directions.length; i++){
            const curDir = directions[i];
            const row = curPos[0] + curDir[0];
            const col = curPos[1] + curDir[1];
            if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) continue;
            else {
                queue.push([row, col]);
                result.push(matrix[row][col]);
                seen[row][col] = true;
            }
            
        }
    }
    return result;
}



let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

console.log(traversalBFS(arr));
