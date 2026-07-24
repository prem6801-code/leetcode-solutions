// Last updated: 24/07/2026, 23:50:32
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost, i = -1, memo = {}) {
    if (i >= cost.length) {
        return 0;
    }
    if (i in memo) {
        return memo[i]
    }
    return memo[i] = (cost[i] ? cost[i] : 0) + Math.min(minCostClimbingStairs(cost, i + 1, memo), minCostClimbingStairs(cost, i + 2, memo))
};