// Last updated: 24/07/2026, 23:54:34
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let res = []
    for (let interval of intervals) {
        let top = res[res.length - 1]
        if (top && top[1] >= interval[0]) {
            top[0] = Math.min(top[0], interval[0])
            top[1] = Math.max(top[1], interval[1])
        } else {
            res.push(interval)
        }
    }
    return res
};