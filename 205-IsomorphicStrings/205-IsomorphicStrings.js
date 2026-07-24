// Last updated: 24/07/2026, 23:52:27
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 **/

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false
    let map1 = new Map();
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!map1.has(s[i]) && !set.has(t[i])) {
            map1.set(s[i], t[i])
            set.add(t[i])
        }
    }


    let str = ""
    for (let i = 0; i < s.length; i++) {
        str += map1.get(s[i])
    }
    return str === t
};