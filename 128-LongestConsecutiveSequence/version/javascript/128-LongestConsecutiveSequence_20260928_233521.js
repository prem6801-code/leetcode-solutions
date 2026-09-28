// Last updated: 28/09/2026, 23:35:21
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var longestConsecutive = function (nums) {
6    let set = new Set(nums);
7    let longestSeq = 0;
8    for (const num of set) {
9        if (!set.has(num - 1)) {
10            let temp = num;
11            let seq = 1;
12            while (set.has(temp + 1)) {
13                temp++;
14                seq++;
15            }
16            longestSeq = Math.max(longestSeq, seq);
17        }
18    }
19    return longestSeq
20};