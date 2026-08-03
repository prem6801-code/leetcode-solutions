// Last updated: 03/08/2026, 23:30:25
1/**
2 * @param {string} word1
3 * @param {string} word2
4 * @return {number}
5 */
6var minDistance = function (word1, word2) {
7    let dp = Array.from({ length: word1.length + 1 }, (_, i) =>
8        Array.from({ length: word2.length + 1 }, (_, j) => {
9            if (i === 0) return j;
10            if (j === 0) return i;
11            return 0;
12        })
13    );
14    for (let i = 1; i < dp.length; i++) {
15        for (let j = 1; j < dp[i].length; j++) {
16            if (word1[i - 1] == word2[j - 1]) {
17                dp[i][j] = dp[i - 1][j - 1]
18            } else {
19                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
20            }
21        }
22    }
23    // console.log(dp)
24    return dp[word1.length][word2.length]
25};