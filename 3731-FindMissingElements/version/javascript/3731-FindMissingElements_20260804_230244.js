// Last updated: 04/08/2026, 23:02:44
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var findMissingElements = function (nums) {
6    let set = new Set([...nums]);
7    let min = Math.min(...nums);
8    let max = Math.max(...nums);
9    let res = [];
10    for (min; min <= max; min++) {
11        if (!set.has(min)) res.push(min)
12    }
13    return res
14};