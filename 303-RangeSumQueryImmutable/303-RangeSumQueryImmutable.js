// Last updated: 24/07/2026, 23:51:52
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        this.nums.push(this.nums[this.nums.length - 1] + nums[i])
    }
    // console.log(this.nums)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    // console.log(this.nums[right], this.nums[left])
    return this.nums[right] - (left - 1 < 0 ? 0 : this.nums[left - 1])
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */