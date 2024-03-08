//Time: O(n) Space: O(1)
var maxProfit = function(prices){
    let result = 0, left = 0, right = 1;

    while(right < prices.length){
        result = Math.max(result, prices[right] - prices[left]);
        if(prices[right] < prices[left]) left = right;
        right++;
    }

    return result;
}
