// Last updated: 24/07/2026, 23:51:27
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let hash = new Map();
    for (let i = 0; i < s.length; i++) {
        hash.has(s[i]) ? hash.set(s[i], hash.get(s[i]) + 1) : hash.set(s[i], 1)
    }
    let str = s.split("").sort((a, b) => hash.get(b) != hash.get(a) ? hash.get(b) - hash.get(a) : b.localeCompare(a)).join("");
    return str;
};