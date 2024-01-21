var networkDelayTime = function (times, n, k) {
    const adjList = new Array(n + 1).fill(0).map(() => []);
    for (let i = 0; i < times.length; i++) {
        const time = times[i];
        adjList[time[0]].push([time[1], time[2]]);
    }
    const map = {};
    for (let i = 1; i <= n; i++) {
        map[i] = Infinity;
    }

    const connections = adjList[k];
    for (let i = 0; i < connections.length; i++) {
        const current = connections[i];
        map[current[0]] = Math.min(map[current[0]], map[current[1]]);

    }

};