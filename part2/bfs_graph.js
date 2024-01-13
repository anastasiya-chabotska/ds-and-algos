const bfs = function(graph){
    const queue = [0];
    const result = [];
    const seen = {};
    while(queue.length){
        const vertex = queue.shift();
        result.push(vertex);
        seen[vertex] = true;
        const edges = graph[vertex];
        for (let i = 0; i < edges.length; i++){
            if(!seen[edges[i]])
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