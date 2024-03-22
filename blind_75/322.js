var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        for (let coin of coins) {
            let amount = i - coin;
            if (amount < 0) continue;
            else {
                dp[i] = Math.min(1 + dp[amount], dp[i]);
            }
        }
    }

    return dp[amount] != Infinity ? dp[amount] : -1;
}
