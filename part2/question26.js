var minCostClimbingStairs = function (cost, i = cost.length, dp = []) {
    if (i < 0) return 0;
    if (i === 0 || i === 1) return cost[i];

    let curStepCost;
    i === cost.length ? curStepCost = 0 : curStepCost = cost[i];


    if (dp[i] == undefined) {
        let res = curStepCost + Math.min(minCostClimbingStairs(cost, i - 1, dp), minCostClimbingStairs(cost, i - 2, dp));
        console.log("set dp for ", { i, res })
        dp[i] = res;
    }
    else {
        console.log("dp exists for ", { i })
    }
    return dp[i]


};

//bottom up approach
var minCostClimbingStairs2 = function (cost) {
    const dp = new Array(cost.length);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < cost.length; i++) {
        const minCost = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        dp[i] = minCost;
    }
    return Math.min(dp[cost.length - 1], dp[cost.length - 2])
}

//bottom up approach optimized for space
var minCostClimbingStairs2 = function (cost) {
    const dp = [];
   
    for (let i = 0; i < cost.length; i++) {
        if(i < 2){
            dp[i] = cost[i]
        }
        else{
            const minCost = cost[i] + Math.min(dp[0], dp[1]);
            dp[0] = dp[1];
            dp[1] = minCost;
        }
      
    }
    return Math.min(dp[0], dp[1])
}

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
console.log(arr.length);
console.log(minCostClimbingStairs(arr))