// Last updated: 12/08/2026, 00:25:30
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var missingInteger = function (nums) {
6    let set = new Set([...nums]);
7    let maxSum = 0;
8    let j = 0;
9    while (j < nums.length) {
10        maxSum = maxSum + nums[j]
11        if (nums[j] + 1 !== nums[j + 1]) break;
12        j++
13    }
14    while (true) {
15        if (!set.has(maxSum)) {
16            return maxSum;
17        }
18        maxSum++;
19    }
20};