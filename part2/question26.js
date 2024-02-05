var minCostClimbingStairs = function (cost, i = cost.length) {
    if (i < 0) return 0;
    if (i === 0 || i === 1) return cost[i];

    let curStepCost;
    i === cost.length ? curStepCost = 0 : curStepCost = cost[i];

    return curStepCost + Math.min(minCostClimbingStairs(cost, i - 1), minCostClimbingStairs(cost, i - 2));

};