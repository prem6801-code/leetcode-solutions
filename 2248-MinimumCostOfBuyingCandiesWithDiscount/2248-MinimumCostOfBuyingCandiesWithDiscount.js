// Last updated: 24/07/2026, 23:48:23
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost = cost.sort((a, b) => b - a);
    let j = 0; minCost = 0;
    // console.log(cost)
    while (j < cost.length) {
        if (!((j + 1) % 3 == 0)) {
            minCost += cost[j]
        }
        j++
    }

    return minCost
};