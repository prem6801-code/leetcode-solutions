// Last updated: 31/08/2026, 23:21:14
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function (nums) {
6    let unique = nums[0];
7    let uniquect = 0;
8
9    let i = 0, j = 0;
10
11    while (j <= nums.length) {
12        if (nums[j] !== unique) {
13            if (uniquect == 1) {
14                nums[i] = unique
15                i++;
16            } else {
17                nums[i] = unique;
18                nums[i + 1] = unique;
19                i = i + 2
20            }
21            unique = nums[j];
22            // console.log(nums[j])
23            uniquect = 0
24        }
25        uniquect++;
26        j++;
27    }
28    return i;
29};