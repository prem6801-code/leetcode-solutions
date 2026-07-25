// Last updated: 25/07/2026, 12:35:54
1/**
2 * @param {string} str1
3 * @param {string} str2
4 * @return {string}
5 */
6var shortestCommonSupersequence = function (str1, str2) {
7    let m = str1.length, n = str2.length;
8    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
9    for (let i = 1; i < m + 1; i++) {
10        for (let j = 1; j < n + 1; j++) {
11            if (str1[i - 1] == str2[j - 1]) {
12                dp[i][j] = dp[i - 1][j - 1] + 1;
13            } else {
14                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
15            }
16        }
17    }
18
19    let res = [];
20    while (m > 0 && n > 0) {
21        if (str1[m - 1] == str2[n - 1]) {
22            res.push(str1[m - 1]);
23            m--; n--;
24        } else {
25            if (dp[m - 1][n] > dp[m][n - 1]) {
26                res.push(str1[m - 1])
27                m--
28            } else {
29                res.push(str2[n - 1])
30                n--
31            }
32        }
33    }
34    // console.log(dp)
35    // console.log(res, m, n)
36    while (m > 0) {
37        m--;
38        res.push(str1[m])
39    }
40
41    while (n > 0) {
42        n--;
43        res.push(str2[n])
44    }
45
46    return res.reverse().join("");
47};