// Last updated: 21/11/2026, 00:19:15
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var numDecodings = function (s) {
6    let dp = new Array(s.length)
7    let findWays = (i) => {
8        if (i == s.length) {
9            return 1
10        }
11
12        if (s[i] == "0") {
13            return 0
14        }
15
16        if (dp[i] !== undefined) {
17            return dp[i]
18        }
19
20        let ways = 0
21        if (i + 2 <= s.length && Number(s[i] + s[i + 1]) < 27) {
22            ways += findWays(i + 2)
23        }
24
25        return dp[i] = ways + findWays(i + 1)
26    }
27    return findWays(0);
28};