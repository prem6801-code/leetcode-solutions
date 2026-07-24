// Last updated: 24/07/2026, 23:47:38
/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let oddmax = -Infinity;
    let evenmin = Infinity;
    for (const [key, value] of map.entries()) {
        if (value % 2 == 0) {
            evenmin = Math.min(evenmin, value)
        } else {
            oddmax = Math.max(oddmax, value);
        }
    }
    return oddmax - evenmin
};