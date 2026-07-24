// Last updated: 24/07/2026, 23:48:42
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
    let count = 0
    let arr = []
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            for (let k = 1; k < i; k++) {
                if ((j * j) + (k * k) == i * i) {
                    count++;
                    arr.push([i, j, k])
                }
            }
        }
    }
    return count
};