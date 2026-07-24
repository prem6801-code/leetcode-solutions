// Last updated: 24/07/2026, 23:52:49
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let element, count = 0;
    for (let num of nums) {
        if (count == 0) element = num;
        if (element == num) count++;
        else count--
    }
    return element
};