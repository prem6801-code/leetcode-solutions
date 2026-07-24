// Last updated: 24/07/2026, 23:49:21
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
    let dp = [0, -Infinity, -Infinity]

    for (let x of nums) {
        let next = [...dp];
        for (let r = 0; r < 3; r++) {
            let nr = (r + x) % 3;
            next[nr] = Math.max(next[nr], dp[r] + x);
        }
        dp = next;
    }

    return dp[0]
};