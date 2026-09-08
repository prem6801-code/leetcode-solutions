// Last updated: 08/09/2026, 23:11:10
1/**
2 * @param {number} n
3 * @return {number}
4 */
5var countCommas = function (n) {
6    if (n < 1000) return 0
7    let base = 1000 * 1000;
8    let comma = 1
9    let count = 0;
10    for (let i = 1000; i <= n; i++) {
11        if (i >= base) {
12            base *= 1000
13            comma++
14        }
15        count += comma
16    }
17    return count
18};