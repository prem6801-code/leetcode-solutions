// Last updated: 24/07/2026, 23:48:51
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let prefixSum = 0
    let max = 0
    for (let i = 0; i < gain.length; i++) {
        prefixSum += gain[i]
        max = Math.max(prefixSum, max)
    }
    return max
};