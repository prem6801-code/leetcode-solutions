// Last updated: 10/08/2026, 23:02:55
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var singleNonDuplicate = function (nums) {
6    let start = 0;
7    let end = nums.length - 1;
8    let mid;
9    while (start <= end) {
10        mid = Math.floor((start + end) / 2);
11        if ((mid % 2 !== 0 && nums[mid - 1] == nums[mid])
12            || (mid % 2 == 0 && nums[mid + 1] == nums[mid])
13        ) {
14            start = mid + 1
15        } else {
16            end = mid - 1;
17        }
18    }
19    return nums[start];
20};