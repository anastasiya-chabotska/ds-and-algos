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
