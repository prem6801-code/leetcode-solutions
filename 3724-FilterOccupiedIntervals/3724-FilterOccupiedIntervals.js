// Last updated: 24/07/2026, 23:47:41
/**
 * @param {number[][]} occupiedIntervals
 * @param {number} freeStart
 * @param {number} freeEnd
 * @return {number[][]}
 */
var filterOccupiedIntervals = function (occupiedIntervals, freeStart, freeEnd) {
    occupiedIntervals.sort((a, b) => a[0] - b[0])
    let mInt = [];
    for (let interval of occupiedIntervals) {
        let arr = mInt[mInt.length - 1] || [];
        if (arr[1] >= interval[0] || Math.abs(interval[0] - arr[1]) == 1) {
            arr[1] = Math.max(arr[1], interval[1])
        } else {
            mInt.push(interval)
        }
    }
    let result = []
    for (let int of mInt) {
        let arr = int
        if (!(arr[0] >= freeStart && arr[1] <= freeEnd)) {
            if ((arr[0] < freeStart && arr[1] > freeStart) && (arr[0] < freeEnd && arr[1] > freeEnd)) {
                result.push([arr[0], freeStart - 1]);
                result.push([freeEnd + 1, arr[1]])
            } else if (arr[0] >= freeStart && arr[0] <= freeEnd) {
                arr[0] = freeEnd + 1;
                result.push(arr)
            } else if (arr[1] >= freeStart && arr[1] <= freeEnd) {
                arr[1] = freeStart - 1;
                result.push(arr)
            } else {
                result.push(arr)
            }
        }
    }
    return result
};