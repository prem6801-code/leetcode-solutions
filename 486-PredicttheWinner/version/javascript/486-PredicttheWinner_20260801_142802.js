// Last updated: 01/08/2026, 14:28:02
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var predictTheWinner = function (nums) {
6    let findWinner = (i, j) => {
7        if (i === j) {
8            return nums[i];
9        }
10
11        let takeLeft = nums[i] - findWinner(i + 1, j);
12        let takeRight = nums[j] - findWinner(i, j - 1);
13
14        return Math.max(takeLeft, takeRight);
15    }
16    return findWinner(0, nums.length - 1) >= 0
17};