// Last updated: 24/07/2026, 23:49:41
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return b[1] - a[1];
    });
    if (!intervals.length) return []
    let res = [intervals[0]];
    let ct = intervals.length
    for (let i = 1; i < intervals.length; i++) {
        let last = res[res.length - 1];
        // console.log(intervals[i])
        while (i < intervals.length && (intervals[i][0] <= last[0] || intervals[i][1] <= last[1])) {
            i++
            ct--;
        }
        res.push(intervals[i])
    }

    return ct
};