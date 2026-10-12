// Last updated: 13/10/2026, 00:57:04
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var subArrayRanges = function (arr) {
6    let sum = 0;
7    for (let i = 0; i < arr.length; i++) {
8        let min = Infinity
9        let max = -Infinity
10        for (let j = i; j < arr.length; j++) {
11            min = Math.min(min, arr[j])
12            max = Math.max(max, arr[j])
13            sum += (max - min)
14        }
15    }
16    return sum
17};