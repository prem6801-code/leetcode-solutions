// Last updated: 24/07/2026, 23:50:24
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length < goal.length) return false;
    let i = 0; j = s.length;
    s = s + s;

    while (j < s.length) {
        if (s.slice(i, j) == goal) return true;
        i++;
        j++;
    }

    return false
};