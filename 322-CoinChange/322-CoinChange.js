// Last updated: 24/07/2026, 23:51:49
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = Array.from({ length: coins.length + 1 }, () => new Array(amount + 1))
    let helper = (n, amt) => {
        if (amt == 0) {
            return 0;
        }
        if (n == 0) {
            return Infinity
        }

        if (dp[n][amt] !== undefined) {
            return dp[n][amt]
        }
        let min = Infinity
        if (coins[n - 1] <= amt) {
            min = 1 + Math.min(min, helper(n, amt - coins[n - 1]))
        }
        min = Math.min(min, helper(n - 1, amt));
        return dp[n][amt] = min;
    }
    let ans = helper(coins.length, amount)
    return ans == Infinity ? -1 : ans;
};

