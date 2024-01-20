//my solution topological sort
var canFinish = function (numCourses, prerequisites) {
    const adjacencyList = new Array(numCourses).fill(0).map(() => []);
    const inDegree = {};
    for (let i = 0; i < numCourses; i++) {
        inDegree[i] = 0;
    }

    for (let p = 0; p < prerequisites.length; p++) {
        const pair = prerequisites[p];
        const course = pair[0];
        const prereq = pair[1];
        adjacencyList[prereq].push(course);
        inDegree[course]++;
    }
    console.log(inDegree);
    console.log(Object.keys(inDegree).length)
    // console.log(Object.values(inDegree).indexOf(0));
    while (Object.keys(inDegree).length > 0) {
        console.log(Object.values(inDegree).indexOf(0))
        if (Object.values(inDegree).indexOf(0) >= 0) topologicalSort(inDegree, adjacencyList)
        else return false;
    }
    console.log(inDegree)
    return true;


};

var topologicalSort = function (inDegree, adjList) {
    for (const [key, value] of Object.entries(inDegree)) {
        if (value === 0) {
            console.log({ key })
            const connections = adjList[key];
            for (let i = 0; i < connections.length; i++) {
                inDegree[connections[i]]--;
            }
            delete inDegree[key]
        }
    }
}

//-----------------------------------------------------------------------


var canFinish = function (numCourses, prerequisites) {
    const adjacencyList = new Array(numCourses).fill(0).map(() => []);
    for (let p = 0; p < prerequisites.length; p++) {
        const preReq = prerequisites[p][1];
        const course = prerequisites[p][0];
        adjacencyList[preReq].push(course);
    }
    for (let c = 0; c < adjacencyList.length; c++) {
        if (hasCycle(adjacencyList, c) == true) {
            return false;
        }
    }
    return true;

};

var hasCycle = function (adjacencyList, course, seen = {}) {
    if (seen[course]) {
        return true;
    }
    seen[course] = true;
    const connections = adjacencyList[course];
    let isCycle = false;
    for (let i = 0; i < connections.length; i++) {
        isCycle = isCycle || hasCycle(adjacencyList, connections[i], seen)
    }
    seen[course] = false;
    return isCycle;
}


var canFinishBFS = function (numCourses, prerequisites) {
    const adjacencyList = new Array(numCourses).fill(0).map(() => []);
    for (let p = 0; p < prerequisites.length; p++) {
        const pair = prerequisites[p];
        adjacencyList[pair[1]].push(pair[0])
    };

    for (let v = 0; v < numCourses; v++) {
        const queue = [];
        const seen = {};
        const connections = adjacencyList[v];
        for (let i = 0; i < connections.length; i++) {
            queue.push(connections[i]);
        }
        while (queue.length) {
            let vertex = queue.shift();
            seen[vertex] = true;
            const next = adjacencyList[vertex];
            for (let i = 0; i < next.length; i++) {
                if (next[i] === v) return false;
                queue.push(next[i])
            }
        }
    }
    return true;

};
