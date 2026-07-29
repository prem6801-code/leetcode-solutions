// Last updated: 30/07/2026, 02:00:25
1/**
2 * @param {number[]} ratings
3 * @return {number}
4 */
5var candy = function (ratings) {
6    let ans = new Array(ratings.length).fill(1);
7    for (let i = 0; i < ratings.length; i++) {
8        if (ratings[i - 1] !== undefined && ratings[i - 1] < ratings[i]) {
9            ans[i] = ans[i - 1] + 1
10        } else if (ratings[i + 1] !== undefined && ratings[i + 1] < ratings[i]) {
11            ans[i] = ans[i + 1] + 1
12        }
13    }
14
15    for (let i = ratings.length - 1; i >= 0; i--) {
16        if ((ratings[i - 1] !== undefined && ratings[i - 1] > ratings[i]) && (ratings[i + 1] !== undefined && ratings[i + 1] < ratings[i]) && ans[i - 1] <= ans[i]) {
17            ans[i - 1] = ans[i] + 1
18        }
19    }
20    let res = 0
21    for (let num of ans) {
22        res += num
23    }
24    return res
25};