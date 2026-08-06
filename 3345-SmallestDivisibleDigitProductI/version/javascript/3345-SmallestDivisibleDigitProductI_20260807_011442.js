// Last updated: 07/08/2026, 01:14:42
1/**
2 * @param {number} n
3 * @param {number} t
4 * @return {number}
5 */
6var smallestNumber = function (n, t) {
7    while (true) {
8        let num = n;
9        let prd = 1
10        while (num) {
11            prd *= num % 10;
12            num = Math.floor(num / 10);
13        }
14        if (prd % t == 0) return n;
15        n++
16    }
17};