// Last updated: 24/07/2026, 23:52:05
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (arr) {
    let total = 1;
    let totalCount = 0
    let zeros = 0
    let zeroidx
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            total *= arr[i]
        } else {
            zeros++;
            if (zeros >= 2) break;
            zeroidx = i
        }
    }
    if (zeros >= 2) {
        return arr.map((item) => item = 0)
    } else if (zeros == 1) {
        return arr.map((item, i) => {
            return i !== zeroidx ? item = 0 : item = total
        })
    } else {
        return arr.map((item) => total / item)
    }
};