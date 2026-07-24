// Last updated: 24/07/2026, 23:49:00
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let set = new Set([...arr]);
    for (let i = 1; i <= arr[arr.length - 1]; i++) {
        if (!set.has(i)) {
            k--;
        }

        if (k == 0) {
            return i;
        }
    }

    if (k !== 0) {
        return arr[arr.length - 1] + k
    }
};