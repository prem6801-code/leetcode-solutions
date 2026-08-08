// Last updated: 08/08/2026, 12:02:08
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var findMin = function (nums) {
6    let start = 0;
7    let end = nums.length - 1;
8    let mid;
9
10    while (start < end) {
11        mid = Math.floor((start + end) / 2)
12        // console.log(nums[mid])
13        if (nums[mid - 1] > nums[mid] && nums[mid + 1] > nums[mid]) {
14            return nums[mid]
15        } else if (nums[mid] < nums[end]) {
16            end = mid - 1;
17        } else {
18            start = mid + 1
19        }
20    }
21    // console.log(start, end)
22    return nums[start]
23};