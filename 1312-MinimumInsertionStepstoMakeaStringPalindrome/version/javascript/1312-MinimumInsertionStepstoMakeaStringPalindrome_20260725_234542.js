// Last updated: 25/07/2026, 23:45:42
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var minInsertions = function (s) {
6    let rev = s.split("").reverse().join("")
7    let dp = Array.from({ length: s.length + 1 }, () => new Array(s.length + 1).fill(0));
8    console.log(rev)
9    for (let i = 1; i < dp.length; i++) {
10        for (let j = 1; j < dp[i].length; j++) {
11            if (s[i - 1] == rev[j - 1]) {
12                dp[i][j] = dp[i - 1][j - 1] + 1;
13            } else {
14                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
15            }
16        }
17    }
18    // console.log(dp)
19    return s.length - dp[s.length][s.length]
20};