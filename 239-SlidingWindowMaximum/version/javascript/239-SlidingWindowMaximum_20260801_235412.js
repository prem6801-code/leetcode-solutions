// Last updated: 01/08/2026, 23:54:12
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {number[]}
5 */
6
7var maxSlidingWindow = function (nums, k) {
8    let res = [];
9    let queue = [];
10    let j = 0;
11    for (j = 0; j < k; j++) {
12        while (queue.length && nums[queue[queue.length - 1]] <= nums[j]) {
13            queue.pop()
14        }
15        queue.push(j)
16    }
17    for (let i = 0; i < nums.length - (k - 1); i++) {
18        res.push(nums[queue[0]])
19        while (queue.length && nums[queue[queue.length - 1]] <= nums[j]) {
20            queue.pop()
21        }
22        queue.push(j)
23        if (queue[0] < i + 1) {
24            queue.shift();
25        }
26        j++
27    }
28    return res
29};