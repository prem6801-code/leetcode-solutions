// Last updated: 20/09/2026, 15:11:44
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var reverseDegree = function (s) {
6    let sum = 0;
7    for (let i = 0; i < s.length; i++) {
8        sum += ("z".charCodeAt(0) + 1 - s[i].charCodeAt(0)) * (i + 1)
9    }
10    return sum
11};