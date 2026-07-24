// Last updated: 24/07/2026, 23:54:42
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};
    for (let str of strs) {
        let chArr = new Array(26).fill(0);
        for (let ch of str) {
            chArr[ch.charCodeAt(0) - "a".charCodeAt(0)]++
        }
        let code = chArr.join("-")
        if (!(code in map)) map[code] = []
        map[code].push(str)
    }
    let res = []
    for (let [key, value] of Object.entries(map)) {
        res.push(value)
    }
    return res;
};