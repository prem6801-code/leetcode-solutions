// Last updated: 10/08/2026, 22:53:36
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
11        if (nums[mid - 1] < nums[mid] && nums[mid] < nums[mid + 1]) {
12            return nums[mid]
13        } else if ((mid % 2 !== 0 && nums[mid - 1] == nums[mid])
14            || (mid % 2 == 0 && nums[mid + 1] == nums[mid])
15        ) {
16            start = mid + 1
17        } else {
18            end = mid - 1;
19        }
20    }
21    return nums[start];
22};