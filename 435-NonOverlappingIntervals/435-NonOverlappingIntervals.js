// Last updated: 24/07/2026, 23:51:32
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    let arr = intervals.sort((a, b) => a[1] - b[1])
    // console.log(arr)
    let min = -Infinity;
    let max = -Infinity;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i][0] > min && arr[i][0] < max) || (arr[i][1] < min && arr[i][1] < max) ||
            (min > arr[i][0] && min < arr[i][1]) || (max > arr[i][0] && max < arr[i][1])
            || (min == arr[i][0] && max == arr[i][1])
        ) {
            res.push(arr[i])
        } else {
            if (arr[i][0] < min || min == -1) min = arr[i][0];
            if (arr[i][1] > max || max == -1) max = arr[i][1];
        }
    }
    return res.length
};