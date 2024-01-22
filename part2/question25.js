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

    let result = -1;
    map[k] = 0;
    while (Object.keys(map).length) {
        if (k == -1) break;
        const connections = adjList[k];
        for (let i = 0; i < connections.length; i++) {
            const current = connections[i];
            if (map[current[0]])
                map[current[0]] = Math.min(map[current[0]], map[k] + current[1]);
        }
        if (map[k] != Infinity) result = Math.max(result, map[k]);
        delete map[k];
        //reset k to the min value
        k = greedy(map);
    }
    return Object.keys(map).length === 0 ? result : -1;
};

var greedy = function (map) {
    let min = Infinity;
    let minKey = -1;
    for (let [key, value] of Object.entries(map)) {
        if (value < min) {
            minKey = key;
            min = value
        }
    }
    return minKey;
}