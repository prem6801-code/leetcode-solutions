// Last updated: 25/07/2026, 17:21:53
1/**
2 * @param {number} n
3 * @return {number}
4 */
5var maxProduct = function (n) {
6    if (n == 10) return 0
7    let res = []
8    let num = n;
9    while (num > 0) {
10        let digit = num % 10
11        res.push(digit);
12        num = Math.floor(num / 10)
13    }
14    res.sort();
15    return res[res.length - 1] * res[res.length - 2]
16};