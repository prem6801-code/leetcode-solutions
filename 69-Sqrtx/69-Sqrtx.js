// Last updated: 24/07/2026, 23:54:21
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    const num = x / 2;
    // for (let i = 0; i <= num; i++) {
    //     if (i * i === x) {
    //         return i;
    //     }
    //     else if (i * i > x) {h.
    //         return i - 1;
    //     }
    // }

    let start = 0;

    let end = x;
    let mid;
    // 8  mid 4 
    // 4*4<mid 

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (mid * mid === x) {
            return mid;
        } else if (x < mid * mid) {
            end = mid - 1;
        } else if (x > mid * mid) {
            start = mid + 1;
        }
    }

    return end;
};