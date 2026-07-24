// Last updated: 24/07/2026, 23:49:14
/**
 * @param {number[]} arr
 * @return {number[]}
 */


var sortByBits = function (arr) {
    let countBits = (n) => {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    };
    return arr.sort((a, b) => {
        let ca = countBits(a);
        let cb = countBits(b);
        return ca === cb ? a - b : ca - cb;
    });
};