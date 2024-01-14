const dfs = function (graph, vertex, res = [], seen = {}) {
    res.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
        if (!seen[connections[i]]) dfs(graph, connections[i], res, seen);
    }
    return res;

}

const dfs2 = function (graph, vertex, res = [], seen = {}) {
    res.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
        if (!seen[i] && connections[i] == 1) dfs2(graph, i, res, seen)
    }
    return res;
}

const adjacencyMatrix = [
    [0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0]
]

const adjacencyList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2]
]



console.log(dfs(adjacencyList, 0))
console.log(dfs2(adjacencyMatrix, 0))