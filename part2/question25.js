const PriorityQueue = require("./priority_queue");

var networkDelayTime1 = function (times, n, k) {
    const distances = new Array(n).fill(Infinity);
    const adjList = distances.map(() => []);

    for (let i = 0; i < times.length; i++) {
        const source = times[i][0];
        const target = times[i][1];
        const weight = times[i][2];
        adjList[source - 1].push([target - 1, weight]);
    }

    distances[k - 1] = 0;
    let heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
    heap.push(k - 1);
    while (!heap.isEmpty()) {
        const curNode = heap.pop();
        const connections = adjList[curNode];
        for (let i = 0; i < connections.length; i++) {
            const target = connections[i][0];
            const weight = connections[i][1];
            if (distances[target] > distances[curNode] + weight) {
                distances[target] = distances[curNode] + weight;
                heap.push(target);
            }
        }
    }
    console.log(distances)
    return Math.max(...distances) === Infinity ? -1 : Math.max(...distances)


}



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
let times = [[1, 2, 1], [2, 1, 3]], n = 2, k = 2
console.log(networkDelayTime1(times, n, k));