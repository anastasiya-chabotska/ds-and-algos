const bfs = function(graph){
    const queue = [0];
    const result = [];
    while(queue.length){
        let edgesIdx = queue.shift();
        let edges = graph[edgesIdx];
        if(!edges) continue
        result.push(edgesIdx);
        graph[edgesIdx] = false;
        console.log({edgesIdx, edges});
        for (let i = 0; i < edges.length; i++){
            queue.push(edges[i]);
        }

    }
    return result;
  
}

const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 4, 5, 2],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
]

console.log(bfs(adjacencyList))