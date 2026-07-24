// Last updated: 24/07/2026, 23:47:31
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    let d1 = Math.abs(x - z);
    let d2 = Math.abs(y - z);
    return d1 == d2 ? 0 : d1 < d2 ? 1 : 2
};