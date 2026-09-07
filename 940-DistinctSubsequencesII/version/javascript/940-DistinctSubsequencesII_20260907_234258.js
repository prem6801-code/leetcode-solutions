// Last updated: 07/09/2026, 23:42:58
1/**
2 * @param {string} s
3 * @return {number}
4 */
5
6var distinctSubseqII = function (s) {
7    const MOD = 10 ** 9 + 7;
8    const n = s.length;
9
10    let dp = new Array(n + 1).fill(-1);
11    let last = new Array(26).fill(-1);
12
13    let prev = new Array(n).fill(-1);
14
15    for (let i = 0; i < n; i++) {
16        let charIndex = s.charCodeAt(i) - 97;
17
18        prev[i] = last[charIndex];
19        last[charIndex] = i;
20    }
21
22    let findSubsequence = (i) => {
23        if (i === 0) {
24            return 1;
25        }
26
27        if (dp[i] !== -1) {
28            return dp[i];
29        }
30
31        dp[i] = (2 * findSubsequence(i - 1)) % MOD;
32
33        let previousIndex = prev[i - 1];
34
35        if (previousIndex !== -1) {
36            dp[i] = (
37                dp[i] - findSubsequence(previousIndex) + MOD
38            ) % MOD;
39        }
40
41        return dp[i];
42    };
43
44    return (findSubsequence(n) - 1 + MOD) % MOD;
45};