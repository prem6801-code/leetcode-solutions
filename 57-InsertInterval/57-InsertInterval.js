// Last updated: 24/07/2026, 23:54:33
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    // [[1, 2], [3, 5], [4, 8], [6, 7], [8, 10], [12, 16]]
    let res = [];
    // console.log(intervals)
    for (let interval of intervals) {
        let currInterval = res[res.length - 1] || [];
        if (currInterval[1] >= interval[0]) {
            currInterval[0] = Math.min(currInterval[0], interval[0])
            currInterval[1] = Math.max(currInterval[1], interval[1])
            // console.log(res)
        } else {
            res.push(interval)
        }
    }
    return res;
};