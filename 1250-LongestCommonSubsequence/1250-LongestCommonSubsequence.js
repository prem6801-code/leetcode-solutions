// Last updated: 24/07/2026, 23:49:37
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (s1, s2) {
    let dp = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1).fill(0))
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    // console.log(dp)
    return dp[s1.length][s2.length]
};