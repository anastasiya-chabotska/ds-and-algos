/**
 * @param {number[]} prices
 * @return {number}
 */

//Time: O(n) Space: O(1)
var maxProfit = function(prices) {

    //if length less than 2 return 0
    if(prices.length < 2) return 0

    //init i and j = i + 1
    let i = 0;
    let j = i + 1;
    let max = prices[j] - prices[i];
    

    //loop over the array until the end

    while(j < prices.length){

        console.log(i, j);
        //check if item at j is less than our current i, which means we are guaranteed to get better results with i = j+1, since they share the future values

        while (prices[j] < prices[i]){
            i = j;
            j++;
        }

        console.log(i, j)
        //keep recalcualting min, and reset min if its less
        let newMax = prices[j] - prices[i]
        console.log("new max ", newMax)
        if (newMax > max) max = newMax;
        console.log("max: ", max)
        j++
    }

    if(max > 0) return max
    else return 0;


    
};

var maxProfit2 = function(prices) {


    let [i, j, max] = [0, 1, 0];

    while(j < prices.length){
        //if profitable
        if(prices[j] > prices[i]){
            let profit = prices[j] - prices[i];
            max = Math.max(profit, max)
        }
        else {
            i = j;
        }
        j++
    }

    return max;

    
};

/*
Brute Force 

for each item in the array, check all the combinations
2 nested loops - O(n^2)
*/


let prices = [7,1,5,3,6,4];

console.log(maxProfit2(prices));