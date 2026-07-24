// Last updated: 24/07/2026, 23:50:14
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let maxEl = 0
    for (let i = 0; i < piles.length; i++) {
        maxEl = Math.max(maxEl, piles[i])
    }

    let calHours = (arr, val) => {
        let hrs = 0
        for (let i = 0; i < arr.length; i++) {
            hrs += Math.ceil(arr[i] / val)
        }
        return hrs
    }

    let start = 0;
    let end = maxEl
    let mid
    let minHrs = Infinity
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (calHours(piles, mid) <= h) {
            minHrs = Math.min(minHrs, mid)
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return minHrs
};