// Last updated: 24/07/2026, 23:49:12
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let map = [-1, -1, -1];
    let j = 0;
    let res = 0;
    while (j < s.length) {
        map[s[j].charCodeAt(0) - "a".charCodeAt(0)] = j
        if (map[0] >= 0 && map[1] >= 0 && map[2] >= 0) {
            res += 1 + Math.min(map[0], map[1], map[2]);
        }
        j++;
    }
    return res;
};