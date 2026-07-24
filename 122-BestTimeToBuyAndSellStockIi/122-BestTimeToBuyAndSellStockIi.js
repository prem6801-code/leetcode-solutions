// Last updated: 24/07/2026, 23:53:25
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            maxProfit += prices[i]-prices[i-1]
        }
    }
    return maxProfit
};