// Last updated: 24/07/2026, 23:53:22
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let max = 0;
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    // console.log(set)
    for (let num of set) {
        if (!(set.has(num - 1))) {
            // console.log(num)
            let temp = num; count = 0;
            while (set.has(temp++)) {
                // console.log(temp,"-->")
                count++;
            }
            // console.log(count,"count")
            max = Math.max(max, count);
        }
    }

    return max;
};