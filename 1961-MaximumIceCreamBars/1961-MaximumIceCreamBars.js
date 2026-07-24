// Last updated: 24/07/2026, 23:48:47
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    let maxBars = 0
    costs.sort((a, b) => a - b);
    for (let cost of costs) {
        if (coins - cost >= 0) {
            maxBars++
            coins -= cost
        } else {
            break;
        }
    }
    return maxBars;
};