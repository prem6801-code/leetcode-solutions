// Last updated: 24/07/2026, 23:51:55
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    s = s.split(" ");
    let map = {};
    let set = new Set();
    if (s.length !== pattern.length) return false;
    for (let i = 0; i < pattern.length; i++) {
        // console.log("inside loop", pattern[i])
        if (!(pattern[i] in map) && !set.has(s[i])) {
            map[pattern[i]] = s[i];    
        }
         set.add(s[i])
    }
    let res = "";

    for (let el of pattern) {
        res += map[el] || ""
    }

    return res == s.join("")
};