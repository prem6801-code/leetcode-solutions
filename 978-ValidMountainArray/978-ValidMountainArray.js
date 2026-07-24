// Last updated: 24/07/2026, 23:50:03
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) return false;
    let i = 0;
    while (arr[i + 1] > arr[i] && i < arr.length) {
        i++;
    }
    if (i == arr.length - 1 || i == 0) return false;
    // console.log(i)
    while (arr[i + 1] < arr[i] && i < arr.length) {
        i++
    }
    // console.log(i)
    return i == arr.length - 1
};