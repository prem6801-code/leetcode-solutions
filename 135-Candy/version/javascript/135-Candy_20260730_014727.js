// Last updated: 30/07/2026, 01:47:27
1/**
2 * @param {number[]} ratings
3 * @return {number}
4 */
5var candy = function (ratings) {
6    let ans = new Array(ratings.length).fill(1);
7    for (let i = 0; i < ratings.length; i++) {
8
9        // console.log("previous greater->", (ratings[i - 1] && ratings[i - 1] < ratings[i]))
10        // console.log("is next greater->", (ratings[i + 1] && ratings[i + 1] < ratings[i]))
11        if (ratings[i - 1] !== undefined && ratings[i - 1] < ratings[i]) {
12            // console.log("for i =", i, "values are", ratings[i - 1], ratings[i], ratings[i + 1])
13            ans[i] = ans[i - 1] + 1
14        } else if (ratings[i + 1] !== undefined && ratings[i + 1] < ratings[i]) {
15            ans[i] = ans[i + 1] + 1
16        }
17
18        if ((ratings[i + 1] !== undefined && ratings[i + 1] < ratings[i]) && (ratings[i - 1] !== undefined && ratings[i - 1] > ratings[i])) {
19            // console.log("inside second loop")
20            let j = i
21            while (ratings[j - 1] !== undefined && ratings[j - 1] > ratings[j] && ans[j - 1] <= ans[j]) {
22                ans[j - 1] = ans[j] + 1
23                j--
24            }
25        }
26    }
27    console.log(ans)
28    let res = 0
29    for (let num of ans) {
30        res += num
31    }
32    return res
33};