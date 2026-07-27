// Last updated: 27/07/2026, 19:38:36
1/**
2 * @param {number[]} coins
3 * @param {number} amount
4 * @return {number}
5 */
6var coinChange = function (coins, amount) {
7    let dp = Array.from({ length: coins.length + 1 }, (_, i) =>
8        Array.from({ length: amount + 1 }, (_, j) => j == 0 ? 0 : Infinity)
9    );
10    for (let i = 1; i <= coins.length; i++) {
11        let coin = coins[i - 1];
12
13        for (let j = 1; j <= amount; j++) {
14            if (coin <= j) {
15                dp[i][j] = Math.min(
16                    dp[i - 1][j],
17                    1 + dp[i][j - coin]
18                );
19            } else {
20                dp[i][j] = dp[i - 1][j];
21            }
22        }
23    }
24    return dp[coins.length][amount] == Infinity ? -1 : dp[coins.length][amount]
25};
26
27