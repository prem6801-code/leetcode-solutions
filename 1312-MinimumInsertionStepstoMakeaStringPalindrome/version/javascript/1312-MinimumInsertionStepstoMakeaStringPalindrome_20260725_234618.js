// Last updated: 25/07/2026, 23:46:18
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var minInsertions = function (s) {
6    let rev = s.split("").reverse().join("")
7    let dp = Array.from({ length: s.length + 1 }, () => new Array(s.length + 1).fill(0));
8    for (let i = 1; i < dp.length; i++) {
9        for (let j = 1; j < dp[i].length; j++) {
10            if (s[i - 1] == rev[j - 1]) {
11                dp[i][j] = dp[i - 1][j - 1] + 1;
12            } else {
13                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
14            }
15        }
16    }
17    return s.length - dp[s.length][s.length]
18};