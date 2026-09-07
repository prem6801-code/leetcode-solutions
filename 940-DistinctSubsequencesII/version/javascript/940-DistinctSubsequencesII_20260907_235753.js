// Last updated: 07/09/2026, 23:57:53
1/**
2 * @param {string} s
3 * @return {number}
4 */
5
6var distinctSubseqII = function (s) {
7    const MOD = 10 ** 9 + 7;
8    const n = s.length;
9
10    let dp = new Array(n + 1).fill(0);
11    let last = new Array(26).fill(-1);
12
13    dp[0] = 1;
14
15    for (let i = 1; i <= n; i++) {
16        let charIndex =
17            s[i - 1].charCodeAt(0) - "a".charCodeAt(0);
18
19        let j = last[charIndex];
20
21        dp[i] = (2 * dp[i - 1]) % MOD;
22
23        if (j !== -1) {
24            dp[i] = (dp[i] - dp[j] + MOD) % MOD;
25        }
26
27        last[charIndex] = i - 1;
28    }
29
30    return (dp[n] - 1 + MOD) % MOD;
31};