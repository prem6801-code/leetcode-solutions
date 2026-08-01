// Last updated: 01/08/2026, 23:53:58
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
17    console.log(queue, j)
18    for (let i = 0; i < nums.length - (k - 1); i++) {
19        res.push(nums[queue[0]])
20        while (queue.length && nums[queue[queue.length - 1]] <= nums[j]) {
21            queue.pop()
22        }
23        queue.push(j)
24        if (queue[0] < i + 1) {
25            queue.shift();
26        }
27        j++
28    }
29    return res
30};