// Last updated: 28/09/2026, 23:30:58
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var longestConsecutive = function (nums) {
6    let set = new Set([...nums]);
7    let longestSeq = 0;
8    for (let i = 0; i < nums.length; i++) {
9        if (!set.has(nums[i] - 1) && set.has(nums[i])) {
10            let temp = nums[i]
11            let seq = 0
12            while (set.has(temp)) {
13                set.delete(temp)
14                seq++;
15                temp++
16            }
17            longestSeq = Math.max(longestSeq, seq)
18        }
19    }
20
21    return longestSeq
22};