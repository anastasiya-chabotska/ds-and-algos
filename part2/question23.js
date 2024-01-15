var numOfMinutes = function (n, headID, manager, informTime) {
    const adjacencyList = {};
    for (let i = 0; i < manager.length; i++) {
        let managerId = manager[i];
        if (managerId == -1) continue;
        if (!adjacencyList[managerId]) adjacencyList[managerId] = [i];
        else adjacencyList[managerId].push(i);
    }
    console.log(adjacencyList)
    //start with the head, dfs each branch and count the length
    let totalTime = dfs(headID, adjacencyList, informTime)
    return totalTime;
};

var dfs = function (id, list, informTime, time = 0, maxTime = 0) {
    let connections = list[id];
    if (!connections) return time;
    for (let i = 0; i < connections.length; i++) {
        maxTime = Math.max(dfs(connections[i], list, informTime, time + informTime[id], maxTime), maxTime);
    }
    return maxTime;
}