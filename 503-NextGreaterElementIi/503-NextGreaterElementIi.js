// Last updated: 24/07/2026, 23:51:20
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    let nextGreater = new Array(nums.length).fill(-1);
    for (let i = 0; i < nums.length * 2; i++) {
        let n = i % nums.length;
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[n]) {
            let idx = stack.pop()
            nextGreater[idx] = nums[n]
        }
        if (i < nums.length) {
            stack.push(n);
        }
    }
    return nextGreater;
};



