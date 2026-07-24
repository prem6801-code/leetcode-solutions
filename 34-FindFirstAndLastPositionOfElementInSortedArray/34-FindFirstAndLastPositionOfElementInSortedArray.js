// Last updated: 24/07/2026, 23:54:57
var searchRange = function (arr, target) {
    let findLowerBound = (i, j, lower) => {
        let start = i;
        let end = j;
        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] >= target && lower) {
                end = mid;
            } else if (arr[mid] > target && !lower) {
                end = mid;
            } else {
                start = mid + 1
            }
        }
        return start;
    };

    let findUpperBound = (i, j) => {
        let start = i;
        let end = j;
        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] > target) end = mid;
            else start = mid + 1;
        }
        return start;
    };

    let startIdx = findLowerBound(0, arr.length, true);

    if (startIdx === arr.length || arr[startIdx] !== target) {
        return [-1, -1];
    }
    let endIdx = findLowerBound(0, arr.length, false);

    return [startIdx, endIdx - 1];
};