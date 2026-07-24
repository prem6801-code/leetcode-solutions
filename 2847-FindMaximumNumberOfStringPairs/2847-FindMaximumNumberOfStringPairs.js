// Last updated: 24/07/2026, 23:47:55
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let map = new Map()
    let count = 0
    for (word of words) {
        map.has(word.split("").reverse().join("")) ? count++ : map.set(word,1)
    }

    return count
};