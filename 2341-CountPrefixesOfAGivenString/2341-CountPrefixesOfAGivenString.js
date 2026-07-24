// Last updated: 24/07/2026, 23:48:11
/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    let count = 0;
    words.map((item) => s.startsWith(item) ? count++ : "")
    return count;
};