// Last updated: 24/07/2026, 23:48:38
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let count = 0;
    for (let pattern of patterns) {
        if (word.includes(pattern)) count++
    }
    return count;
};