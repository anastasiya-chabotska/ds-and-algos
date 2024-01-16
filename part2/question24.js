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