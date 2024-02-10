const bfs = function (graph) {
    const queue = [0];
    const result = [];
    const seen = {};
    while (queue.length) {
        const vertex = queue.shift();
        result.push(vertex);
        seen[vertex] = true;
        const edges = graph[vertex];
        for (let i = 0; i < edges.length; i++) {
            if (!seen[edges[i]])
                queue.push(edges[i]);
        }

    }
    return result;

}

const bfs2 = function (graph) {
    const queue = [0];
    const result = [];
    const seen = {};
    while (queue.length) {
        const vertex = queue.shift();
        result.push(vertex);
        seen[vertex] = true;
        const connections = graph[vertex];
        console.log({ vertex })
        for (let i = 0; i < connections.length; i++) {
            const connection = connections[i];
            if (connection == 1) console.log({ i })
            if (connection == 1 && !seen[i]) queue.push(i)
        }

    }
    return result;

}

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

console.log(bfs(adjacencyList))
console.log(bfs2(adjacencyMatrix))