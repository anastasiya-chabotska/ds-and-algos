var minCostClimbingStairs = function (cost, i = cost.length, dp = []) {
    if (i < 0) return 0;
    if (i === 0 || i === 1) return cost[i];

    let curStepCost;
    i === cost.length ? curStepCost = 0 : curStepCost = cost[i];

    
    if(dp[i]==undefined){
    let res = curStepCost + Math.min(minCostClimbingStairs(cost, i - 1, dp), minCostClimbingStairs(cost, i - 2, dp));
    console.log("set dp for ", {i, res})
    dp[i] = res;
    }
    else{
        console.log("dp exists for ", {i})
    }
    return dp[i]
  

};

let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0]
console.log(arr.length);
console.log(minCostClimbingStairs(arr))