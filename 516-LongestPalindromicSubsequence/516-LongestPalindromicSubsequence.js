// Last updated: 24/07/2026, 23:51:19
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let rev = s.split("").reverse().join("");
    let m = s.length, n = s.length;
    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            if (s[i - 1] == rev[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[m][n]
};