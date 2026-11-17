// Last updated: 18/11/2026, 00:02:30
1/**
2 * @param {number[]} nums
3 */
4var NumArray = function (nums) {
5    this.numArray = []
6    for (let i = 0; i < nums.length; i++) {
7        this.numArray.push((this.numArray[this.numArray.length - 1] || 0) + nums[i])
8    }
9    console.log(this.numArray)
10};
11
12
13/** 
14 * @param {number} left 
15 * @param {number} right
16 * @return {number}
17 */
18NumArray.prototype.sumRange = function (left, right) {
19    // console.log(this.numArray[right] - this.numArray[left])
20    // return 0
21    return this.numArray[right] - (left - 1 < 0 ? 0 : this.numArray[left - 1])
22};
23
24/** 
25 * Your NumArray object will be instantiated and called as such:
26 * var obj = new NumArray(nums)
27 * var param_1 = obj.sumRange(left,right)
28 */