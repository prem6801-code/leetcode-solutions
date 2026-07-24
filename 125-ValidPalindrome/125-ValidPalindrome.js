// Last updated: 24/07/2026, 23:53:23
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const str = s.split(/[^a-zA-Z0-9]+/).filter(Boolean).join('').toLowerCase();
    const rec = (i, j) => {
        if (i >= j) return true;
        if (str[i] !== str[j]) return false
        return rec(i + 1, j - 1)
    }
    return rec(0, str.length - 1)
};