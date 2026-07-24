// Last updated: 24/07/2026, 23:51:26
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);

    let j = 0;
    let i = 0;
    let count = 0;

    while (j < g.length && i < s.length) {
        if (g[j] <= s[i]) {
            i++;
            j++;
            count++;
        } else {
            i++
        }
    }

    return count;
};
