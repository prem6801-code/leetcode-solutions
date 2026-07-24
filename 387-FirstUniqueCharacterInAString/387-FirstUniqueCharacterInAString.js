// Last updated: 24/07/2026, 23:51:38
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let chMap = {};
    for (let i = 0; i < s.length; i++) {
        ch = s[i]
        if (!(ch in chMap)) chMap[ch] = [];
        chMap[ch].push(i)
    }
    for (let [key, value] of Object.entries(chMap)) {
        if (value.length == 1) return value[0]
    }
    return -1
};