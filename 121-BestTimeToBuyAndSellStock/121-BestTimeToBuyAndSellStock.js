// Last updated: 24/07/2026, 23:53:28
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let buy = prices[0];

    for(let i=0;i<prices.length;i++){
        profit = Math.max(prices[i] - buy, profit)
        if(buy  > prices[i]) buy = prices[i]
    }

    return profit
};