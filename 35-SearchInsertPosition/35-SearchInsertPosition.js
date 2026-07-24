// Last updated: 24/07/2026, 23:54:55
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (arr, target) {
    let l = 0, r = arr.length - 1;
    while (l <= r) {
        let m = (l + r) >> 1;
        if (arr[m] === target) return m;
        if (arr[m] > target) r = m - 1; else l = m + 1;
    }
    return l;
};