// Last updated: 21/10/2026, 23:48:30
1/**
2 * @param {number} n
3 * @param {number} k
4 * @return {number[][]}
5 */
6var combine = function (n, k) {
7    let res = [];
8    let result = []
9    let set = new Set();
10    let combinations = (i) => {
11        if (res.length >= k) {
12            result.push([...res])
13            return;
14        }
15
16        for (let k = i; k <= n; k++) {
17            res.push(k);
18            combinations(k + 1)
19            res.pop()
20        }
21    }
22    combinations(1)
23    return result
24};