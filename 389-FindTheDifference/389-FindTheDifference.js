// Last updated: 24/07/2026, 23:51:37
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let set = new Set(s);
    let map = {};

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    // console.log(set)
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]] || map[t[i]] == 0) return t[i];
        map[t[i]]--;
    }
    return "";
};