// Last updated: 22/08/2026, 21:10:05
1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5var checkDivisibility = function (n) {
6    let sum = 0;
7    let prd = 1;
8    let temp = n;
9    while (temp) {
10        let digit = temp % 10;
11        sum += digit;
12        prd *= digit;
13        temp = Math.floor(temp / 10)
14    }
15    return n % (sum + prd) == 0
16};