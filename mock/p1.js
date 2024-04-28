/*

Given pairs of costs, 
pick whether to incur the first cost or the second cost 
such that equal numbers of first and second are selected while minimizing the cost.

final cost



[10, 5], [2, 3], [11, 22], [1, 2]


[[10,20],[30,200],[400,50],[30,20]]
    1       2        3        4


1A, 2A, 3B, 4B
1B, 2B, 3A, 4A
1A, 2B, 3A, 4B
1B, 2A, 3B, 4A


4N = N




res = 110
*/


var twoCitySchedCost = function (costs) {
    const diffs = [];
    for (let i = 0; i < costs.length; i++) {
        let diff = costs[i][1] - costs[i][0];
        diffs.push([diff, costs[i][0], costs[i][1]])
    }

    diffs.sort((a, b) => a[0] - b[0]);

    let result = 0;
    for (let i = 0; i < diffs.length; i++) {
        if (i < diffs.length / 2) {
            result += diffs[i][2];
        }
        else result += diffs[i][1];
    }
    return result;

};